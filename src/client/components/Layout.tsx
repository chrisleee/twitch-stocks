import * as React from 'react';

interface IProps {
  children: string | JSX.Element;
}

// Re-usable layout for dashboard, buy/sell, etc. pages
// Need a more specific name than Layout
const Layout = (props: IProps) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default Layout;
