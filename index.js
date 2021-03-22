'use strict';

// dependencies
require('dotenv').config();
let mongoose = require('mongoose');
let server = require('./server.js');

// connect to mongo
const options = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};

mongoose.connect(process.env.MONGODB_URI, options)
  .then(() => {
    server.start(process.env.PORT);
})
