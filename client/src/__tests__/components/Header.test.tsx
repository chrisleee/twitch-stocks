import { shallow } from 'enzyme';
import Link from 'next/link';
import * as React from 'react';

import Header from './../../components/Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
  });

  describe('Shallow Render Components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<Header />);
    });

    it('contains link to /', () => {
      expect(
        wrapper.find('Link').at(0).equals(
          <Link href="/">
            <a>Twitch-Stocks</a>
          </Link>,
        ),
      ).toBe(true);
    });

    // Temporarily set to '/' for now until we have auth
    it('contains link to /logout', () => {
      expect(
        wrapper.find('Link').at(1).equals(
          <Link href="/">
            <a>Logout</a>
          </Link>,
        ),
      ).toBe(true);
    });
  });
});
