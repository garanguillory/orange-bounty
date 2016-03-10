var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
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


router.get('/charge', function(req, res, next){
  res.render('charge');
});

router.post('/charge', function(req, res, next) {
    var stripeToken = req.body.stripeToken;
    var amount =  req.body.stripeAmount;

    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: amount
    },
    function(err, charge) {
        if (err) {
            res.send('error');
        } else {
            res.send('success');
        }
    });
});



module.exports = router;
