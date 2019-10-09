const { getCharacterDetails } = require('../lib/services/character-details');

describe('character-detail tests', () => {
  it('it gets a list of character details { name:, image: }', () => {
    return getCharacterDetails()
      .then(data => {
        expect(data).toHaveLength(4);
      });
  });
});
