import * as React from 'react';

import HeaderLoginRegister from './HeaderLoginRegister';

interface ILayoutLoginRegisterProps {
  // children: string | JSX.Element;
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
      <div>
        <HeaderLoginRegister />
        {this.props.children}
      </div>
    );
  }
}
