import * as request from 'request-promise-native';
import { Channel, IChannel } from '../server/models/channels';
import mongoose = require('mongoose');
mongoose.Promise = global.Promise;

export class Twitch {
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

  public async run(numToGet?: number) {
    await this.getStreams(numToGet);
    this.db.close();
    mongoose.disconnect();
  }

  private async getStreams(numToGet?: number): Promise<void> {
    if (!numToGet) {
      numToGet = 5; // Change this to 100 once not testing.
    }
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
      const channel = await this.findRecord(stream._id);
      if (!channel) {
        const newChannel = new Channel({
          _id: stream._id,
          channelName: stream.channel.display_name,
          channelURL: stream.channel.url,
          currentViewers: stream.viewers,
        });
        const record = await newChannel.save();
        // console.log(record);
      }
    }
    return;
  }

  private async findRecord(id: string): Promise<IChannel | null> {
    return await Channel.findById(id);
  }
}
