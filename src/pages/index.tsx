import * as React from 'react';

import TestComponent from '../components/TestComponent';
import TestComponentWithState from '../components/TestComponentWithState';

export default () =>
  <div>
    <p>
      Welcome to Twitch Stocks! If you forked and cloned this project and you're
      trying to learn React, go ahead and mess around with it a bit.
    </p>
    <TestComponent />
    <TestComponentWithState />
    <p>
      {process.env.TEST}
    </p>
  </div>;
