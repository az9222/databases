var db = require('../db'); //requiring the connection
//connect 
console.log(db);

module.exports = {

  messages: {
<<<<<<< HEAD
    get: function (callback) {
      // fetch all messages
      // text, username, roomname, id
      var queryStr = 'select messages.id, messages.text, messages.roomname, users.username \
                      from messages left outer join users on (messages.userid = users.id) \
                      order by messages.id desc';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a message for a user id based on the given username
      var queryStr = 'insert into messages(text, userid, roomname) \
                      value (?, (select id from users where username = ? limit 1), ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
=======
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
>>>>>>> 62e112c8f873cc38e003d7b160ed5442e9b400c2
  },
  users: {
    get: function (callback) {
      // fetch all users
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a user
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
  };

