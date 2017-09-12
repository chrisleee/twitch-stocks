import * as React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { InnerCenteredWrapper, OuterCenteredWrapper } from './styles';

const Inner = InnerCenteredWrapper.extend`padding: 5px;`;

export default class TopStreamersInfopane extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    // See here for example data object: https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/line.js
    const data = {
      datasets: [{ label: 'Example data', data: [2, 1, 3] }],
      labels: ['1', '2', '3'],
    };
    const opts = {
      scales: {
        xAxes: [{ scaleLabel: { display: true, labelString: 'Time' } }],
        yAxes: [{ scaleLabel: { display: true, labelString: 'Value' } }],
      },
    };
    return (
      <OuterCenteredWrapper>
        <Inner>
          <Line data={data} options={opts} width={800} height={400} />
        </Inner>
      </OuterCenteredWrapper>
    );
  }
}
