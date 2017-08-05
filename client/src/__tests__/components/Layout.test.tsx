import { shallow } from 'enzyme';
import * as React from 'react';

import Footer from './../../components/Footer';
import Header from './../../components/Header';
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
      expect(wrapper.find('Header').at(0).equals(<Header />)).toBe(true);
    });

    it('contains children', () => {
      expect(wrapper.find('p').at(0).equals(<p>Test</p>)).toBe(true);
    });

    it('contains Footer', () => {
      expect(wrapper.find('Footer').at(0).equals(<Footer />)).toBe(true);
    });
  });
});
