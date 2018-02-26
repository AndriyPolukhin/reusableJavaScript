var express =require("express");
var app = express();


app.set("view engine", "ejs");


app.get("/", function(req, res) {
    res.render("home");
});

app.get("/friends", function(req, res) {
    var friends = ["Andriy", "Anastasia", "Alexandra", "Olga"];
    res.render("friends", {friends: friends});
}); 


app.post("/addfriend", function(req, res) {
    res.send("YOU HAVE REACHED THE POST ROUTE!!!");
});


app.listen(3000, function() {
    console.log("SERVING");
});