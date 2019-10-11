const { Router } = require('express');
const Gif = require('../models/Gif');

module.exports = Router()
  .get('/', (req, res, next) => {
    Gif 
      .find()
      .then(gifs => res.send(gifs))
      .catch(next);
  });
//make a get all
//make a get random with count
//make a get by id
