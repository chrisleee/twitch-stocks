import { shallow } from 'enzyme';
import Link from 'next/link';
import * as React from 'react';

import Header from './../../components/HeaderDefault';

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
        wrapper.contains(
          <Link href="/">
            <a>Twitch Stocks</a>
          </Link>,
        ),
      ).toBe(true);
    });

    it('contains link to /logout', () => {
      expect(
        wrapper.contains(
          <Link href="/logout">
            <a>Logout</a>
          </Link>,
        ),
      ).toBe(true);
    });
  });
});
