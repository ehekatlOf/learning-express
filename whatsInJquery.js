var express = require('express');
var app = express();

app.get('/search', function(req,res){
    console.log(req.query);
    res.send(JSON.stringify(req.query));
});

app.listen(process.argv[2]);