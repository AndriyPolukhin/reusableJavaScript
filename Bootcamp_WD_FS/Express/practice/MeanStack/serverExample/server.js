'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hello Express</h1>');
});

app.listen(3000, function() {
    console.log("Running on port 3000");
});