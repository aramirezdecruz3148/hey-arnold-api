require('dotenv').config();
const mongoose = require('mongoose');
const { getGIFS } = require('./lib/services/gif-links');
const Gif = require('./lib/models/Gif');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const seedGifs = () => {
  return getGIFS()
    .then(gifs => Gif.create(gifs))
    .then(() => console.log('done'))
    .finally(() => mongoose.connection.close())
    .catch(console.log);
};

seedGifs();
