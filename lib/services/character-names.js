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
      characterNames.splice(0, 2, 'Arnold', 'Grandpa Phil');
      return characterNames;
    });
};

module.exports = {
  getCharacterNames
};
