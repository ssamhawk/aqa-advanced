export class UserService extends HttpClient {
  constructor() {
    super();
    this.API_USERS_PROFILE = 'users/profile';
  }

  async getUsersProfile() {
    try {
      return await this.get(this.API_USERS_PROFILE);
    } catch (error) {
      console.error('Error getting user profile:', error);
      throw error;
    }
  }
}
