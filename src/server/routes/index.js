var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
function Fruits() {
  return knex('fruits');
}


// need to render all fruits from database
// GET all fruits
router.get('/', function(req, res, next) {
  Fruits().select().then(function(result){
  	res.render('index', {fruits: fruits} );
  });
});



router.get('/products', function(req, res, next) {
  res.render('products');
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});



module.exports = router;
