var express = require('express');
var router = express.Router();
var db = require('../db/util/DBConfig');

router.get('/', function(req, res, next) {
  res.render('login', '');
});
router.post('/', function (req, res) {
  let username = req.body.username;
  let pwd = req.body.pwd;
  let sql = `SELECT password FROM user WHERE username='${username}'`;
  db.query(sql, function (err, rows) {
    let password = rows[0].password;
    if (password === pwd) {
      res.redirect('/');
      console.log('信息正确，登录成功');
    } else {
      res.json({status:0});
      console.log('信息不正确，请重新输入');
    }
  });
});

module.exports = router;
