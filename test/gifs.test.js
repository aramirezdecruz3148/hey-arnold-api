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

  it('can return 4 random gifs', () => {
    return request(app)
      .get('/api/v1/gifs/random?count=4')
      .then(res => {
        expect(res.body).toHaveLength(4);
      });
  });

  it('can get a gif by id', () => {
    return request(app)
      .get('/api/v1/gifs/5da11168f084caaf46011e1f')
      .then(res => {
        expect(res.body).toEqual({
          _id: '5da11168f084caaf46011e1f',
          gifLink: 'https://media.tenor.com/images/12661dbe02aab8bc2309328032d783b1/tenor.gif'
        });
      });
  });
});
