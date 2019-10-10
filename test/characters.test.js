require('dotenv').config();
const request = require('supertest');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const app = require('../lib/app');

describe('character route tests', () => {
  beforeAll(() => {
    connect();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can get an array of character details', () => {
    return request(app)
      .get('/api/v1/characters')
      .then(res => {
        expect(res.body).toContainEqual({ _id: expect.any(String), name: expect.any(String), image: expect.any(String) });
        expect(res.body).toHaveLength(218);
      });
  });
});
