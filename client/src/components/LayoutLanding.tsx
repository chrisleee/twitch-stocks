import * as React from 'react';

import Link from 'next/link';
import Footer from './Footer';
import HeaderDefault from './HeaderDefault';
import HeaderTop from './HeaderTop';
import { Body } from './styles';

interface ILayoutLandingProps {
  children: string | JSX.Element | JSX.Element[];
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
      <Body>
        {' '}{/* <Body> simply sets the font for the entire page for consistency */}
        <HeaderDefault />
        {this.props.children}
        <Footer />
      </Body>
    );
  }
}
