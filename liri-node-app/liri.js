require("dotenv").config();

var fs = require("fs");
var keys = require("./keys.js");
var request = require('request');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var parameter = process.argv[3];





