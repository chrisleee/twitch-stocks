import { shallow } from 'enzyme';
import * as React from 'react';

import HeaderLoginRegister from './../../components/HeaderLoginRegister';
import LayoutLoginRegister from './../../components/LayoutLoginRegister';

describe('<LayoutLoginRegister />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <LayoutLoginRegister>
        <p>Test</p>
      </LayoutLoginRegister>,
    );
  });

  describe('Shallow Render Components', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(
        <LayoutLoginRegister>
          <p>Test</p>
        </LayoutLoginRegister>,
      );
    });

    it('contains HeaderLoginRegister', () => {
      expect(
        wrapper
          .find('HeaderLoginRegister')
          .at(0)
          .equals(<HeaderLoginRegister />),
      ).toBe(true);
    });

    it('contains children', () => {
      expect(wrapper.find('p').at(0).equals(<p>Test</p>)).toBe(true);
    });
  });
});
