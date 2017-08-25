import Router from 'next/router';
import * as React from 'react';

import styled from 'styled-components';
import LayoutDashboard from '../components/LayoutDashboard';

export default class Dashboard extends React.Component<{}, {}> {
  public componentDidMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      Router.push('/login');
    }
  }

  public render() {
    return <LayoutDashboard>Dashboard Page</LayoutDashboard>;
  }
}
