const { getCharacterNames } = require('../lib/services/character-names');

describe('name-scraping tests', () => {
  it('can scrap an array of names', async() => {
    return getCharacterNames()
      .then(data => {
        expect(data).toContain('Arnold');
        expect(data).toHaveLength(4);
      });
  });
});
