//need to also make a data-helper.js file in this folder
//both will be responsible for seeding the database for testing locally
//I will use the 

//then I can begin building my models and routes and implement
//my data-helper within my testing suites

//then once I deploy to heroku I can make another seed
//data file at the root that will connect with my deployed database
//it will look something like this:

// require('dotenv').config();
// const mongoose = require('mongoose');
// const fetchCharacterInfo = require('./lib/services/infoScraper');
// const Character = require('./lib/models/Character');

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// const seedData = () => {
//   return fetchCharacterInfo()
//     .then(characters => Character.create(characters))
//     .then(() => console.log('done'))
//     .finally(() => mongoose.connection.close())
//     .catch(console.log);
// };

// seedData();
