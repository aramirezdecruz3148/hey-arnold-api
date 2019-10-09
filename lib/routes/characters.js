const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/', (req, res, next) => {
    Character
      .find()
      .then(characters => res.send(characters))
      .catch(next);
  });
