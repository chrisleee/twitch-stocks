import * as React from 'react';

import Footer from './Footer';
import HeaderLanding from './HeaderLanding';

interface ILayoutLandingProps {
  children: string | JSX.Element;
}

// Re-usable layout for outer pages, such as landing page
export default class LayoutLanding extends React.Component<
  ILayoutLandingProps,
  {}
> {
  constructor(props: ILayoutLandingProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <HeaderLanding />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
