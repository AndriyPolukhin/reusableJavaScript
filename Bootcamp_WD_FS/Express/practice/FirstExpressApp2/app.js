var express = require("express");
var app = express();


// 0. If I shift the "*" to the begining than all of the other routes do not work
// app.get("*", function(req, res) {
//     console.log("NO DATA BESIDES THIS ONE");
//     res.send("NO DATA BESIDES THIS ONE IS PROVIDED BY THE ROUTE");
// });

// 1. "/" => "Hi There!"
app.get("/",  function(req, res) {
    res.send("Hi there LOCALHOST!");
});

// 2. "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Good Bye at the LOCALHOST");
});

// 3. "/dog" => "MEOW!"

app.get("/dog", function(req, res) {
    console.log('I MADE A REQUEST TO THE DOG PAGE');
    res.send("MEOW from the LOCALHOST");
});


// 4. Let's learn the parameters usage

 app.get("/r/:subredditName", function (req, res) {
     console.log(req.params);
     var subreddit = req.params.subredditName;
     res.send("THIS IS A JUST A SUBREDDIT of name " + subreddit.toUpperCase() + " Finally");
 });

 app.get("/r/:subredditName/comments/:id/:title", function (req, res) {
    console.log(req.params);
    var subreddit = req.params.subredditName;
    var id = req.params.id;
    var title = req.params.title; 
    res.send("THIS IS A MULTIPARAMETER ROUTE: " + "<br> 1. We have a Subreddit called: " + subreddit.toUpperCase() + "<br> 2. We now it unde the id: " + id + "<br> And the title is: "  + title);
 });


// 5. All of the rest that are not actual routes

 app.get("*", function (req, res) {
     res.send("NO DATA BESIDES THIS ONE IS PROVIDED BY THE ROUTE");
 });

// 6. "Tell Express to listen for request (start server)"

app.listen(3000, function() {
    console.log("Serving the text on the LOCALHOST");
}); 