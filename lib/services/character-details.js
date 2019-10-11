const { getCharacterNames } = require('./character-names');
const cheerio = require('cheerio');
const request = require('superagent');

const getCharacterDetails = async() => {
  const response = await getCharacterNames();
  return Promise.all(response.map(character => {
    return request
      .get(`https://heyarnold.fandom.com${character}`)
      .then(res => {
        const $ = cheerio.load(res.text, {
          normalizeWhitespace: true
        });
        const name = $('h1[class=page-header__title]').text();
        const image = $('img[class=pi-image-thumbnail]').attr('src');
        return { name, image };
      });
  }));
};


module.exports = {
  getCharacterDetails
};
