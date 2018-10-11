var db = require('../db'); //requiring the connection
//connect 
console.log(db);

module.exports = {
  messages: {
    get: function (req, res, callback) {
        //querry the database
       let queryArgs = [];
        db.query('SELECT * FROM messages', queryArgs), (err, results)=>{
          if (err) {
            throw new Error('we failed');
          } else {
            callback(JSON.stringify(results));
          }
        }
    }, // a function which produces all the messages
    post: function (post) {
      
      
      INSERT INTO `table`(`columns`)
      VALUES 
      (post.user...)
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

