//functions to call using ORM
var orm = require('../config/orm.js');

var burg = {
	selectAll: function (cb) {
		orm.selectAll( function (res) {
			cb(res);
		});
	},

	insertOne: function (val, cb) {
		orm.insertOne(val, function (res) {
			cb(res);
		});
	},
	updateOne: function (val, cond, cb) {
		orm.updateOne(val, cond, function (res) {
			cb(res);
		});
	}
};

module.exports = burg;