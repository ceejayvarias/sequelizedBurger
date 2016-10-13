//initalizing npms
var express = require("express");
var router = express.Router();
var burg = require('../models/burger.js');

//index page that goes straight to /burgers
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

//this is the home page
router.get('/burgers', function (req, res) {
	burg.selectAll(function (data) {
		var hbsObject = { burgers: data };
		res.render('index', hbsObject);
	});
});

//handles a new burger creation
router.post('/burgers/create', function (req, res) {
	burg.insertOne(req.body.name, function () {
		res.redirect('/burgers');
	});
});

//changes burgers devoured boolean to true moving it to the devoured section
router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	burg.updateOne({ devoured: true }, condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;