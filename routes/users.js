var express = require('express');
var router = express.Router();
var User = require('../db/dao/User');

router.get('/', function(req, res, next) {
  let user = new User();
  user.find();
  res.send('HAHA');
});

module.exports = router;
