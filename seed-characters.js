require('dotenv').config();
const mongoose = require('mongoose');
const { getCharacterDetails } = require('./lib/services/character-details');
const Character = require('./lib/models/Character');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const seedCharacters = () => {
  return getCharacterDetails()
    .then(characters => Character.create(characters))
    .then(() => console.log('done'))
    .finally(() => mongoose.connection.close())
    .catch(console.log);
};

seedCharacters();
