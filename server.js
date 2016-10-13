//initialize npms
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//boiler plate stuff
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//routing to the right controller to handle requests
var routes = require('./controllers/burgers_controllers.js');
app.use('/', routes);

//initializing port
var PORT = 3000;
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})

