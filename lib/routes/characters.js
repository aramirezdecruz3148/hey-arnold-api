const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/', (req, res, next) => {
    const { page = 1, perPage = 20, ...name } = req.query;

    const query = Object.entries(name)
      .reduce((query, [key, value]) => {
        query[key] = new RegExp(value, 'gmi');
        return query;
      }, {});

    Character
      .find(query)
      .skip(+perPage * (+page - 1))
      .limit(+perPage)
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
