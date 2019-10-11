const cheerio = require('cheerio');
const request = require('superagent');

String.prototype.replaceAll = function(str1, str2, ignore) {
  return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
};

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
