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

  it('can get an array of 20 characters', () => {
    return request(app)
      .get('/api/v1/characters')
      .then(res => {
        expect(res.body).toHaveLength(20);
        expect(res.body).toContainEqual(
          { _id: expect.any(String), 
            name: expect.any(String), 
            image: expect.any(String) 
          });
      });
  });

  it('can return characters based on name query', () => {
    return request(app)
      .get('/api/v1/characters?name=Arnie')
      .then(res => {
        expect(res.body).toHaveLength(1);
        expect(res.body).toContainEqual({
          _id: '5d9e9e139cd4f680f3ec6697',
          name: 'Arnie',
          image: 'https://vignette.wikia.nocookie.net/heyarnold/images/4/42/Arnie.jpg/revision/latest/scale-to-width-down/310?cb=20110109195825'
        });
      });
  });

  it('can get a character by id', () => {
    return request(app)
      .get('/api/v1/characters/5d9e9e139cd4f680f3ec671c')
      .then(res => {
        expect(res.body).toEqual({
          _id: '5d9e9e139cd4f680f3ec671c',
          name: 'Dino Spumoni',
          image: 'https://vignette.wikia.nocookie.net/heyarnold/images/9/90/Dino_Spumoni.png/revision/latest/scale-to-width-down/310?cb=20171212070505'
        });
      });
  });

  it('can get one random character', () => {
    return request(app)
      .get('/api/v1/characters/random')
      .then(res => {
        expect(res.body).toEqual([{
          _id: expect.any(String),
          name: expect.any(String),
          image: expect.any(String)
        }]);
      });
  });

  it('can get 5 random character', () => {
    return request(app)
      .get('/api/v1/characters/random?count=5')
      .then(res => {
        expect(res.body).toHaveLength(5);
      });
  });
});
