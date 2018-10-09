
// Dependencies


var express = require("express")
var bodyParser = require("body-parser")


//express 

var app = express();

var PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text())


// Routes

require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");




// Listener

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
    
});