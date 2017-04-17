const { Connection } = require('tedious');
const config = {
  user: 'test_user',
  password: '',
  server: 'sgexperimentaldb.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
  database: 'sgexperimentalsql',
  options: {
    // database: 'sgexperimentalsql',
    encrypt: true // Use this if you're on Windows Azure
  }
};

sql.connect(config);

var Promise = require('bluebird');
var mongoose = require('mongoose');
