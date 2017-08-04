import * as React from 'react';

interface IProps {
  children: string | JSX.Element;
}

// Re-usable layout for outer pages, such as landing page
const LayoutLanding = (props: IProps) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default LayoutLanding;
