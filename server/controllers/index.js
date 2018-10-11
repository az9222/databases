var models = require('../models');
//import fs promises
module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log("It works??????"); 
      //if the request method is get and ulr is /messages
      models.messages.get(req, res, (results)=>{
        if (err) {
          throw err;
        } else {
          res.json(results);
        }
      })
        
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {} 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

