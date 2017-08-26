import fetch = require('isomorphic-fetch');
import Link from 'next/link';
import Router from 'next/router';
import * as React from 'react';
import styled from 'styled-components';
import { Authenticate } from '../lib/login';
import LoginFormWrapper from './LoginFormWrapper';
import {
  Button,
  FormWrapper,
  Input,
  OuterCenteredWrapper,
  Title,
} from './styles';

interface IRegisterFormState {
  _id: string;
  password: string;
  email: string;
}

export default class RegisterForm extends React.Component<
  any,
  IRegisterFormState
> {
  constructor(props: any) {
    super(props);
    this.state = { _id: '', password: '', email: '' };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.setState = this.setState.bind(this);
    this.submit = this.submit.bind(this);
  }

  public handleUsername(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ _id: e.currentTarget.value });
  }

  public handlePassword(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ password: e.currentTarget.value });
  }

  public handleEmail(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ email: e.currentTarget.value });
  }

  public async submit(e: React.FormEvent<any>) {
    e.preventDefault();

    const response = await Authenticate.register({
      _id: this.state._id,
      email: this.state.email,
      password: this.state.password,
    });
    const json = JSON.parse(response);
    if (json.err) {
      // Unknown error; handle it here
      // console.log('Could not create user');
    } else if (json.code && json.code === 11000) {
      // console.log('Username already exists, pick a different username');
    } else {
      // console.log('Created user');
      // User is created; now log them in an get a JWT
      const loginDetails = {
        password: this.state.password,
        username: this.state._id,
      };
      const token = await Authenticate.login(loginDetails);
      if (token) {
        localStorage.setItem('username', this.state._id);
        localStorage.setItem('token', token);
        Router.push('/dashboard');
      }
    }
  }

  public setProfile(username: string) {
    localStorage.setItem('username', username);
  }

  public getProfile() {
    return localStorage.getItem('username');
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
            <FormWrapper>
              <form onSubmit={this.submit}>
                <Title>Sign Up</Title>
                <div>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state._id}
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
            </FormWrapper>
          </OuterCenteredWrapper>
        </LoginFormWrapper>
        {this.props.children}
      </div>
    );
  }
}
