// BASE USE OF EJS

// 1.1. Init a variable
var express = require("express");
var app = express();

// 1.1.1 adding a static directory
app.use(express.static("public"));
// 1.1.2 seting a view engine
app.set("view engine", "ejs");

// 1.2 ROOT ROUTE set up
app.get("/", function (req, res) {
    res.render("home");
});

// 1.3 CUSTOMER ROUTE to a page
app.get("/fallinlovewith/:her", function (req, res) {
    var her = req.params.her;
    res.render("lova", {herVar : her});
});

// 1.4 LOOP ROUTE for posts
app.get("/posts", function (req, res) {
    var post = [
        {title: "A million dollar question", author: "Andriy"},
        {title: "The same repeated twice", author: "Anastasia"},
        {title: "Did the answer came throught", author: "Andriy"},
    ];

    res.render("posts", {posts: posts});
});

// 1.4 Server listening
app.listen(3000, function () {
    console.log("LET's LIStEN");
});