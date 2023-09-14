const mongoose = require('mongoose');

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const uri = process.env.MONGODB_ADDON_URI || 'mongodb://localhost:27017';
console.log('uri: ', uri);
const connection = mongoose
  .connect(uri, connectionParams)
  .then(console.log('connected to database'))
  .catch((err) => console.log('could not connect to mongo', err));

module.exports = connection;
