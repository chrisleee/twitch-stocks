import { shallow } from 'enzyme';
import * as React from 'react';

import Footer from './../../components/Footer';
import HeaderLanding from './../../components/HeaderDefault';
import LayoutLanding from './../../components/LayoutLanding';

describe('<LayoutLanding />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <LayoutLanding>
        <p>Test</p>
      </LayoutLanding>,
    );
  });

  describe('Shallow Render Components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(
        <LayoutLanding>
          <p>Test</p>
        </LayoutLanding>,
      );
    });

    it('contains HeaderLanding', () => {
      expect(wrapper.contains(<HeaderLanding />)).toBe(true);
    });

    it('contains children', () => {
      expect(wrapper.find('p').at(0).equals(<p>Test</p>)).toBe(true);
    });

    it('contains Footer', () => {
      expect(wrapper.find('Footer').at(0).equals(<Footer />)).toBe(true);
    });
  });
});
