import * as React from 'react';

interface IProps {
  children: string | JSX.Element;
}

// Re-usable layout for login and register pages
const LayoutLoginRegister = (props: IProps) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default LayoutLoginRegister;
