var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));

console.log(process.argv[2]);

app.post('/form', function(req,res){
    console.log(req.body.str);
    res.end(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);