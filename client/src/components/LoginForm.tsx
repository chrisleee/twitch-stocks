import fetch = require('isomorphic-fetch');
import Link from 'next/link';
import Router from 'next/router';
import * as React from 'react';
import styled from 'styled-components';
import { Authenticate } from '../lib/Authenticate';
import LoginFormWrapper from './LoginFormWrapper';
import { Button, Footnote, FormWrapper, Input, Title } from './styles';

export default class LoginForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.setState = this.setState.bind(this);
    this.submit = this.submit.bind(this);
  }

  public handleUsername(e: any) {
    this.setState({ username: e.target.value });
  }

  public handlePassword(e: any) {
    this.setState({ password: e.target.value });
  }

  public async submit(e: any) {
    // This will work when the routes are added on the server
    e.preventDefault();
    const response = await Authenticate.login({
      password: this.state.password,
      username: this.state.username,
    });
    const json = JSON.parse(response);
    if (json.err) {
      // Unknown error, handle it here
    } else if (json.token) {
      this.setToken(json.token);
      this.setProfile(this.state.username);
      Router.push('/dashboard');
    }
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
          <FormWrapper>
            <form onSubmit={this.submit}>
              <Title>Sign In</Title>
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
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
              </div>
              <div>
                <Button type="submit">Sign In</Button>
              </div>
            </form>
          </FormWrapper>
        </LoginFormWrapper>
        <Footnote>
          <Link href="/reset">
            <a>Forgot password?</a>
          </Link>
          <span> - </span>
          <Link href="/register">
            <a>Sign up for an account</a>
          </Link>
        </Footnote>
        {this.props.children}
      </div>
    );
  }
}
