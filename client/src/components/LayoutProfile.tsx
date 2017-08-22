import * as React from 'react';

import styled from 'styled-components';
import Footer from './Footer';
import HeaderDefault from './HeaderDefault';
import ItemContainer from './ItemContainer';
import { Body, InnerCenteredWrapper, OuterCenteredWrapper } from './styles';

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
      <div>
        <HeaderDefault />
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
      </div>
    );
  }
}
