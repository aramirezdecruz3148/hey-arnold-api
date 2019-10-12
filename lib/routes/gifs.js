const { Router } = require('express');
const Gif = require('../models/Gif');

module.exports = Router()
  .get('/', (req, res, next) => {
    Gif 
      .find()
      .then(gifs => res.send(gifs))
      .catch(next);
  })

  .get('/random', (req, res, next) => {
    const { count = 1 } = req.query;
    Gif
      .getRandomGif(+count)
      .then(gif => res.send(gif))
      .catch(next);
  });

//make a get random with count
//make a get by id
