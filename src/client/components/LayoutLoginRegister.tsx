import * as React from 'react';

import HeaderLoginRegister from './HeaderLoginRegister';

interface IProps {
  children: string | JSX.Element;
}

// Re-usable layout for login and register pages
const LayoutLoginRegister = (props: IProps) => {
  return (
    <div>
      <HeaderLoginRegister />
      {props.children}
    </div>
  );
};

export default LayoutLoginRegister;
