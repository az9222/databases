var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect();

module.exports = connection;


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
