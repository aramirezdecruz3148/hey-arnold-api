const { getGifs } = require('./data-helper');
const request = require('supertest');
const app = require('../lib/app');

describe('gif route tests', () => {
  it('can return array of gifs', () => {
    // eslint-disable-next-line no-unused-vars
    const gifs = getGifs();
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
    const gifById = getGifs()[0];
    const parsedGif = JSON.parse(JSON.stringify(gifById));
    return request(app)
      .get(`/api/v1/gifs/${parsedGif._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: parsedGif._id,
          gifLink: parsedGif.gifLink
        });
      });
  });
});
