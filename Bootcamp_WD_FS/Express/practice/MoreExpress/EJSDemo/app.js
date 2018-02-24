// I. LEARNIND WHAT EJS IS USED FOR


    // 1.1 Init a variabels for express
        var express = require("express");
        var app = express();

        // 1.1.1 Here we added the static directory
            app.use(express.static("public"));
        
        // 1.1.2 Indicate that the file format is .ejs
            app.set("view engine", "ejs");

    // 1.2 ROOT ROUTE
        app.get("/", function (req, res) {
            res.render("home");
        });

    // 1.3 CUSTOMER ROUTES
        app.get("/fallinlovewith/:her", function(req, res) {
            var her = req.params.her;
            res.render("love", {herVar : her});
        });

    // 1.4 A LOOP ROUTE 
        app.get("/posts", function ( req, res) {
            var posts = [
                {title: "What does it takes", author: "Andriy"},
                {title: "Shom me your wit", author: "Anastasia"},
                {title: "That miteciolus enough", author: "John"},
            ];

            res.render("posts", {posts: posts});
        });  


    // 4. Get the server to listen to the port 3000
        app.listen(3000, function() {
            console.log("SERVING THE APP TO THE LOCALHOST");
        });  