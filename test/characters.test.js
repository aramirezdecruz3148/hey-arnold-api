const { getCharacters } = require('./data-helper');
const request = require('supertest');
const app = require('../lib/app');

describe('character route tests', () => {
  it('can return characters based on name query', () => {
    // eslint-disable-next-line no-unused-vars
    const characters = getCharacters();
    return request(app)
      .get('/api/v1/characters?name=Arnie')
      .then(res => {
        expect(res.body).toHaveLength(1);
        expect(res.body).toContainEqual({
          _id: expect.any(String),
          name: 'Arnie',
          image: 'https://vignette.wikia.nocookie.net/heyarnold/images/4/42/Arnie.jpg/revision/latest/scale-to-width-down/310?cb=20110109195825'
        });
      });
  });

  it('can get a character by id', () => {
    const characterById = getCharacters()[0];
    const parsedCharacter = JSON.parse(JSON.stringify(characterById));
    return request(app)
      .get(`/api/v1/characters/${parsedCharacter._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: parsedCharacter._id,
          name: parsedCharacter.name,
          image: parsedCharacter.image
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
