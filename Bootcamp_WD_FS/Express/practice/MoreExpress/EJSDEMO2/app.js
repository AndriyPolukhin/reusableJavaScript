var express = require("express");
var app = express();


app.get("/", function (req, res) {
    
    res.render("home.ejs");
    // res.send("<h1>Thi s is the main page</h1><h2>WELCOME</h2>");
});


app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar:thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Made a Million", author: "Andriy"},
        {title: "Builded Sai Straum", author: "Mr. Polukhin"},
        {title: "Maried Anastasia", author: "Andruha"},
    ];

    res.render("posts.ejs", {posts: posts});
});


app.listen(3000, function() {
    console.log("Server Listening");
});