import * as React from 'react';

import HeaderLanding from './HeaderLanding';

interface IProps {
  children: string | JSX.Element;
}

// Re-usable layout for outer pages, such as landing page
const LayoutLanding = (props: IProps) => {
  return (
    <div>
      <HeaderLanding />
      {props.children}
    </div>
  );
};

export default LayoutLanding;
