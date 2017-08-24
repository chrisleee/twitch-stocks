import * as React from 'react';

import HeaderLoginRegister from '../components/HeaderLoginRegister';
import LayoutLoginRegister from '../components/LayoutLoginRegister';
import LoginForm from '../components/LoginForm';

export default class Login extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <LayoutLoginRegister>
          <LoginForm />
        </LayoutLoginRegister>
      </div>
    );
  }
}
