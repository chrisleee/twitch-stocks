import * as React from 'react';
import { OuterCenteredWrapper } from './styles';

const Wrapper = OuterCenteredWrapper.extend`height: 500px;`;

export default class LoginFormWrapper extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}
