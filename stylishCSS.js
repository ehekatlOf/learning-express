var express = require("express");
var stylus = require('stylus');
var path = require('path');
var app = express();

app.use(stylus.middleware(__dirname + '/public'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.argv[2]);