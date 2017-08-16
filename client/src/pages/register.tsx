import * as React from 'react';

import LayoutLoginRegister from '../components/LayoutLoginRegister';
import RegisterForm from '../components/RegisterForm';
import { Button, Footnote, Input, Title } from '../components/styles';

export default class Register extends React.Component<{}, {}> {
  public render() {
    return (
      <LayoutLoginRegister>
        <RegisterForm />
      </LayoutLoginRegister>
    );
  }
}
