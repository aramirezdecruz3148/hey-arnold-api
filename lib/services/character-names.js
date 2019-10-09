const cheerio = require('cheerio');
const request = require('superagent');
const escape_quotes = require('escape-quotes');

const getCharacterNames = () => {
  return request
    .get('https://heyarnold.fandom.com/wiki/Characters')
    .then(res => {
      const $ = cheerio.load(res.text, {
        normalizeWhitespace: true
      });
      const names = $('b')
        .map(function() {
          const data = $(this).text();
          return escape_quotes(data);
        })
        .get();
      const characterNames = [...names];
      const namesWithoutSpaces = characterNames.map(names => {
        return names.trim().replace(',', '');
      });
      return namesWithoutSpaces.slice(0, 4);
      //NOTE: I TEMPORARILY SLICED THE ARRAY TO MAKE ISOLATING THE PROBLEM EASIER
    })
    // eslint-disable-next-line no-console
    .catch(err => console.error(err));
};

module.exports = {
  getCharacterNames
};
