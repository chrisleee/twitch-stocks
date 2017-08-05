import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  text-align: center;
`;

// Re-usable footer for dashboard, settings, etc.
export default class Footer extends React.Component<{}, {}> {
  public render() {
    return (
      <Container>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="#">
          <a>About</a>
        </Link>
      </Container>
    );
  }
}
