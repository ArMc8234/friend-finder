var express = require('express');
var exphbs = require('express-handlebars');
// var mysql = require('mysql');
// require('./app/data/friendData');

var app = express();

//connects file to the sql database to hold our data
// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'password',
//     database: 'friends_db',
  
// });

// connection.connect(function(err){
//     if(err) throw err;
//     console.log
//     console.log("Connected at ID: ", connection.threadId);
// })

//sets port to listen to the process enviroment's selected port or 8080
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//sets up Express to handle url encoding and parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
//create routes for the api page and html page

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});