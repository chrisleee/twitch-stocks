import * as React from 'react';
import TestComponent from '../components/TestComponent';
import Link from 'next/link'

export default class Index extends React.Component<any,any> {

  constructor() {
    super();
  }

  render() {
    return <div>
      <p>
        Welcome to Twitch Stocks! If you forked and cloned this project and you're
        trying to learn React, go ahead and mess around with it a bit.
      </p>
      <TestComponent />
      <p>
        {process.env.TEST}
      </p>
    </div>;
  }
}
