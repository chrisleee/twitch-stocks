import * as React from 'react';

import HeaderLoginRegister from './HeaderLoginRegister';
import LoginForm from './LoginForm';
import { Body } from './styles';

interface ILayoutLoginRegisterProps {
  children: string | JSX.Element | JSX.Element[];
}

// Re-usable layout for login and register pages
export default class LayoutLoginRegister extends React.Component<
  ILayoutLoginRegisterProps,
  {}
> {
  constructor(props: ILayoutLoginRegisterProps) {
    super(props);
  }

  public render() {
    return (
      <Body>
        <HeaderLoginRegister />
        {this.props.children}
      </Body>
    );
  }
}
