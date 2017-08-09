// import * as fetch from 'isomorphic-fetch';
import fetch = require('isomorphic-fetch');
import * as React from 'react';

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

  public submit(e: any) {
    e.preventDefault();
    fetch('http://localhost:3001/api/login', {
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
      <form onSubmit={this.submit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleUsername}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
