const { characterData, gifData } = require('./test-data');
const Character = require('../lib/models/Character');
const Gif = require('../lib/models/Gif');

module.exports = async() => {
  const createdCharacters = await Character.create(
    characterData.map(character => ({
      name: character.name,
      image: character.image
    }))
  );

  const createdGifs = await Gif.create(
    gifData.map(gif => ({
      gifLink: gif.gifLink
    }))
  );
  

  return {
    createdCharacters,
    createdGifs
  };
};
