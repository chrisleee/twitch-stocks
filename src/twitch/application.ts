import * as request from 'request-promise-native';
import { Channel, IAverage, IChannel } from '../server/models/channels';
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
  }

  /**
   * Gets the active streams from twitch
   * @param numToGet number of streams to process from twitch
   */
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
      let channel;
      try {
        channel = await this.findRecord(stream._id);
      } catch (e) {
        // console.log(e);
      }
      if (!channel) {
        const newChannel = new Channel({
          channelId: stream._id,
          channelName: stream.channel.display_name,
          channelURL: stream.channel.url,
          currentViewers: stream.viewers,
        });
        try {
          channel = await newChannel.save();
        } catch (e) {
          // console.log(e);
        }
      }
      if (channel) {
        await this.updateStreamDetails(channel, stream);
      }
    }
    return;
  }

  /**
   * Returns the channel requested by id of stream
   * @param id channelId of the channel to retrieve
   */
  private async findRecord(id: string): Promise<IChannel | null> {
    return await Channel.findOne({ channelId: id });
  }

  /**
   * Update the average and peak viewers of a stream
   * @param channel Channel to update
   * @param stream stream object retrieved from twitch api
   */
  private async updateStreamDetails(
    channel: IChannel,
    stream: { viewers: number },
  ) {
    const viewers = stream.viewers;
    const peakViewers = await this.calculatePeakViewers(channel, viewers);
    const averageViewers = this.calculateAverageViewers(channel, viewers);

    await channel.update({
      peakViewers,
      currentViewers: viewers,
      averageViewers,
    });
  }

  /**
   * Calculate the peak viewers.
   * Returns a peakViewers object with updated data
   * @param channel Channel to calculate from
   * @param currentViewers number of current viewers of channel
   */
  private async calculatePeakViewers(
    channel: IChannel,
    currentViewers: number,
  ) {
    const peakViewers = channel.peakViewers;
    if (!peakViewers.allTime || peakViewers.allTime < currentViewers) {
      peakViewers.allTime = currentViewers;
    }
    if (!peakViewers.month || peakViewers.month < currentViewers) {
      peakViewers.month = currentViewers;
    }
    if (!peakViewers.week || peakViewers.week < currentViewers) {
      peakViewers.week = currentViewers;
    }
    if (!peakViewers.day || peakViewers.day < currentViewers) {
      peakViewers.day = currentViewers;
    }
    return peakViewers;
  }

  /**
   * Calculates the running averages of a channel. Returns an averageViewers object with updated data
   * @param channel Channel to calculate from
   * @param currentViewers number of current viewers of channel
   */
  private calculateAverageViewers(channel: IChannel, currentViewers: number) {
    let averageViewers = channel.averageViewers;
    if (averageViewers !== undefined) {
      averageViewers = {
        allTime: this.initializeAverageProperties(currentViewers),
        day: this.initializeAverageProperties(currentViewers),
        month: this.initializeAverageProperties(currentViewers),
        week: this.initializeAverageProperties(currentViewers),
      };
    }
    return averageViewers;
  }

  /**
   * Sets the values for an averageViewers object to their initial state. Returns an averageViewers object
   * @param currentViewers number of current viewers of a channel
   */
  private initializeAverageProperties(currentViewers: number) {
    const average: any = {
      average: currentViewers,
      iterations: 1,
      lastUpdated: new Date().toISOString(),
    };
    return average;
  }
}
