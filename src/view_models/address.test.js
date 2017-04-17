const expect = require('expect');
const db = require('../helpers/db');
// const config = {
//   user: 'test_user',
//   password: '',
//   server: 'sgexperimentaldb.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
//   database: 'sgexperimentalsql',
//   options: {
//     // database: 'sgexperimentalsql',
//     encrypt: true // Use this if you're on Windows Azure
//   }
// };

describe('Tests the address model', function () {
  this.timeout(15000);
  it('should insert a single movie item', (done) => {
    db.then(pool => {
      return pool.request().query('SELECT * From SalesLT.Address')
        .then(result => {
          console.log(result);
          done();
        }).catch(err => {
          console.log(err);
          done();
        });
    });
  });
});
