var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main', compilerOptions: undefined}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'dist/assets')));


// Make CSS / JS / Images accessible
app.use("/assets", express.static(path.join(__dirname, 'dist/assets')));

app.get("/*", function(req, res) {
	res.render('index', {
		title: 'USIU-Africa Hackathon Summer 2015',
		STYLES_URL: '/assets/stylesheets/app.css',
		APP_SCRIPT_URL: '/assets/javascripts/app.js',
		SHARED_SCRIPT_URL: '/assets/javascripts/shared.js'
	});
});

var port = 2015;
app.listen(port, function() {
    console.log("Backbone server listening on port " + port);
});