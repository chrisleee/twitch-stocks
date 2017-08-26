import fetch = require('isomorphic-fetch');

interface ILoginState {
  username: string;
  password: string;
}

interface IRegisterState {
  _id: string;
  password: string;
  email: string;
}

/**
 * Class exposes static methods to simplify logging in and registering from the authentication server
 */
export class Authenticate {
  /**
   * @param state Object containing the username and password to send to the login endpoint
   * @return JWT from the login endpoint
   */
  public static async login(state: ILoginState) {
    let response: Response;
    let token: string;
    try {
      response = await fetch('http://localhost:3001/api/login', {
        body: JSON.stringify(state),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      const json = await response.json();
      token = json.token;
    } catch (e) {
      token = '{"err":"true", "message":"could not get token"}';
    }
    return token;
  }

  public static async register(state: IRegisterState) {
    let response: Response;
    try {
      response = await fetch('http://localhost:3001/api/register', {
        body: JSON.stringify(state),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      const text = await response.text();
      return text;
    } catch (e) {
      return '{"err":"true", "message":"could not create user"}';
    }
  }
}
