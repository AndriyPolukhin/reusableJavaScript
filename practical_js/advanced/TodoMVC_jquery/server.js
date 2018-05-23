// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function ( request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

// Lister for request
var listener = app.listen(3000, function () {
    console.log('Your app is listening on port " + listener.address().port');
});