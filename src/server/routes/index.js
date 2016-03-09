var express = require('express');
var router = express.Router();



// need to render all fruits from database
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
