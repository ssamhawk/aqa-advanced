const axios = require('axios');

export class HttpClient {
  constructor() {
    this._options = {
      baseURL: 'https://qauto.forstudy.space/api',
      validateStatus: () => true,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    this._axios = axios.create(this._options);
  }

  get(url) {
    return this._axios.get(url);
  }

  post(url, data) {
    return this._axios.post(url, data);
  }

  put(url, data) {
    return this._axios.put(url, data);
  }

  delete(url) {
    return this._axios.delete(url);
  }

  setCookie(cookie) {
    this._options.headers['Cookie'] = cookie;
  }
}
