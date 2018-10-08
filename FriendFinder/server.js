// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express App

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
//changed to true
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());



//from npm body-parser
// parse application/json
app.use(bodyParser.json());

//require the html-routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);



// Starts the server to begin listening

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});