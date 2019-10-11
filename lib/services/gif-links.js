const cheerio = require('cheerio');
const request = require('superagent');

const getGIFS = () => {
  return request
    .get('https://tenor.com/search/hey-arnold-gifs')
    .then(res => {
      const $ = cheerio.load(res.text, {
        normalizeWhitespace: true
      });
      const gifs = $('div').filter('.Gif')
        .map(function() {
          const gifLink = $(this).children('img').attr('src');
          return { gifLink };
        })
        .get();
      const characterGIFS = [...gifs];
      return characterGIFS.filter(item => !item.gifLink.includes('assets'));
    })
    // eslint-disable-next-line no-console
    .catch(err => console.error(err));
};

getGIFS();

module.exports = {
  getGIFS
};
