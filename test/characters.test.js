require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../lib/app');
const characterData = require('./chatacter-test-data');

describe('character route tests', () => {
  beforeAll(() => {
    return mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
      .then(() => characterData());
  });

  afterAll(() => {
    return mongoose.connection.dropDatabase()
      .then(() => mongoose.connection.close());
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
      .get('/api/v1/characters/5d9e9e139cd4f680f3ec6693')
      .then(res => {
        expect(res.body).toEqual({
          _id: '5d9e9e139cd4f680f3ec6693',
          name: 'Arnold Shortman',
          image: 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
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
