import { shallow } from 'enzyme';
import * as React from 'react';

import LayoutLanding from './../../components/LayoutLanding';
import Index from './../../pages/index';

describe('Index Page', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Index />);
  });

  describe('Shallow Render Components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<Index />);
    });

    it('contains 2 steps from the getting started section', () => {
      expect(wrapper.contains([<h3>Step 3</h3>, <p>???</p>])).toBe(true);
    });
  });
});
