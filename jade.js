var express = require('express');
var path = require('path');

var app = express();

console.log(process.argv[3]);
console.log(process.argv[2]);

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));

app.get('/home', function(req,res){
   res.render('index.jade', {date: new Date().toDateString()});
   res.end();
});


app.listen(process.argv[2]);