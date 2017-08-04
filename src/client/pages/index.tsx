import * as React from 'react';

import LayoutLanding from '../components/LayoutLanding';

export default class Index extends React.Component<{}, {}> {
  public render() {
    return (
      <LayoutLanding>
        <p>Index Page</p>
      </LayoutLanding>
    );
  }
}
