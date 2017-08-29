var express = require('express');
var router = express.Router();

var db = require('../main/util/DBConfig');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query('SELECT * from user', function (err, rows) {
    console.log(rows)
    if(err){
      alert('error');
    } else {
      res.render('index', { title: 'HAH' });
    }
  })
});

module.exports = router;
