// CREATE AN APPLICATION USING EXPRESS AND OTHER DEPENDENCIES
//=====================================================================
// I. HERE WE INITIATE DEPENDENCIES WITH A REQUIRE
// 1. Require the needed dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongojs = require('mongojs')
var db = mongojs('customerapp', ['users']);
var ObjectId = mongojs.ObjectId;
// 2. Initiate the app.
var app = express();

/*
3. Create some middleware[the order in app is important!]
var logger = function(req, res, next) {
    console.log("Logging...");
    next();
}
app.use(logger);
*/

//=====================================================================
// II. MIDDLEWARE SETUP HERE:

// Views ENGINE middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// BodyParser Middleware
// 2.1 Use to Parse json content
app.use(bodyParser.json());
// 2.2  Encoding
app.use(bodyParser.urlencoded({extended: false}));


// 2.3 SET STATIC PATH
app.use(express.static(path.join(__dirname, 'public')));


// 2.4 Express Validator Middleware
app.use(function(req, res, next) {
    res.locals.errors = null;
    next();
});

app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;
        
        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg : msg,
            value : value
        };
    }
}));

//=====================================================================


// vARIABLE FOR JSON PARSE with a (res.json(people))
    /*
        var people = [{name: 'Andriy',age: 32 }, {name: 'Anastasia',age: 29},{name: 'Alexandra',age: 28}]
    */
/*
var users = [
    {
        id: 1,
        first_name: 'Andriy',
        last_name: 'Polukhin',
        email: 'andriy.polukhin@gmail.com'
    },
    {
        id: 2,
        first_name: 'Anastasia',
        last_name: 'Tsukrova',
        email: 'anastasia@gmail.com'
    },
    {
        id:3,
        first_name: 'Alexandra',
        last_name: 'Ivanova',
        email: 'alex.ivanova@gmail.com'
    }
]*/

//=====================================================================
// 4. CREATING ROTERS
// 4.1 Set the home route
app.get("/", function (req, res) {
    db.users.find(function(err,docs) {
         
         res.render("index", {
             title: 'Customers',
             users: docs
             // users: users
         });
    }); 
   
    // var title = 'Customers';


    // DIFERENT Ways of respondes:
    // res.json(people);
    // res.send("HELLO THERE");
   
});

// 4.2 Set a route for users
app.post("/users/add", function(req, res) {
    

    // Setting Rules for the Field:
    req.checkBody('first_name', 'First Name is Required').notEmpty();
    req.checkBody('last_name', 'Last Name is Required').notEmpty();
    req.checkBody('email', 'Email is Required').notEmpty();

    var errors = req.validationErrors();

    if(errors) {
        res.render('index', {
            title: 'Customers',
            users: users,
            errors: errors
        });
    } else {
        var newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
        db.users.insert(newUser, function(err, result) {
            if(err) {
                console.log(err);
            }
            res.redirect("/");
        });
        console.log("Success");
    }
});

// 4.3 Set a DELETE user Route:
app.delete('/users/delete/:id', function(req, res) {
    db.users.remove({_id: ObjectId(req.params.id) }, function(err, result) {
        if(err) {
            console.log(err);
        }
        res.redirect("/");
    });
});



//=====================================================================
// 7. Listen to the port 3000 
app.listen(3000, function() {
    console.log("Server is running on port 3000");
});