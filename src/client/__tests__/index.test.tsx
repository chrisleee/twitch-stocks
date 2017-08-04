import { shallow } from 'enzyme';
import * as React from 'react';

import App from '../pages/index';

describe('Index Page', () => {
  it('renders a <p> with static description text', () => {
    const app = shallow(<App />);
    const expectedText = 'Index Page';
    expect(app.find('p').first().text()).toEqual(expectedText);
  });
});
