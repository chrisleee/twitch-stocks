import * as React from 'react';

import styled from 'styled-components';
import { Panel } from './styles';

const Container = Panel.extend`
  min-width: 400px;
  width: ${props => (props.width ? props.width : 'auto')};
  display: inline-block;
  margin: 5px;
`;

const TitleBar = styled.div`
  text-align: center;
  border-bottom: 1px solid black;
  padding-top: 5px;
  background-color: ${props => (props.color ? props.color : 'grey')};
`;

const Content = styled.div`padding: 5px 5px 2px 5px;`;

interface IItemContainerProps {
  children: string | JSX.Element | JSX.Element[];
  title: string | undefined;
  color: string | undefined;
  width: string | undefined;
}

export default class ItemContainer extends React.Component<
  IItemContainerProps,
  {}
> {
  constructor(props: IItemContainerProps) {
    super(props);
  }

  public render() {
    return (
      <Container width={this.props.width}>
        <TitleBar color={this.props.color}>
          {this.props.title}
        </TitleBar>
        <Content>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}
