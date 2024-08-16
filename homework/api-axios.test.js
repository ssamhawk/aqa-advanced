const axios = require('axios');

axios.interceptors.request.use(
  (config) => {
    console.log('--- Запит ---');
    console.log('URL:', config.url);
    console.log('Метод:', config.method);
    console.log('--- Кінець Запиту ---');
    return config;
  },
  (error) => {
    console.error('Помилка запиту:', error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log('--- Відповідь ---');
    console.log('URL:', response.config.url);
    console.log('Метод:', response.config.method);
    console.log('Статус:', response.status);
    console.log('--- Кінець Відповіді ---');
    return response;
  },
  (error) => {
    console.error('Помилка відповіді:', error);
    return Promise.reject(error);
  }
);

const url = 'https://jsonplaceholder.typicode.com';

test('#1 Get code 200 for Posts get request', async () => {
  const response = await axios.get(`${url}/posts`);
  expect(response.status).toBe(200);
  expect(response.data).not.toBeNull();
  expect(response.data).not.toBeUndefined();
});

test('#2 Get data NOT Null for Posts get request', async () => {
  const response = await axios.get(`${url}/posts`);
  expect(response.status).toBe(200);
  expect(response.data).not.toBeNull();
  expect(response.data).not.toBeUndefined();
});

test('#3 Get Not Underfined for Posts get request', async () => {
  const response = await axios.get(`${url}/posts`);
  expect(response.status).toBe(200);
  expect(response.data).not.toBeNull();
  expect(response.data).not.toBeUndefined();
});

test('#4 POST book return 200', async () => {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  const response = await axios.post(`${url}/posts`, data);
  expect(response.status).toBe(201);
});

test('#5 check that books added correctly', async () => {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  const response = await axios.post(`${url}/posts`, data);
  expect(response.data).toEqual(
    expect.objectContaining({
      title: 'foo',
      body: 'bar',
    })
  );
});
