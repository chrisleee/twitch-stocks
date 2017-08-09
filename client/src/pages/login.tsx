import * as React from 'react';

import LayoutLoginRegister from '../components/LayoutLoginRegister';
import LoginForm from '../components/LoginForm';

export default class Login extends React.Component<{}, {}> {
  public render() {
    return (
      <LayoutLoginRegister>
        <p>Login Page</p>
        <LoginForm />
      </LayoutLoginRegister>
    );
  }
}
