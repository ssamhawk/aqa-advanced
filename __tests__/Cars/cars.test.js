const { CarsService } = require('../../src/controllers/CarsController');
const { AuthService } = require('../../src/controllers/AuthController');
const { HttpClient } = require('../../src/controllers/BaseController');
const testData = require('../../src/testData/carsmodels.json');

const httpClient = new HttpClient();
const authService = new AuthService(httpClient);
const carsService = new CarsService(httpClient);
let respCarModels = testData.carsModels;

beforeAll(async () => {
  await authService.login();
});

test('Get a list of cars brands', async () => {
  const resp = await carsService.getCarsBrands();
  expect(resp.status).toBe(200);
});

test('Get a car brand by ID', async () => {
  const resp = await carsService.getCarBrandsById(1);
  expect(resp.status).toBe(200);
});

test('Get a list of cars models', async () => {
  const resp = await carsService.getCarsModels();
  expect(resp.status).toBe(200);
});

test('Get a car model by ID', async () => {
  const resp = await carsService.getCarModelById(1);
  expect(resp.status).toBe(200);
});

test('Get user cars', async () => {
  const resp = await carsService.getUserCars();
  expect(resp.status).toBe(200);
});

describe('All cars dynamic creation tests', () => {
  if (respCarModels && respCarModels.length > 0) {
    respCarModels.forEach((car) => {
      test(`Create car ${car.title} with brand ${car.carBrandId}`, async () => {
        let payload = {
          carBrandId: car.carBrandId,
          carModelId: car.id,
          mileage: Math.floor(Math.random() * 100000) + 1,
        };

        const res = await carsService.createANewCar(payload);
        expect(res.status).toBe(201);
        console.log(`Car ${car.title} is added`);
        const userCarsRes = await carsService.getUserCars();

        const addedCar = userCarsRes.data.data.find(
          (userCar) =>
            userCar.carBrandId === payload.carBrandId &&
            userCar.carModelId === payload.carModelId
        );

        expect(addedCar).toBeDefined();
        expect(addedCar.mileage).toBe(payload.mileage);
      });
    });
  } else {
    test('Data not loaded, skipping dynamic tests', () => {
      console.warn('No car models available to create dynamic tests.');
    });
  }
});

test('Delete all user cars', async () => {
  const userCarsRes = await carsService.getUserCars();

  if (userCarsRes.data.data.length > 0) {
    for (const car of userCarsRes.data.data) {
      const deleteRes = await carsService.DeleteUserCar(car.id);
      console.log(`Car ${car.brand} ${car.model} is deleted`);
      expect(deleteRes.status).toBe(200);
    }

    const userCarsAfterDeletion = await carsService.getUserCars();
    expect(userCarsAfterDeletion.data.data.length).toBe(0);
  } else {
    console.warn('No cars found to delete.');
  }
}, 15000);

describe('Negative tests', () => {
  test('Get unknown cars brans ID', async () => {
    const resp = await carsService.getCarBrandsById(6);
    expect(resp.status).toBe(404);
  });

  test('Get unknown cars model ID', async () => {
    const resp = await carsService.getCarModelById(24);
    expect(resp.status).toBe(404);
  });

  test('Delete user car with wring ID', async () => {
    const deleteRes = await carsService.DeleteUserCar(5555);
    expect(deleteRes.status).toBe(404);
  });
});
