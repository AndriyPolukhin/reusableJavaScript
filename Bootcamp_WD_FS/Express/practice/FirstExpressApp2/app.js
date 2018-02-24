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

 

// 5. All of the rest that are not actual routes

 

// 6. "Tell Express to listen for request (start server)"

app.listen(3000, function() {
    console.log("Serving the text on the LOCALHOST");
}); 