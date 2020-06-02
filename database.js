const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect(
    'mongodb://venkatdb:chowdary271@ds062339.mlab.com:62339/koa-graphql',
    { useNewUrlParser: true }
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}

module.exports = initDB;