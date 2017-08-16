import fetch = require('isomorphic-fetch');
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import LoginFormWrapper from './LoginFormWrapper';
import {
  Button,
  InnerCenteredWrapper,
  Input,
  OuterCenteredWrapper,
  Title,
} from './styles';

export default class RegisterForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.setState = this.setState.bind(this);
    this.submit = this.submit.bind(this);
  }

  public handleUsername(e: any) {
    this.setState({ username: e.target.value });
  }

  public handlePassword(e: any) {
    this.setState({ password: e.target.value });
  }

  public handleEmail(e: any) {
    this.setState({ email: e.target.value });
  }

  public submit(e: any) {
    // This will work when the routes are added on the server
    e.preventDefault();
    fetch('http://localhost:3001/api/register', {
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setToken(json.token);
        this.setProfile(this.state.username);
      })
      .catch(err => {
        // console.log('Error posting', err);
      });
  }

  public setProfile(username: string) {
    localStorage.setItem('username', username);
  }

  public getProfile() {
    localStorage.getItem('username');
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public render() {
    return (
      <div>
        <LoginFormWrapper>
          <OuterCenteredWrapper>
            <form onSubmit={this.submit}>
              <Title>Sign Up</Title>
              <div>
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleUsername}
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
              </div>
              <div>
                <Input
                  type="password"
                  name="password"
                  placeholder="Choose a password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
              </div>
              <div>
                <Button type="submit">Sign Up</Button>
              </div>
            </form>
          </OuterCenteredWrapper>
        </LoginFormWrapper>
        {this.props.children}
      </div>
    );
  }
}
