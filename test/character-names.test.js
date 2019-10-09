const { getCharacterNames } = require('../lib/services/character-names');

describe('name-scraping tests', () => {
  it('can scrap an array of names', () => {
    return getCharacterNames()
      .then(data => {
        expect(data).toContain('Arnold');
        expect(data).toHaveLength(236);
      });
  });
});
