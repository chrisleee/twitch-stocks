import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import HeaderTop from './HeaderTop';

// Re-usable header for outer pages, such as landing page
export default class HeaderDefault extends React.Component<{}, {}> {
  public render() {
    return (
      <HeaderTop>
        <Link href="/">
          <a>Twitch Stocks</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/register">
          <a>Register</a>
        </Link>
        <Link href="/logout">
          <a>Logout</a>
        </Link>
      </HeaderTop>
    );
  }
}
