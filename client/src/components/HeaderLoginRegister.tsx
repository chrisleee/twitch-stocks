import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import HeaderDefault from './HeaderDefault';

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

// Re-usable header for login and register pages
export default class HeaderLoginRegister extends React.Component<{}, {}> {
  public render() {
    return <HeaderDefault />;
  }
}
