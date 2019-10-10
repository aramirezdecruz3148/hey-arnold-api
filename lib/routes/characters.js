const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/', (req, res, next) => {
    Character
      .find()
      .then(characters => res.send(characters))
      .catch(next);
  })

  .get('/random', (req, res, next) => {
    const { count = 1 } = req.query;
    Character
      .getRandomCharacter(+count)
      .then(character => res.send(character))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Character
      .findById(req.params.id)
      .then(character => res.send(character))
      .catch(next);
  });
