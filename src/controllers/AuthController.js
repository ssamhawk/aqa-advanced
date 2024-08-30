const { HttpClient } = require('../../src/controllers/BaseController');

class AuthService extends HttpClient {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.API_AUTH_SIGNUP = 'auth/signup';
    this.API_AUTH_SIGNIN = 'auth/signin';
    this.API_AUTH_LOGOUT = 'auth/logout';

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
      const authResp = await this.httpClient.post(
        this.API_AUTH_SIGNIN,
        this._logData
      );

      if (authResp.status === 200) {
        const sid = authResp.headers['set-cookie'][0].split(';')[0];
        this.httpClient.setCookie(sid); // Встановлюємо кукі після успішного логіну
      }

      return authResp;
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

  async logOut() {
    try {
      return await this.get(this.API_AUTH_LOGOUT);
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }
}

module.exports = { AuthService };
