const cheerio = require('cheerio');
const request = require('superagent');

const getCharacterNames = () => {
  return request
    .get('http://heyarnold.fandom.com/wiki/Characters')
    .then(res => {
      const $ = cheerio.load(res.text, {
        normalizeWhitespace: true
      });
      const names = $('b')
        .map(function() {
          const data = $(this).children('a').attr('href');
          return data;
        })
        .get();
      const characterNames = [...names];
      return characterNames;
    })
    // eslint-disable-next-line no-console
    .catch(err => console.error(err));
};

module.exports = {
  getCharacterNames
};
