import { shallow } from 'enzyme';
import * as React from 'react';

import LayoutLoginRegister from './../../components/LayoutLoginRegister';
import LoginForm from './../../components/LoginForm';
import Login from './../../pages/login';

describe('Login Page', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
  });

  describe('Shallow Render Components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<Login />);
    });

    it('contains LayoutLoginRegister', () => {
      expect(
        wrapper.find('LayoutLoginRegister').at(0).equals(
          <LayoutLoginRegister>
            <LoginForm />
          </LayoutLoginRegister>,
        ),
      ).toBe(true);
    });
  });
});
