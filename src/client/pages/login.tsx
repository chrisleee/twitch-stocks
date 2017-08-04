import * as React from 'react';

import LayoutLoginRegister from '../components/LayoutLoginRegister';

export default class Login extends React.Component<{}, {}> {
  public render() {
    return (
      <LayoutLoginRegister>
        <p>Login Page</p>
      </LayoutLoginRegister>
    );
  }
}
