// I. LEARNIND WHAT EJS IS USED FOR


    // 1.1 Init a variabels for express
        var express = require("express");
        var app = express();

    // 1.2 ROOT ROUTE
        app.get("/", function (req, res) {
            res.render("home.ejs");
        });

    // 1.3 CUSTOMER ROUTES
        app.get("/fallinlovewith/:her", function(req, res) {
            var her = req.params.her;
            res.render("love.ejs", {herVar : her});
        });


    // 4. Get the server to listen to the port 3000
        app.listen(3000, function() {
            console.log("SERVING THE APP TO THE LOCALHOST");
        });  