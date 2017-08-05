import * as React from 'react';

import LayoutLoginRegister from '../components/LayoutLoginRegister';

export default class Register extends React.Component<{}, {}> {
  public render() {
    return (
      <LayoutLoginRegister>
        <p>Register Page</p>
      </LayoutLoginRegister>
    );
  }
}
