const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURL');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      // current URL string parser is deprecated, and will be removed
      // in a future version. To use new parser, pass the option to MongoClient.connect
      useNewUrlParser: true
    });
    console.log('MongoDB Connected ...');
  } catch (err) {
    console.log(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
