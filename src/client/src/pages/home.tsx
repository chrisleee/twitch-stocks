import * as React from 'react';

import LayoutLanding from '../components/LayoutLanding';

export default class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <LayoutLanding>
        <p>Landing (home) page</p>
      </LayoutLanding>
    );
  }
}
