var db = require('../util/DBConfig');

function User(username){
  this.username = username;
  this.password = this.getPassword(username);
}

User.prototype.getPassword = function(username) {
  let sql = `SELECT password FROM user WHERE username='${username}'`;
  db.query(sql, function (err, rows) {
    return rows[0].password;
  });
}

module.exports = User;