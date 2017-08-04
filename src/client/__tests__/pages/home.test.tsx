import { shallow } from 'enzyme';
import * as React from 'react';

import LayoutLanding from './../../components/LayoutLanding';
import Home from './../../pages/home';

describe('Home Page', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Home />);
  });

  describe('Shallow Render Components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<Home />);
    });

    it('contains LayoutLanding', () => {
      expect(
        wrapper.find('LayoutLanding').at(0).equals(
          <LayoutLanding>
            <p>Landing (home) page</p>
          </LayoutLanding>,
        ),
      ).toBe(true);
    });
  });
});
