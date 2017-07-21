var db = require('../db')();

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (request, response) {
      // SELECT * FROM messages;
      response.end();
    }, 
    // a function which can be used to insert a message into the database
    post: function () {
      // INSERT INTO messages
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

