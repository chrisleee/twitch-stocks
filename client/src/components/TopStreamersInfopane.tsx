import * as React from 'react';
import styled from 'styled-components';
import { InnerCenteredWrapper, OuterCenteredWrapper } from './styles';

const InfoBox = InnerCenteredWrapper.extend`background-color: blue;`;

const Wrapper = OuterCenteredWrapper.extend`background-color: red;`;

const Info = styled.div`font-size: 1.8em;`;

const Byline = styled.div`font-size: 0.75em;`;

interface ITopStreamersInfopane {
  streamer: { [key: string]: any };
}

export default class TopStreamersInfopane extends React.Component<
  ITopStreamersInfopane,
  any
> {
  constructor(props: any) {
    super(props);
    this.setState = this.setState.bind(this);
  }

  public render() {
    return (
      <Wrapper>
        <InfoBox>
          <Info>
            {this.props.streamer.averageViewers
              ? Math.round(this.props.streamer.averageViewers.day.value)
              : ''}
          </Info>
          <Byline>Average viewers</Byline>
        </InfoBox>
        <InfoBox>
          <Info>
            {this.props.streamer.peakViewers
              ? Math.round(this.props.streamer.peakViewers.day.value)
              : ''}
          </Info>
          <Byline>Peak Viewers</Byline>
        </InfoBox>
        <InfoBox>
          <Info>Calculate this</Info>
          <Byline>real change since last *time period*</Byline>
        </InfoBox>
        <InfoBox>
          <Info>Calculate this</Info>
          <Byline>percentage change since last *time period*</Byline>
        </InfoBox>
      </Wrapper>
    );
  }
}
