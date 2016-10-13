//initalizing a connection to database
var connection = require('./connection.js');

var orm = {

	//select ball burgers from database
	selectAll: function(callback){
		var s = 'SELECT * FROM burgers';

		connection.query(s, function(err, result) {
	 		if (err) throw err;
            callback(result);

        });
	},

	//adds burger to database
	insertOne: function(burger, callback){

		// var routeName = burger.burger_name.replace(/\s+/g, '').toLowerCase();

		var s = "INSERT INTO burgers (burger_name, devoured, date) VALUES (?,?,?)";
		var now = new Date();

		connection.query(s, [burger.toString(), JSON.parse('false'), now], function(err, result) {
			if (err) throw err;
            callback(result);
        });

	},

	//changes devoured boolean to true in database
	updateOne: function(name, condition, callback){
		var s = 'UPDATE burgers SET devoured=true where ' + condition;
		connection.query(s,[name.id], function(err, result) {
	 		if (err) throw err;
            callback(result);
        });

	}

};

module.exports = orm;