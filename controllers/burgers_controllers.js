//initalizing npms
var express = require("express");
var router = express.Router();
var models = require('../models');

//index page that goes straight to /burgers
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

//this is the home page
router.get('/burgers', function (req, res) {
	models.burger.findAll(
	).then(function(data) {
	    var hbsObject = { burgers: data };
		res.render('index', hbsObject);
  	});
});

//handles a new burger creation
router.post('/burgers/create', function (req, res) {
	models.burger.create({
		burger_name: req.body.name,
	})
	.then(function() {
		res.redirect('/burgers');
	});
});

//changes burgers devoured boolean to true moving it to the devoured section
router.put('/burgers/update/:id', function (req, res) {
	models.burger.update(
	{
		devoured: true
	},
	{
		where: { id : req.params.id }
	})
	.then(function (result) {
		res.redirect('/');
		}, function(rejectedPromiseError){

	});
});

module.exports = router;