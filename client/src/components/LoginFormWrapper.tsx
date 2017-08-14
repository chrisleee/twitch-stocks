import * as React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  // background: red;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class LoginFormWrapper extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <FormWrapper>
        {this.props.children}
      </FormWrapper>
    );
  }
}
