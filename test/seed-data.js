const Character = require('../lib/models/Character');
const { getCharacterDetails } = require('../lib/services/character-details');

module.exports = async() => {
  const createdCharacters = await Character.create(
    Promise.resolve(getCharacterDetails())
      .then(characters => {
        characters.map(character => ({
          name: character.name,
          image: character.image
        }));
      })
  );

  return {
    createdCharacters
  };
};

//once I deploy to heroku I can make another seed
//data file at the root that will connect with my deployed database
//it will look something like this:

// require('dotenv').config();
// const mongoose = require('mongoose');
// const fetchCharacterInfo = require('./lib/services/infoScraper');
// const Character = require('./lib/models/Character');

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// const seedData = () => {
//   return fetchCharacterInfo()
//     .then(characters => Character.create(characters))
//     .then(() => console.log('done'))
//     .finally(() => mongoose.connection.close())
//     .catch(console.log);
// };

// seedData();
