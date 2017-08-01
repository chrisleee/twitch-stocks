import { log } from 'util';
import * as request from 'request-promise-native';
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
    const httpOptions = {
      headers: {
        'Client-Id': process.env.TWITCH_CLIENT_ID,
      },
      url: 'https://api.twitch.tv/kraken/streams/',
    };

    let body;
    let info;
    try {
      body = await request(httpOptions);
      info = JSON.parse(body);
    } catch (e) {
      // Get specific error here for better error handling
      // console.log(e);
    }
    for (let i = 0; i < numToGet; i++) {
      const stream = info.streams[i];
      const twitch = new Twitch(
        stream._id,
        stream.channel.display_name,
        stream.channel.url,
        stream.viewers
      );
      let channel: IChannel | null | undefined;
      try {
        channel = await Channel.findOne({ channelId: twitch.channelId });
      } catch (e) {
        console.log(e);
      }
      if (!channel) {
        try {
          channel = new Channel({
            channelId: twitch.channelId,
            channelName: twitch.channelName,
            channelURL: twitch.channelURL,
            currentViewers: twitch.currentViewers
          });
          console.log('Channel is now: ', channel);
        } catch (e) {
          console.log(e);
          continue;
        }
      }
      const peakViewers = twitch.calculatePeakViewers(channel.peakViewers);
      const averageViewers = twitch.calculateAverageViewers(channel.averageViewers);
      try {
        if (channel.isNew) {
          channel.peakViewers = peakViewers;
          channel.averageViewers = averageViewers;
          console.log(await channel.save());
        } else {
          await channel.update({ peakViewers, averageViewers, currentViewers: twitch.currentViewers });
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
}
