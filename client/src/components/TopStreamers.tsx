import fetch = require('isomorphic-fetch');
import * as React from 'react';

interface ITopStreamersState {
  streamers: Array<{ [key: string]: any }>;
}

export default class TopStreamers extends React.Component<
  any,
  ITopStreamersState
> {
  constructor(props: any) {
    super(props);
    this.state = { streamers: [{}] };
    // this.getStreamers = this.getStreamers.bind(this);
    this.setState = this.setState.bind(this);
  }

  public async getStreamers() {
    const response = await fetch(
      'http://localhost:3001/api/channels?sort=averageViewers,allTime,desc&limit=3',
    );
    const json = await response.json();
    return json;
  }

  public componentWillMount() {
    this.getStreamers().then(res => {
      this.setState({ streamers: res });
      // console.log(res);
      // this.processStreamers(res);
    });
  }

  public processStreamers(streamers: Array<{ [key: string]: any }>) {
    // const len = streamers.length;
    const iterations = 3;
    for (let i = 0; i < iterations; i++) {
      // console.log(streamers[i].averageViewers);
    }
  }

  public render() {
    return (
      <div>
        {/* Header bar */}
        <div>Val 1 - Val 2 - Val 3</div>
        <ul>
          {this.state.streamers.map(streamer => {
            if (streamer.averageViewers) {
              return (
                <li key={streamer._id}>
                  {streamer.channelDisplayName} -{' '}
                  {Math.round(streamer.averageViewers.allTime.value)}
                </li>
              );
            } else {
              return;
            }
          })}
        </ul>
        {/* prices and gains */}
        <div>Current price - real gain/wk - percentage gain/wk</div>
        {/* Graph */}
        <div>Graph goes here when built</div>
      </div>
    );
  }
}
