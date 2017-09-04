var express = require('express');
var router = express.Router();
var db = require('../db/util/DBConfig');

router.get('/', function(req, res, next) {
  res.render('register', '');
});
router.post('/', function (req, res) {
  let username = req.body.username;
  let pwd1 = req.body.pwd1;
  let pwd2 = req.body.pwd2;
  if(pwd1 === pwd2) {
    let sql = `INSERT INTO user(username,password,status,descn) values('${username}','${pwd1}','1','用户')`;
    db.query(sql, function (err, rows) {
      res.redirect('/login');
      console.log('插入用户成功');
    });
  } else{
    console.log('两次密码输入不一致，请重新输入');
  }
});

module.exports = router;
