import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

// Re-usable header for outer pages, such as landing page
const HeaderLanding = () =>
  <Navbar>
    <Link href="/">
      <a>Twitch-Stocks</a>
    </Link>
    <Link href="/login">
      <a>Login</a>
    </Link>
    <Link href="/register">
      <a>Register</a>
    </Link>
  </Navbar>;

export default HeaderLanding;
