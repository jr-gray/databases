var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) { 
      console.log('GET request received by controller');
      models.messages.get(req);
      res.status(200).send('WOOO');
      // models.messages.get((data) => console.log('controller got data: ' + data));
      // // models.messages.get((data) => {
      // //   res.json(data);
      // // });
    },
    // a function which handles posting a message to the database
    post: function (req, res) { 
      console.log('Controller received POST, sending to model' + Object.keys(req.body));
      // var message = req.body;
      models.messages.post(req);
      res.status(200).send('WOOO');
      // models.messages.post((data) => {
      //   res.status(200).send('success');
      // });
    } 
  },

  users: {
    get: function (req, res) { 
      // models.messages.get((data) => {
      //   res.json(data);
      // });
    },
    post: function (req, res) { 
      // models.messages.post((data) => {
      //   res.status(200).send('success');
      // });
    }
  }
};

