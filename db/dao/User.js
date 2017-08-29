var db = require('../util/DBConfig');

function User(){};

User.prototype.find = function () {
  let sql = 'SELECT * from user';
  db.query(sql, function (err, rows) {
    console.log(rows);
  });
}

module.exports = User;