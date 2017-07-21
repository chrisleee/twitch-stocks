import Link from 'next/link';
import * as React from 'react';

export default class TestComponent extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <p>This is from TestComponent!</p>
        <Link href="https://github.com/ChrisALee/twitch-stocks">
          <a>GitHub Link</a>
        </Link>
      </div>
    );
  }
}
