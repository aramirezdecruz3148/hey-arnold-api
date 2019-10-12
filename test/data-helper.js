require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const seedData = require('./seed-data');

beforeAll(() => {
  connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

let seededCharacters = null;
let seededGifs = null;
beforeEach(async() => {
  const { createdCharacters, createdGifs } = await seedData();
  seededCharacters = createdCharacters;
  seededGifs = createdGifs;
});

afterAll(() => {
  return mongoose.connection.close();
});


module.exports = {
  getCharacters: () => seededCharacters,
  getGifs: () => seededGifs
};
