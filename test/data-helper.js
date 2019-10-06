const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const seedData = require('./seed-data');

const prepare  = arr => JSON.parse(JSON.stringify(arr));

beforeAll(() => {
  connect();
});

let seededCharacters = null;
beforeEach(async() => {
  const { createdCharacters } = await seedData();
  seededCharacters = prepare(createdCharacters);
});

afterAll(() => {
  return mongoose.connection.close();
});

module.exports = {
  getCharacters: () => seededCharacters
};
