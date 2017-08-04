import { shallow } from 'enzyme';
import Link from 'next/link';
import * as React from 'react';

import Footer from './../../components/Footer';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
  });

  describe('Shallow Render Components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<Footer />);
    });

    it('contains link to /home', () => {
      expect(
        wrapper.find('Link').at(0).equals(
          <Link href="/home">
            <a>Home</a>
          </Link>,
        ),
      ).toBe(true);
    });

    it('contains link to #', () => {
      expect(
        wrapper.find('Link').at(1).equals(
          <Link href="#">
            <a>About</a>
          </Link>,
        ),
      ).toBe(true);
    });
  });
});
