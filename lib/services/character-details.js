const { getCharacterNames } = require('./character-names');
const cheerio = require('cheerio');
const request = require('superagent');

const getCharacterDetails = () => {
  let characterDetails = [];
  return Promise.resolve(getCharacterNames())
    .then(characters => {
      characters.map(character => {
        return request
          .get(`https://heyarnold.fandom.com/wiki/${character}`)
          .then(res => {
            const $ = cheerio.load(res.text, {
              normalizeWhitespace: true
            });
            const name = $('h1[class=page-header__title]').text();
            const image = $('img[class=pi-image-thumbnail]').attr('src');
            characterDetails.push({ name, image });
            return characterDetails.filter(item => !item.image !== undefined);
          });
      });
    })
    // eslint-disable-next-line no-console
    .catch(err => console.error(err));
};


module.exports = {
  getCharacterDetails
};
