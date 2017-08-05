import * as request from 'request-promise-native';
import { log } from 'util';
import { Twitch } from './Twitch';
import mongoose = require('mongoose');
import { logger } from '../logger';
import { Channel, IChannel } from '../server/models/channels';
mongoose.Promise = global.Promise;

export class Application {
  private db: mongoose.Connection;

  constructor() {
    mongoose.connect(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env
        .DB_HOST}`,
      { useMongoClient: true },
    );
    this.db = mongoose.connection;
    this.db.on('error', () => {
      logger.error(
        'Could not connect to database - Please ensure credentials in .env file are correct',
      );
    });
    this.db.once('open', (): void => {
      logger.info('Database connected');
    });
  }

  public async run() {
    await this.getStreams();
    this.db.close();
  }

  /**
   * get the online streams from twitch and add them to the database
   */
  public async getStreams() {
    logger.info('Getting live streams from Twitch API');
    const numToGet = 5; // Twitch limit is 100
    const iterations = 2;
    for (
      let i = 0;
      i < iterations * numToGet;
      i = i === 0 ? numToGet : i * numToGet
    ) {
      const httpOptions = {
        headers: {
          'Client-Id': process.env.TWITCH_CLIENT_ID,
        },
        url: `https://api.twitch.tv/kraken/streams/?limit=${numToGet}&offset=${i}`,
      };

      let body;
      let info;
      try {
        body = await request(httpOptions);
        info = JSON.parse(body);
      } catch (e) {
        logger.error(e);
      }
      await this.handleResults(info);
      await this.wait(1000);
    }
    logger.info('Finished processing twitch streams');
  }

  /**
   * processes the results of the twitch api call
   * @param info array of results from twitch api
   */
  private async handleResults(info: any) {
    const len = info.streams.length;
    for (let i = 0; i < len; i++) {
      const stream = info.streams[i];
      const twitch = new Twitch(
        stream.channel._id,
        stream.channel.name,
        stream.channel.display_name,
        stream.channel.url,
        stream.viewers,
      );
      let channel: IChannel | null | undefined;
      try {
        channel = await Channel.findOne({ channelId: twitch.channelId });
      } catch (e) {
        logger.error(`Error finding channel ${twitch.channelId}`, e);
      }
      if (!channel) {
        try {
          channel = new Channel({
            averageViewers: twitch.initializeViewers(),
            channelDisplayName: twitch.channelDisplayName,
            channelId: twitch.channelId,
            channelName: twitch.channelName,
            channelURL: twitch.channelURL,
            currentViewers: twitch.currentViewers,
            peakViewers: twitch.initializeViewers(),
          });
        } catch (e) {
          logger.error(
            `Error creating new record - skipping stream ${twitch.channelDisplayName}`,
            e,
          );
          continue;
        }
      }
      try {
        if (channel.isNew) {
          const result = await channel.save();
        } else {
          const peakViewers = twitch.updatePeakViewers(channel.peakViewers);
          const averageViewers = twitch.updateAverageViewers(
            channel.averageViewers,
          );
          await channel.update({
            averageViewers,
            currentViewers: twitch.currentViewers,
            peakViewers,
          });
        }
      } catch (e) {
        logger.error('Error saving record', e);
        continue;
      }
    }
  }

  /**
   * Timeout to wait a specied length of time
   * @param length time to wait (in ms)
   */
  private async wait(length: number) {
    return new Promise(resolve => {
      setTimeout(resolve, length);
    });
  }
}
