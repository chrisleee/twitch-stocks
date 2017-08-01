import * as request from 'request-promise-native';
import { Channel, IAverage, IChannel } from '../server/models/channels';

/**
 * Class to retrieve data from twitch and upload it to the database
 */
export class Twitch {
  private ChannelId: string;
  private ChannelName: string;
  private ChannelURL: string;
  private CurrentViewers: number;

  constructor(channelId: string, channelName: string, channelURL: string, currentViewers: number) {
    this.ChannelId = channelId;
    this.ChannelName = channelName;
    this.ChannelURL = channelURL;
    this.CurrentViewers = currentViewers;
  }

  get channelId(): string {
    return this.ChannelId;
  }

  get channelName(): string {
    return this.ChannelName;
  }

  get channelURL(): string {
    return this.ChannelURL;
  }

  get currentViewers(): number {
    return this.CurrentViewers;
  }

  set currentViewers(val: number) {
    this.CurrentViewers = val;
  }

  public toString() {
    return `{channelId: ${this.ChannelId}, channelName: ${this.ChannelName}, channelURL: ${this.ChannelURL}, currentViewers: ${this.CurrentViewers}}`;
  }

  /**
   * Calculate the peak viewers.
   * Returns a peakViewers object with updated data
   * @param currentPeak Object containing current peak viewers of channel
   */
  public calculatePeakViewers(currentPeak: { allTime: number, month: number, week: number, day: number }) {
    const newPeak: { allTime: number, month: number, week: number, day: number } = { allTime: 0, month: 0, week: 0, day: 0 };
    console.log(currentPeak);
    
    if (!currentPeak.allTime || currentPeak.allTime < this.CurrentViewers) {
      newPeak.allTime = this.CurrentViewers;
    }
    if (!currentPeak.month || currentPeak.month < this.CurrentViewers) {
      newPeak.month = this.CurrentViewers;
    }
    if (!currentPeak.week || currentPeak.week < this.CurrentViewers) {
      newPeak.week = this.CurrentViewers;
    }
    if (!currentPeak.day || currentPeak.day < this.CurrentViewers) {
      newPeak.day = this.CurrentViewers;
    }
    return newPeak;
  }

  /**
   * Calculates the running averages of a channel. Returns an averageViewers object with updated data
   * @param channel Channel to calculate from
   * @param currentViewers number of current viewers of channel
   */
  public calculateAverageViewers(averageViewers: { allTime: IAverage, month: IAverage, week: IAverage, day: IAverage }) {
    if (this.isEmptyObject(averageViewers.allTime)) { // Test .allTime because mongoose initializes the object even if empty
      averageViewers = {
        allTime: this.initializeAverageProperties(this.CurrentViewers),
        day: this.initializeAverageProperties(this.CurrentViewers),
        month: this.initializeAverageProperties(this.CurrentViewers),
        week: this.initializeAverageProperties(this.CurrentViewers),
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

  private isEmptyObject(obj: object): boolean {
    for (const x in obj) {
      if (obj.hasOwnProperty(x)) {
        return false;
      }
    }
    return true;
  }
}
