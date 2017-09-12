import * as React from 'react';
import { FormFeedback } from './styles';

interface IFormMessageProps {
  type: string;
  display: boolean;
  children?: string | JSX.Element | JSX.Element[];
}

export default class FormMessage extends React.Component<
  IFormMessageProps,
  any
> {
  constructor(props: IFormMessageProps) {
    super(props);
  }

  public render() {
    return (
      <FormFeedback type={this.props.type} display={this.props.display}>
        {this.props.children}
      </FormFeedback>
    );
  }
}
