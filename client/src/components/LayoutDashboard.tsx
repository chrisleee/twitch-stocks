import * as React from 'react';

import Link from 'next/link';
import styled from 'styled-components';
import Footer from './Footer';
import HeaderDefault from './HeaderDefault';
import HeaderTop from './HeaderTop';
import ItemContainer from './ItemContainer';
import SearchBar from './SearchBar';
import {
  Body,
  InnerCenteredWrapper,
  OuterCenteredWrapper,
  RightAlignedHeaderItem,
  RightAlignedHeaderItemLeft,
} from './styles';
import TopStreamers from './TopStreamers';

const Margin = Body.extend`margin: 8px;`;

interface IDashboardProps {
  children: string | JSX.Element | JSX.Element[];
  username?: string | null;
}

interface IDashboardState {
  username?: string | null;
}

export default class LayoutDashboard extends React.Component<
  IDashboardProps,
  IDashboardState
> {
  constructor(props: IDashboardProps) {
    super(props);
    this.state = { username: '' };
    this.setState = this.setState.bind(this);
  }

  public componentDidMount() {
    const username = localStorage.getItem('username');
    this.setState({ username });
  }

  public render() {
    return (
      <Body>
        <HeaderDefault />
        <HeaderTop>
          {/* These links will drive the UI on the page rather than navigate to a different page */}
          <RightAlignedHeaderItemLeft width="150px">
            <Link href="#">
              <a>Dashboard</a>
            </Link>
            <Link href="#">
              <a>Trade</a>
            </Link>
          </RightAlignedHeaderItemLeft>
          <RightAlignedHeaderItem>
            <SearchBar />
          </RightAlignedHeaderItem>
        </HeaderTop>
        <Margin>
          <h1>
            {this.state.username}
          </h1>
          <OuterCenteredWrapper>
            <ItemContainer title="Portfolio" color="lightgrey" width="50%">
              Balance: 0
            </ItemContainer>
            <ItemContainer
              title="Most Popular Stocks"
              color="lightgrey"
              width="50%"
            >
              Some stock
            </ItemContainer>
          </OuterCenteredWrapper>
          <ItemContainer title="Top Streamers" color="lightgrey" width="100%">
            <TopStreamers />
          </ItemContainer>
          <Footer />
        </Margin>
      </Body>
    );
  }
}
