import { shallow } from 'enzyme';
import * as React from 'react';

import Layout from './../../components/Layout';
import Settings from './../../pages/settings';

describe('Settings Page', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Settings />);
  });

  describe('Shallow Render Components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<Settings />);
    });

    it('contains Layout', () => {
      expect(
        wrapper.find('Layout').at(0).equals(
          <Layout>
            <p>Settings Page</p>
          </Layout>,
        ),
      ).toBe(true);
    });
  });
});
