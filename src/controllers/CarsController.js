const { HttpClient } = require('../../src/controllers/BaseController');

class CarsService extends HttpClient {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.API_GET_BRANDS = 'cars/brands';
    this.API_GET_MODELS = 'cars/models';
    this.API_CARS = 'cars';
  }

  async getCarsBrands() {
    try {
      return await this.httpClient.get(this.API_GET_BRANDS);
    } catch (error) {
      console.error('Error during get Brands list:', error);
      throw error;
    }
  }

  async getCarBrandsById(id) {
    try {
      const url = this.API_GET_BRANDS + `/${id}`;
      return await this.httpClient.get(url);
    } catch (error) {
      console.error('Error during get Brands list:', error);
      throw error;
    }
  }

  async getCarsModels() {
    try {
      return await this.httpClient.get(this.API_GET_MODELS);
    } catch (error) {
      console.error('Error during get Brands list:', error);
      throw error;
    }
  }

  async getCarModelById(id) {
    try {
      const url = this.API_GET_MODELS + `/${id}`;
      return await this.httpClient.get(url);
    } catch (error) {
      console.error('Error during get Brands list:', error);
      throw error;
    }
  }

  async getUserCars() {
    try {
      return await this.httpClient.get(this.API_CARS);
    } catch (error) {
      console.error('Error during get Brands list:', error);
      throw error;
    }
  }

  async createANewCar(payload) {
    try {
      return await this.httpClient.post(this.API_CARS, payload);
    } catch (error) {
      console.error('Error during get Brands list:', error);
      throw error;
    }
  }

  async DeleteUserCar(id) {
    try {
      const url = this.API_CARS + `/${id}`;
      return await this.httpClient.delete(url);
    } catch (error) {
      console.error('Error during get Brands list:', error);
      throw error;
    }
  }
}

module.exports = { CarsService };
