import fetch = require('isomorphic-fetch');
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
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

  public submit(e: React.FormEvent<any>) {
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
        this.setProfile(this.state._id);
      })
      .catch(err => {
        // console.log('Error posting', err);
      });
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
