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
  usernameValid: boolean;
  emailValid: boolean;
  passwordValid: boolean;
}

export default class RegisterForm extends React.Component<
  any,
  IRegisterFormState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      _id: '',
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false,
      usernameValid: false,
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.setState = this.setState.bind(this);
    this.submit = this.submit.bind(this);
  }

  public handleUsername(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ _id: e.currentTarget.value });
    if (this.state._id !== '') {
      this.setState({ usernameValid: true });
    }
  }

  public handlePassword(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ password: e.currentTarget.value });
    if (this.state.password.length > 1) {
      this.setState({ passwordValid: true });
    }
  }

  public handleEmail(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ email: e.currentTarget.value });
    if (this.validateEmail(this.state.email)) {
      this.setState({ emailValid: true });
    }
  }

  /**
   * Uses ugly regex from http://emailregex.com/
   * @param email string to validate
   */
  public validateEmail(email: string) {
    if (
      email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      return true;
    }
    return false;
  }

  public async submit(e: React.FormEvent<any>) {
    e.preventDefault();
    if (!this.state.usernameValid) {
      alert('Please enter valid username');
      return;
    } else if (!this.state.emailValid) {
      alert('Please enter a valid email address');
      return;
    } else if (!this.state.passwordValid) {
      alert('Please enter a valid password');
      return;
    }
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
