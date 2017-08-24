import { shallow } from 'enzyme';
import * as React from 'react';

import LoginForm from './../../components/LoginForm';
import { Button, Input } from './../../components/styles';

describe('<LoginForm />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<LoginForm />);
  });

  describe('Shallow render components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<LoginForm />);
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
