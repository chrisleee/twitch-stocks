import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 48px;
  align-items: center;
  border-bottom: 2px solid black;
`;

const RightA = styled(Link)`
  margin-left: auto;
`;

interface IHeaderLandingProps {
  children: string | JSX.Element | JSX.Element[];
}

// Re-usable header for outer pages, such as landing page
export default class HeaderTop extends React.Component<
  IHeaderLandingProps,
  {}
> {
  public render() {
    return (
      <Navbar>
        {this.props.children}
      </Navbar>
    );
  }
}
