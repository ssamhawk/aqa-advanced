export class AuthService extends HttpClient {
  constructor() {
    super();
    this.API_AUTH_SIGNUP = 'auth/signup';
    this.API_AUTH_SIGNIN = 'auth/signin';

    this._regData = {
      name: 'Slava',
      lastName: 'Skr',
      email: 'testmail@google.com',
      password: 'Qq242424',
      repeatPassword: 'Qq242424',
    };

    this._logData = {
      email: 'testmail@google.com',
      password: 'Qq242424',
      remember: false,
    };
  }

  async login() {
    try {
      const authResp = await this.post(this.API_AUTH_SIGNIN, this._logData);
      const sid = authResp.headers['set-cookie'][0].split(';')[0];
      this.setCookie(sid);
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }

  async registerNewUser() {
    try {
      return await this.post(this.API_AUTH_SIGNUP, this._regData);
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }
}
