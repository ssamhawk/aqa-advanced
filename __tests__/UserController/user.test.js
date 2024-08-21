const { UserService } = require('../../src/controllers/UserController');
const { AuthService } = require('../../src/controllers/AuthController');
const { HttpClient } = require('../../src/controllers/BaseController');

const userController = new UserService();
const authService = new AuthService();

test('Get user profile', async () => {
  const res = await userController.getUsersProfile();
  expect(res.status).toBe(401);
});

test('registrate already registred user', async () => {
  const res = await authService.registerNewUser();
  expect(res.status).toBe(400);
  expect(res.data.status).toBe('error');
  expect(res.data.message).toBe('User already exists');
});
