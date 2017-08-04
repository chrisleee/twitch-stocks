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

    it('contains LayoutLanding', () => {
      expect(
        wrapper.find('LayoutLanding').at(0).equals(
          <LayoutLanding>
            <p>Index Page</p>
          </LayoutLanding>,
        ),
      ).toBe(true);
    });
  });
});
