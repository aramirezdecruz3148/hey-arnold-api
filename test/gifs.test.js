require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../lib/app');
const gifData = require('./gif-test-data');

describe('gif route tests', () => {
  beforeAll(() => {
    return mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
      .then(() => gifData());
  });

  afterAll(() => {
    return mongoose.connection.dropDatabase()
      .then(() => mongoose.connection.close());
  });

  it('can return array of gifs', () => {
    return request(app)
      .get('/api/v1/gifs')
      .then(res => {
        expect(res.body).toHaveLength(49);
      });
  });
});
