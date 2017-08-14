import { shallow } from 'enzyme';
import * as React from 'react';

import LayoutLoginRegister from './../../components/LayoutLoginRegister';
import RegisterForm from './../../components/RegisterForm';
import Register from './../../pages/register';

describe('Register Page', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Register />);
  });

  describe('Shallow Render Components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<Register />);
    });

    it('contains LayoutLoginRegister', () => {
      expect(
        wrapper.find('LayoutLoginRegister').at(0).equals(
          <LayoutLoginRegister>
            <RegisterForm />
          </LayoutLoginRegister>,
        ),
      ).toBe(true);
    });
  });
});
