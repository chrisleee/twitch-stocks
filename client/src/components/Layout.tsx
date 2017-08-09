import * as React from 'react';

import Footer from './Footer';
import Header from './Header';

interface ILayoutProps {
  children: string | JSX.Element | JSX.Element[];
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
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
