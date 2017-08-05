import { shallow } from 'enzyme';
import Link from 'next/link';
import * as React from 'react';

import HeaderLoginRegister from './../../components/HeaderLoginRegister';

describe('<HeaderLoginRegister />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<HeaderLoginRegister />);
  });

  describe('Shallow Render Components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<HeaderLoginRegister />);
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
