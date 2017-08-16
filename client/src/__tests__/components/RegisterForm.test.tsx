import { shallow } from 'enzyme';
import * as React from 'react';

import RegisterForm from './../../components/RegisterForm';
import { Button, Input } from './../../components/styles';

describe('<RegisterForm />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<RegisterForm />);
  });

  describe('Shallow render components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<RegisterForm />);
    });

    it('contains username input', () => {
      expect(
        wrapper.containsMatchingElement(
          <div>
            <Input name="username" />
          </div>,
        ),
      ).toBe(true);
    });

    it('contains email input', () => {
      expect(
        wrapper.containsMatchingElement(
          <div>
            <Input name="email" />
          </div>,
        ),
      ).toBe(true);
    });

    it('contains password input', () => {
      expect(
        wrapper.containsMatchingElement(
          <div>
            <Input name="password" />
          </div>,
        ),
      ).toBe(true);
    });

    it('contains submit button', () => {
      expect(
        wrapper.containsMatchingElement(
          <div>
            <Button type="submit" />
          </div>,
        ),
      );
    });
  });
});
