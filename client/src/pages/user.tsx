import * as React from 'react';

import Layout from '../components/Layout';

interface IUserProps {
  children: string | JSX.Element;
}

export default class User extends React.Component<any, any> {
  constructor(props: IUserProps) {
    super(props);
  }

  public getUser() {
    return localStorage.getItem('username');
  }

  public render() {
    return (
      <Layout>
        <p>User Page</p>
        <h1>
          Hello, {this.getUser()}
        </h1>
        {this.props.children}
      </Layout>
    );
  }
}
