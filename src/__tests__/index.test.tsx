import { shallow } from 'enzyme';
import * as React from 'react';

import App from '../pages/index';

describe('Index Page', () => {
  it('renders a <p> with static description text', () => {
    const app = shallow(<App />);
    const expectedText =
      "Welcome to Twitch Stocks! If you forked and cloned this project and you're trying to learn React, go ahead and mess around with it a bit.";
    expect(app.find('p').first().text()).toEqual(expectedText);
  });
});
