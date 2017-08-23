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

const Margin = Body.extend`margin: 8px;`;

interface IProfileProps {
  children: string | JSX.Element | JSX.Element[];
}

export default class LayoutProfile extends React.Component<IProfileProps, {}> {
  constructor(props: IProfileProps) {
    super(props);
  }

  public render() {
    return (
      <Body>
        <HeaderDefault />
        <HeaderTop>
          {/* These links will drive the UI on the page rather than navigate to a different page */}
          <RightAlignedHeaderItemLeft>
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
          <h1>Profile name</h1>
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
            Some streamers
          </ItemContainer>
          <Footer />
        </Margin>
      </Body>
    );
  }
}
