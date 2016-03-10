var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
function Citrus() {
  return knex('');
}


// need to render all fruits from database
// GET all fruits
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
