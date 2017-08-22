import { shallow } from 'enzyme';
import Link from 'next/link';
import * as React from 'react';

import HeaderDefault from './../../components/HeaderDefault';

describe('<HeaderLanding />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<HeaderDefault />);
  });

  describe('Shallow Render Components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<HeaderDefault />);
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

    it('contains link to /login', () => {
      expect(
        wrapper.find('Link').at(1).equals(
          <Link href="/login">
            <a>Login</a>
          </Link>,
        ),
      ).toBe(true);
    });

    it('contains link to /register', () => {
      expect(
        wrapper.find('Link').at(2).equals(
          <Link href="/register">
            <a>Register</a>
          </Link>,
        ),
      ).toBe(true);
    });
  });
});
