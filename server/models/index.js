var db = require('../db');
console.log();

module.exports = {
  messages: {
    get: function () {
      db.query('SELECT message FROM messages', (err, rows, fields) => {
        if (err) { console.log(err); }
        console.log('model received GET:' + rows[0]);
        // callback(null, rows);
      });
    }, 
    post: function () {
      db.query('INSERT INTO messages (message) VALUES (\'hi\')', (err, result, fields) => {
        if (err) { console.log(err); }
        // callback(null, 'success');
        console.log('model received POST: ' + result);
      });
    }
  },

  users: {
    get: function () {
      // db.connect(console.log('connected via users GET function'));
      // db.query('SELECT name FROM users', (err, result, fields) => {
      //   if (err) { callback(err, null); }
      //   callback(null, result);
      // });
    }, 
    post: function () {
      // db.connect(console.log('connected via messages GET function'));
      // db.query('INSERT INTO users (name) VALUES (?)', message.username, (err, result, fields) => {
      //   if (err) { callback(err, null); }
      //   callback(null, 'success');
      // });
    }
  }
};

