const { UserController } = require('../../src/controllers/UserController');
const { BaseController } = require('../../src/controllers/BaseController');

const userController = new UserController();

test('Get user profile', async () => {
  const res = await userController.getUsersProfile();
  expect(res.status).toBe(401);
});

test('registrate already registred user', async () => {
  const res = await BaseController.registationNewUser();
  console.log(res.data);
  expect(res.status).toBe(400);
  expect(res.data.status).toBe('error');
  expect(res.data.message).toBe('User already exists');
});

test;
