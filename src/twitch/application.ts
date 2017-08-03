import * as request from 'request-promise-native';
import { log } from 'util';
import { Twitch } from './Twitch';
import mongoose = require('mongoose');
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
    this.db.on(
      'error',
      console.error.bind(console, 'Mongoose connection error'),
    );
    this.db.once('open', (): void => {
      // Do something here if needed
    });
  }

  public async run() {
    await this.getStreams();
    this.db.close();
  }

  public async getStreams() {
    const numToGet = 5;
    const iterations = 2;
    for (let i = 0; i < iterations * numToGet; i = i === 0 ? 5 : i * numToGet) {
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
        // console.log(info);
      } catch (e) {
        // Get specific error here for better error handling
        // console.log(e);
      }
      await this.handleResults(info);
      await this.wait(1000);
    }
  }

  private async handleResults(info: any) {
    const len = info.streams.length;
    for (let i = 0; i < len; i++) {
      const stream = info.streams[i];
      const twitch = new Twitch(
        stream._id,
        stream.channel.display_name,
        stream.channel.url,
        stream.viewers,
      );
      let channel: IChannel | null | undefined;
      try {
        channel = await Channel.findOne({ channelId: twitch.channelId });
      } catch (e) {
        // console.log('Error finding record ', e);
      }
      if (!channel) {
        try {
          channel = new Channel({
            averageViewers: twitch.initializeViewers(),
            channelId: twitch.channelId,
            channelName: twitch.channelName,
            channelURL: twitch.channelURL,
            currentViewers: twitch.currentViewers,
            peakViewers: twitch.initializeViewers(),
          });
          // console.log('Channel is now: ', channel);
        } catch (e) {
          // console.log('Error creating new record, ', e);
          continue;
        }
      }
      try {
        if (channel.isNew) {
          const result = await channel.save();
          // console.log(result);
          // console.log('Added new record');
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
          // console.log('Updated record');
        }
      } catch (e) {
        // console.log('Error saving record ', e);
        break;
      }
    }
  }
  private async wait(length: number) {
    return new Promise(resolve => {
      setTimeout(resolve, length);
    });
  }
}
