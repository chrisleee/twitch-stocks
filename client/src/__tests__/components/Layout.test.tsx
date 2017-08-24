import { shallow } from 'enzyme';
import * as React from 'react';

import Link from 'next/link';
import Footer from './../../components/Footer';
import HeaderDefault from './../../components/HeaderDefault';
import Layout from './../../components/Layout';

describe('<Layout />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Layout>
        <p>Test</p>
      </Layout>,
    );
  });

  describe('Shallow Render Components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(
        <Layout>
          <p>Test</p>
        </Layout>,
      );
    });

    it('contains Header', () => {
      expect(
        wrapper.find('HeaderDefault').at(0).equals(<HeaderDefault />),
      ).toBe(true);
    });

    it('contains children', () => {
      expect(wrapper.find('p').at(0).equals(<p>Test</p>)).toBe(true);
    });

    it('contains Footer', () => {
      expect(wrapper.find('Footer').at(0).equals(<Footer />)).toBe(true);
    });
  });
});
