/* eslint-disable no-console */
const mongoose = require('mongoose');
const { parse } = require('url');

module.exports = (url = process.env.MONGO_CONNECTION) => {
  mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  mongoose.connection.on('connected', () => {
    const parsedUrl = parse(url);
    const redactedUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}:${parsedUrl.port}${parsedUrl.pathname}`;
    console.log(`Connected to MongoDB at ${redactedUrl}`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });

  mongoose.connection.on('error', () => {
    console.log('Error connecting to MongoDB');
  });
};
