import * as React from 'react';
import styled from 'styled-components';
import { InnerCenteredWrapper, OuterCenteredWrapper } from './styles';

const InfoBox = InnerCenteredWrapper.extend``;

const Wrapper = OuterCenteredWrapper.extend`
  border-bottom: 1px solid gray;
  margin-bottom: 5px;
`;

const Info = styled.div`font-size: 1.8em;`;

const Byline = styled.div`font-size: 0.75em;`;

interface ITopStreamersInfopaneProps {
  streamer: { [key: string]: any };
  period: string;
}

export default class TopStreamersInfopane extends React.Component<
  ITopStreamersInfopaneProps,
  any
> {
  constructor(props: ITopStreamersInfopaneProps) {
    super(props);
  }

  public render() {
    return (
      <Wrapper>
        <InfoBox>
          <Info>
            {this.props.streamer.averageViewers
              ? Math.round(
                  this.props.streamer.averageViewers[this.props.period].value,
                )
              : ''}
          </Info>
          <Byline>Average viewers</Byline>
        </InfoBox>
        <InfoBox>
          <Info>
            {this.props.streamer.peakViewers
              ? Math.round(
                  this.props.streamer.peakViewers[this.props.period].value,
                )
              : ''}
          </Info>
          <Byline>Peak Viewers</Byline>
        </InfoBox>
        <InfoBox>
          <Info>Calculate this</Info>
          <Byline>real change since last *time period*</Byline>
        </InfoBox>
        <InfoBox data="right">
          <Info>Calculate this</Info>
          <Byline>percentage change since last *time period*</Byline>
        </InfoBox>
      </Wrapper>
    );
  }
}
