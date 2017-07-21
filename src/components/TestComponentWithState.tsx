import Link from 'next/link';
import * as React from 'react';

export default class TestComponentWithState extends React.Component<any, any> {
  /**
     * Called upon class instantiation
     */
  constructor() {
    super();

    // initialize the state
    this.state = {};
  }

  /**
     * This method is called once all our children Elements and our Component instances are mounted onto the Native UI.
     */
  public componentDidMount() {
    this.setState({ testValue: 'foo' });
  }

  /**
     * Renders this component onto the browser
     */
  public render() {
    return (
      <div>
        <p>This component is using a state!</p>
        <p>
          The following is stored in and displayed from this components' state:{' '}
          {this.state.testValue}
        </p>
      </div>
    );
  }
}
