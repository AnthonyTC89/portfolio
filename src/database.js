/* eslint-disable no-console */
const mongoose = require('mongoose');

const USERNAME = process.env.USERNAME_MONGODB;
const PASSWORD = process.env.PASSWORD_MONGODB;

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@portfolio-atc-n69h1.mongodb.net/profile?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Success Connection MongoDB Atlas');
  })
  .catch((err) => {
    console.log('Error', err);
  });

module.exports = mongoose;
