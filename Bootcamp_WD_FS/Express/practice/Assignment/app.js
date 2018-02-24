/*
    # Express Routing Assignment 

    1. Create a breand new Express app from scratch
    2. Create a package.json usin `npm init` and add express as a dependency
    3. In your main app.js file, add 3 different routes:

    Visiting "/" should print "Hi there, welcome to the assignment!"
    ================================================================================
    Visiting "/speak/pig" should print "The pig says 'Oink'"
    Visiting "/speak/cow" should print "The cow says 'Moo'"
    Visiting "/speak/dog" should print "The dog says 'Woof Woof!"
    ================================================================================
    Visiting "/repeat/hello/3" should print "hello hello hello"
    Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
    Visiting "/repeat/blah/2" should print "blah blah"
    ================================================================================
    If a user visits any other route, print:
    "Sorry, page not found...What are you doing with your life?"

*/

// 1. Adding Express
var express = require("express");
var app = express();

// 2. Adding Routes

    // 2.1 Root page route

    app.get("/", function(req, res) {
       res.send("Hi there, welcome to the assignment!");
    }); // 2.1 Done!

    // 2.2 SPEAK ROUTE

    app.get("/speak/:type", function(req, res) {
        var type = req.params.type;
        var type_say = "";   
        switch(type) {
            case "pig":
                type_say = "Oink";
                break;
            case "cow":
                type_say = "Moo";
                break;
            case "dog":
                type_say = "Woof Woof!";
                break;
            default:
                type_say = "Check the route";
                break;
        }
        
        res.send("The " + type + "says " + type_say);
    }); // 2.2 Done!

    // 2.3 Repeat Route
    app.get("/repeat/:word/:times", function (req, res) {
        var word = req.params.word + " ";
        var times = req.params.times;

        res.send(" " + word.repeat(times));
    }); // 2.3 Done!

    //2.4 Error Route

    app.get("*", function (req, res) {
        res.send("Sorry, page not found...<br> What are you doing with your life?");
    }); // 2.4 Done!



// 3. Adding a listening port 3000
app.listen(3000, function() {console.log("Serving the data from routes");});


// THE ASSIGNMENT IS FINISHED!
