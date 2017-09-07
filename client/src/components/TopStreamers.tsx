import fetch = require('isomorphic-fetch');
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import HeaderTop from './HeaderTop';
import { RightAlignedHeaderItem, RightAlignedHeaderItemLeft } from './styles';
import TopStreamersInfopane from './TopStreamersInfopane';

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid gray;
  margin-bottom: 5px;
`;

const A = styled.a`padding: 0 5px 0 5px;`;

const RightNav = RightAlignedHeaderItemLeft.extend`padding-left: 0px;`;

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
        <Nav>
          <RightNav>
            {this.state.streamers.map(streamer => {
              if (streamer.averageViewers) {
                return (
                  <A key={streamer._id} href={streamer._id}>
                    {streamer.channelDisplayName} -{' '}
                    {Math.round(streamer.averageViewers.allTime.value)}
                  </A>
                );
              } else {
                return;
              }
            })}
          </RightNav>
          <RightAlignedHeaderItem>
            Day - Week - Month - All Time
          </RightAlignedHeaderItem>
        </Nav>
        <TopStreamersInfopane streamer={this.state.streamers[0]} />
        <div>Graph goes here when built</div>
      </div>
    );
  }
}
