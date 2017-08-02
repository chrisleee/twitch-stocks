import * as moment from 'moment';
import { IViewer, IViewerContainer } from '../../server/models/viewerContainer';
import { Twitch } from '../Twitch';

let twitch: Twitch;
describe('test getting from twitch api', () => {
  beforeEach(done => {
    twitch = new Twitch('1234', 'test', 'www.fake.com', 1);
    done();
  });
  it('should return initialized object', done => {
    const timestamp = new Date().toISOString();
    const viewer = {
      iterations: 1,
      lastUpdated: timestamp,
      value: 1,
    };
    const container = {
      allTime: viewer,
      day: viewer,
      month: viewer,
      week: viewer,
    };
    expect(twitch.initializeViewers(timestamp)).toMatchObject(container);
    done();
  });
  it('should update the viewer container object', done => {
    const container = twitch.initializeViewers();
    expect(container).toHaveProperty('allTime');
    expect(container.allTime).toHaveProperty('value');
    expect(container.allTime.value).toEqual(1);
    container.day.lastUpdated = moment().hour(5).toISOString();
    twitch.currentViewers = 10;
    expect(
      twitch.updatePeakViewers(container as IViewerContainer).day.value,
    ).toBe(10);
    done();
  });
});
