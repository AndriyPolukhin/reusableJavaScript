// 1. INITIALIZE THE EXPRESS FRAMEWORK
var express = require("express");
var app = express();
// 1.1 ADD AND ARRAY FOR THE CAMPGROUNDS
    // var 



// 2. SET THE TEMPLATE ENGINE
app.set("view engine", "ejs");

// 3. SET THE HOME PAGE TEMPLATE AND CREATE DATA
app.get("/", function (req, res) {
        // res.send("This is the HOME PAGE");
    res.render("landing");
});

// 4. SET THE campsGrounds route and template
app.get("/campgrounds", function (req, res) {

    // IMAGES are from the URL: http://photosforclass.com/search/camping

    var campgrounds = [
        {
            name: "Salmon Creek",
            image: "https://pixabay.com/get/ec31b90f2af61c2ad65a5854ee4d459fe270e7c818b4134195f6c878a5ef_340.jpg"
        },
        {
            name: "Granite Hill",
            image: "https://pixabay.com/get/ea35b8062cf1063ed95c4518b7444795ea76e5d004b0144395f0c770a6efb7_340.jpg"
        },
        {
            name: "Mountain Goot's REst",
            image: "https://pixabay.com/get/e83db50a21f4073ed95c4518b7444795ea76e5d004b0144395f0c770a6efb7_340.jpg"
        },
    ];
    res.render("campgrounds", {campgrounds: campgrounds});
});


// SET THE SERVER TO LISTEN TO PORT
app.listen(3000, function() {
    console.log("Yelp Camp Server is Loaded");
});