var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// var connection = mysql.createConnection({
//   user: 'root',
//   database: 'chat'
// });

var connection = mysql.createConnection({
      user: 'student',
      password: 'student',
      database: 'chat'
});


// var getConnection = function(callback) {
//     connect.getConnection(function(err, connection) {
//         callback(err, connection);
//     });
// };

connection.connect();
// module.exports = getConnections;
module.exports = connection;
