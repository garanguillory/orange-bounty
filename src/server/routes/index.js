var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
function Fruits() {
  return knex('fruits');
}


// need to render all fruits from database
// GET all fruits
router.get('/', function(req, res, next) {
  Fruits().select().limit(3).then(function(result){
  	res.render('index', {fruits: result} );
  });
});





router.get('/products', function(req, res, next) {

		var column = 'rating';
		var order = 'ASC';

		if(Object.keys(req.query)[0]){
			column = Object.keys(req.query)[0];
			order = req.query[column];
		}

    Fruits().select().orderBy(`${column}`,`${order}`).then(function(result){
  	res.render('products', {fruits: result} );
  });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});


module.exports = router;
