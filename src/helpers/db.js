const sql = require('mssql');

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

var connection = sql.connect(config, function (err) {
  if (err)
    throw err;
});

module.exports = connection;
