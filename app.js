//require express for use
var express = require('express');
const exphbs = require('express-handlebars');
var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//set port
app.set('port', process.env.PORT || 3000);

var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
    ];

//home page
    app.get('/', function(req, res) {
        res.render('home',
        {fortune : fortunes[1]});
        });

        // 404 catch-all handler (middleware)
        app.use(function(req, res, next){
        res.status(404);
        res.render('404');
        });
        // 500 error handler (middleware)
        app.use(function(err, req, res, next){
        console.error(err.stack);
        res.status(500);
        res.render('500');
        });

    app.listen(app.get('port'), function(){
        console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
        });