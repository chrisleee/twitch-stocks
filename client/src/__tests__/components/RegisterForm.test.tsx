import { shallow } from 'enzyme';
import * as React from 'react';

import FormMessage from './../../components/FormMessage';
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
            <FormMessage type="error" display={true}>
              Username is invalid
            </FormMessage>
            <Input name="username" />
          </div>,
        ),
      ).toBe(true);
    });

    it('contains email input', () => {
      expect(
        wrapper.containsMatchingElement(
          <div>
            <FormMessage type="error" display={true}>
              Email is invalid
            </FormMessage>
            <Input name="email" />
          </div>,
        ),
      ).toBe(true);
    });

    it('contains password input', () => {
      expect(
        wrapper.containsMatchingElement(
          <div>
            <FormMessage type="error" display={true}>
              Password is invalid
            </FormMessage>
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
