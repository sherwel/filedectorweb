var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',username:'',password:'' });
});
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Express',username:'',password:'' });
});

module.exports = router;
