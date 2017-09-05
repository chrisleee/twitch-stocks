import fetch = require('isomorphic-fetch');
import * as React from 'react';

interface ITopStreamersState {
  streamers: {};
}

export default class TopStreamers extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.getStreamers = this.getStreamers.bind(this);
    this.setState = this.setState.bind(this);
  }

  public async getStreamers() {
    const response = await fetch('http://localhost:3001/api/channels');
    const json = await response.json();
    // console.log(json);
  }

  public componentDidMount() {
    this.getStreamers();
  }

  public render() {
    return (
      <div>
        {/* Header bar */}
        <div>Val 1 - Val 2 - Val 3</div>
        {/* prices and gains */}
        <div>Current price - real gain/wk - percentage gain/wk</div>
        {/* Graph */}
        <div>Graph goes here</div>
      </div>
    );
  }
}
