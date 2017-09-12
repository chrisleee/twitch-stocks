import * as React from 'react';

import LayoutLoginRegister from '../components/LayoutLoginRegister';
import LoginFormWrapper from '../components/LoginFormWrapper';
import { FormWrapper } from '../components/styles';

export default class Logout extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  public render() {
    return (
      <div>
        <LayoutLoginRegister>
          <LoginFormWrapper>
            <FormWrapper>
              <p>You have been logged out. Come again soon!</p>
            </FormWrapper>
          </LoginFormWrapper>
        </LayoutLoginRegister>
      </div>
    );
  }
}
