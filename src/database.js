const mongoose = require('mongoose');

const uri = 'mongodb+srv://anthonytc89:alsimmambla@portfolio-atc-n69h1.mongodb.net/profile?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Success');
  })
  .catch((err) => {
    console.log('Error', err);
  });

module.exports = mongoose;
