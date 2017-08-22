import * as React from 'react';

import Link from 'next/link';
import Footer from './Footer';
import HeaderDefault from './HeaderDefault';

interface ILayoutProps {
  children: string | JSX.Element;
}

// Re-usable layout for dashboard, buy/sell, etc. pages
// Need a more specific name than Layout
export default class Layout extends React.Component<ILayoutProps, {}> {
  constructor(props: ILayoutProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <HeaderDefault />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
