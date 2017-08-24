import { shallow } from 'enzyme';
import * as React from 'react';

import LayoutDashboard from './../../components/LayoutDashboard';
import Dashboard from './../../pages/dashboard';

describe('Dashboard Page', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Dashboard />);
  });

  describe('Shallow Render Components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<Dashboard />);
    });

    it('contains Layout', () => {
      expect(
        wrapper.contains(<LayoutDashboard>Dashboard Page</LayoutDashboard>),
      ).toBe(true);
    });
  });
});
