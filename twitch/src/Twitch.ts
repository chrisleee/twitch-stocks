import * as moment from 'moment';
import * as request from 'request-promise-native';
import { Channel, IChannel } from './models/channels';
import { IViewer, IViewerContainer } from './models/viewerContainer';

/**
 * Class to retrieve data from twitch and upload it to the database
 */
export class Twitch {
  private ChannelId: string;
  private ChannelName: string;
  private ChannelDisplayName: string;
  private ChannelURL: string;
  private CurrentViewers: number;

  constructor(
    channelId: string,
    channelName: string,
    channelDisplayName: string,
    channelURL: string,
    currentViewers: number,
  ) {
    this.ChannelId = channelId;
    this.ChannelName = channelName;
    this.ChannelDisplayName = channelDisplayName;
    this.ChannelURL = channelURL;
    this.CurrentViewers = currentViewers;
  }

  get channelId(): string {
    return this.ChannelId;
  }

  get channelName(): string {
    return this.ChannelName;
  }

  get channelDisplayName(): string {
    return this.ChannelDisplayName;
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
      .ChannelName}, channelDisplayName: ${this
      .ChannelDisplayName} channelURL: ${this
      .ChannelURL}, currentViewers: ${this.CurrentViewers}}`;
  }

  public updateAverageViewers(currentAverage: IViewerContainer) {
    const now = moment();
    let lastUpdated: moment.Moment;
    let viewer = currentAverage.allTime;
    // currentAverage.allTime.value = ((viewer.value * viewer.iterations) + this.CurrentViewers) / ++viewer.iterations;
    currentAverage.allTime.value = this.calculateAverage(
      viewer,
      this.CurrentViewers,
    );
    currentAverage.allTime.lastUpdated = now.toISOString();

    viewer = currentAverage.month;
    lastUpdated = moment(viewer.lastUpdated);
    if (lastUpdated.isBetween(moment().startOf('month'), now)) {
      currentAverage.month.value = this.calculateAverage(
        viewer,
        this.CurrentViewers,
      );
      currentAverage.month.lastUpdated = now.toISOString();
    } else {
      this.resetViewer(viewer);
    }

    viewer = currentAverage.week;
    lastUpdated = moment(viewer.lastUpdated);
    if (lastUpdated.isBetween(moment().startOf('week'), now)) {
      currentAverage.week.value = this.calculateAverage(
        viewer,
        this.CurrentViewers,
      );
      currentAverage.week.lastUpdated = now.toISOString();
    } else {
      this.resetViewer(viewer);
    }

    viewer = currentAverage.day;
    lastUpdated = moment(viewer.lastUpdated);
    if (lastUpdated.isBetween(moment().startOf('day'), now)) {
      currentAverage.day.value = this.calculateAverage(
        viewer,
        this.CurrentViewers,
      );
      currentAverage.day.lastUpdated = now.toISOString();
    } else {
      this.resetViewer(viewer);
    }

    return currentAverage;
  }

  /**
   * Updates the peakViewers value for an IViewerContainer with currentViewers value.
   * Returns the updated IViewerContainer
   * @param currentPeak IViewerContainer from a channel
   */
  public updatePeakViewers(currentPeak: IViewerContainer) {
    const now = moment();
    let lastUpdated: moment.Moment;

    // allTime should always be updated and never reset
    if (currentPeak.allTime.value < this.CurrentViewers) {
      currentPeak.allTime.value = this.CurrentViewers;
      currentPeak.allTime.iterations++;
    }

    // The other time periods should reset their values at the end of each period
    lastUpdated = moment(currentPeak.month.lastUpdated);
    if (lastUpdated.isBetween(moment().startOf('month'), now)) {
      if (currentPeak.month.value < this.CurrentViewers) {
        this.updateViewer(currentPeak.month, this.CurrentViewers);
      }
    } else {
      this.resetViewer(currentPeak.month);
    }

    lastUpdated = moment(currentPeak.week.lastUpdated);
    if (lastUpdated.isBetween(moment().startOf('week'), now)) {
      if (currentPeak.week.value < this.CurrentViewers) {
        this.updateViewer(currentPeak.week, this.CurrentViewers);
      }
    } else {
      this.resetViewer(currentPeak.week);
    }

    lastUpdated = moment(currentPeak.day.lastUpdated);
    if (lastUpdated.isBetween(moment().startOf('day'), now)) {
      if (currentPeak.day.value < this.CurrentViewers) {
        this.updateViewer(currentPeak.day, this.CurrentViewers);
      }
    } else {
      this.resetViewer(currentPeak.day);
    }
    return currentPeak;
  }

  /**
   * Returns an object that represents the IViewerContainer without the mongoose properties
   */
  public initializeViewers(timestamp?: string) {
    if (!timestamp) {
      return {
        allTime: this.initializeView(this.CurrentViewers),
        day: this.initializeView(this.CurrentViewers),
        month: this.initializeView(this.CurrentViewers),
        week: this.initializeView(this.CurrentViewers),
      };
    } else {
      return {
        allTime: this.initializeView(this.CurrentViewers, timestamp),
        day: this.initializeView(this.CurrentViewers, timestamp),
        month: this.initializeView(this.CurrentViewers, timestamp),
        week: this.initializeView(this.CurrentViewers, timestamp),
      };
    }
  }

  /**
   * Returns an object to represent the IViewer object without the mongoose properties
   * @param value Number to set as the initial value of the viewer object
   */
  private initializeView(value: number, timestamp?: string) {
    if (!timestamp) {
      return {
        iterations: 1,
        lastUpdated: new Date().toISOString(),
        value,
      };
    } else {
      return {
        iterations: 1,
        lastUpdated: timestamp,
        value,
      };
    }
  }

  private calculateAverage(viewer: IViewer, currentViewers: number) {
    return (
      (viewer.value * viewer.iterations + currentViewers) / ++viewer.iterations
    );
  }

  /**
   * Updates the date object with the the value, increments the iterations counter and updates the lastUpdated field
   * @param date object to reset
   * @param value number of viewers
   */
  private updateViewer(date: IViewer, value: number) {
    date.value = value;
    date.iterations++;
    date.lastUpdated = moment().toISOString();
  }

  /**
   * Resets a viewer to 0. Should be used when a viewers time period has expired
   * @param date object to reset
   */
  private resetViewer(date: IViewer) {
    date.value = 0;
    date.iterations = 1;
    date.lastUpdated = moment().toISOString();
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
