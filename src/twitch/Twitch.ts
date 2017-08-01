import * as request from 'request-promise-native';
import { Channel, IChannel } from '../server/models/channels';
import { IViewer, IViewerContainer } from '../server/models/viewerContainer';

/**
 * Class to retrieve data from twitch and upload it to the database
 */
export class Twitch {
  private ChannelId: string;
  private ChannelName: string;
  private ChannelURL: string;
  private CurrentViewers: number;

  constructor(
    channelId: string,
    channelName: string,
    channelURL: string,
    currentViewers: number,
  ) {
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
    return `{channelId: ${this.ChannelId}, channelName: ${this
      .ChannelName}, channelURL: ${this.ChannelURL}, currentViewers: ${this
      .CurrentViewers}}`;
  }

  public updatePeakViewers(currentPeak: IViewerContainer) {
    if (currentPeak.allTime.value < this.CurrentViewers) {
      currentPeak.allTime.value = this.CurrentViewers;
      currentPeak.allTime.iterations++;
    }
    if (currentPeak.month.value < this.CurrentViewers) {
      currentPeak.month.value = this.CurrentViewers;
      currentPeak.month.iterations++;
    }
    if (currentPeak.week.value < this.CurrentViewers) {
      currentPeak.week.value = this.CurrentViewers;
      currentPeak.week.iterations++;
    }
    if (currentPeak.day.value < this.CurrentViewers) {
      currentPeak.day.value = this.CurrentViewers;
      currentPeak.day.iterations++;
    }
    return currentPeak;
  }

  public initializeViewers() {
    return {
      allTime: this.initializeView(this.CurrentViewers),
      day: this.initializeView(this.CurrentViewers),
      month: this.initializeView(this.CurrentViewers),
      week: this.initializeView(this.CurrentViewers),
    };
  }

  private initializeView(value: number) {
    return {
      iterations: 1,
      lastUpdated: new Date().toISOString(),
      value,
    };
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
