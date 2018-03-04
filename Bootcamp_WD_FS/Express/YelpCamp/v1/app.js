// 1. Initiate the express framework
var express = require("express");
var app = express();

// 1.1 Setup of a view engine
app.set("view engine", "ejs");

// 1.2. Add the bodyParser to the app
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// 2. Add the GET route to the landing page
app.get("/", function (req, res) {
    // 2.1 Rendering a page from views
    res.render("landing");
});

// 3. Add the GET route for the campgrounds page
app.get("/campgrounds", function (req, res) {
    // 3.1 Create a Array with data for the campgrounds
    var campgrounds = [
        { name: "Salmon Creek", image: "https://pixabay.com/get/e136b80728f31c2ad65a5854ee4d459fe270e7c818b4134194f4c27ca3ee_340.jpg"},
        { name: "Granite Hill", image: "https://pixabay.com/get/eb30b90c2bf4023ed95c4518b7444795ea76e5d004b0144395f1c57aa2e9b6_340.jpg"},
        { name: "Mountaine Goat", image: "https://pixabay.com/get/eb32b9072ef3063ed95c4518b7444795ea76e5d004b0144395f1c57aa2e9b6_340.jpg"}
    ];
    // 3.2 Rendering a page from views and adding the Array for use on the cg page
    res.render("campgrounds", {campgrounds: campgrounds});
}); 

// 4. Add the POST route for the campground
app.post("/campgrounds", function (req, res) {
    res.send("YOU USED THE POST ROUTE");
    // 4.1 Get data from form and add to campgrounds array

    // 4.2 Redirect back to the campgrounds page
});

// _. Init the server for listening to the port 3000
app.listen(3000, function () {
    console.log("Server is Listenning to YelpCamp v1");
});