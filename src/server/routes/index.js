var express = require('express');
var router = express.Router();



// need to render all fruits from database
router.get('/', function(req, res, next) {
  res.render('index');
});



router.get('/products', function(req, res, next) {
  res.render('products');
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});

module.exports = router;
