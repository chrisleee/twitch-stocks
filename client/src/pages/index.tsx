import * as React from 'react';

import styled from 'styled-components';
import LayoutLanding from '../components/LayoutLanding';
import {
  Button,
  InnerCenteredWrapper,
  OuterCenteredWrapper,
  PageIntroText,
  PageTitle,
} from '../components/styles';

const OuterWrap = OuterCenteredWrapper.extend`
  // background: red;
  background: #642b73; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #c6426e,
    #642b73
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #c6426e,
    #642b73
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-image: url("/static/header.svg");
`;

const Wrap = InnerCenteredWrapper.extend`
  // background: blue;
  text-align: center;
  font-family: Helvetica, Arial;
  position: relative;
`;

const Bottom = styled.div`
  // background-color: purple;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
`;

const SpaceP = styled.p`height: 50px;`;

const StatContainer = styled.span`
  margin: 5px;
  float: left;
`;

const Stat = styled.div`font-size: 2em;`;

const StatByline = styled.div``;

const GetStartedWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const GetStarted = styled.div``;

const GetStartedBar = styled.div`
  flex: 1;
  border-top: 1px solid #eeeeee;
  margin-top: 8px;
  margin-left: 10px;
  margin-right: 10px;
`;

const StepsWrap = InnerCenteredWrapper.extend`background-color: blue;`;

const FeatureWrap = InnerCenteredWrapper.extend`
  display: flex;
  flex-direction: column;
  // background-color: blue;
`;

const FeatureContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FeatureBox = styled.div`
  // background: blue;
  padding: 5px;
  margin: 5px;
  // justify-content: space-between;
`;

export default class Index extends React.Component<{}, {}> {
  public render() {
    return (
      <LayoutLanding>
        <OuterWrap>
          <Wrap>
            <div>
              <PageTitle>Twitch Stocks</PageTitle>
              <PageIntroText>
                Invest in Twitch streamers using virtual points in a virtual
                stock market
              </PageIntroText>
              <SpaceP>No real money is involved at any point</SpaceP>
            </div>
            <Bottom>Sign up - Questions? Read the FAQ</Bottom>
          </Wrap>
        </OuterWrap>
        <OuterCenteredWrapper>
          <Wrap>
            <StatContainer>
              <Stat>1500</Stat>
              <StatByline>Streamers tracked</StatByline>
            </StatContainer>
            <StatContainer>
              <Stat>1200</Stat>
              <StatByline>Users registered</StatByline>
            </StatContainer>
            <StatContainer>
              <Stat>250K</Stat>
              <StatByline>Transactions in the last 24h</StatByline>
            </StatContainer>
          </Wrap>
        </OuterCenteredWrapper>
        <OuterCenteredWrapper>
          <GetStartedWrap>
            <GetStartedBar />
            <GetStarted>Get Started</GetStarted>
            <GetStartedBar />
          </GetStartedWrap>
        </OuterCenteredWrapper>
        <OuterCenteredWrapper>
          <FeatureWrap>
            <FeatureContent>
              <FeatureBox>
                <h3>Step 1</h3>
                <p>
                  Make an account. You will recieve 1000 points to start off
                  your portfolio. Choose your streamers wisely!
                </p>
              </FeatureBox>
            </FeatureContent>
            <FeatureContent>
              <FeatureBox>
                <h3>Step 2</h3>
                <p>
                  Buy your favourite streamers stock. You can buy an established
                  streamers stock for safe long term growth, or risk it on an
                  unknown
                </p>
              </FeatureBox>
            </FeatureContent>
            <FeatureContent>
              <FeatureBox>
                <h3>Step 3</h3>
                <p>???</p>
              </FeatureBox>
            </FeatureContent>
            <FeatureContent>
              <FeatureBox>
                <h3>Step 4</h3>
                <p>
                  Think your streamer has peaked? Sell their stock for a profit
                </p>
              </FeatureBox>
            </FeatureContent>
          </FeatureWrap>
        </OuterCenteredWrapper>
        <OuterCenteredWrapper>
          <FeatureWrap>
            <FeatureContent>
              <FeatureBox>Feature one</FeatureBox>
              <FeatureBox>Feature two</FeatureBox>
            </FeatureContent>
            <FeatureContent>
              <FeatureBox>Feature three</FeatureBox>
              <FeatureBox>Feature four</FeatureBox>
            </FeatureContent>
          </FeatureWrap>
        </OuterCenteredWrapper>
      </LayoutLanding>
    );
  }
}
