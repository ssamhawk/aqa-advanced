const axios = require('axios');

test('Get the books list 200', async () => {
  const responce = await axios.get(
    'https://bookstore.toolsqa.com/BookStore/v1/Books'
  );
  expect(responce.status).toBe(200);
});
