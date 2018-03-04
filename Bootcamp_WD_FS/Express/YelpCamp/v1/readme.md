#YELP CAMP 

# v1:

====================================================================================================================
# I. Setup and First base functionality
    * Add Landing Page
    * Add Campgrounds Page that lists all campgrounds

#Each Campground has:
    * Name
    * Image

# 1. npm init
    * Set the app.js as a starting point
# 2. npm install express ejs --save
    * Add node modules of express and ejs view engine
# 3. touch app.js
    * Create an entry point file
    * Open the file app.js
    * Requre the express
    * Start listening to the port 3000 on server
# 4. Initiate a Home page route
    * Create a route to the Root page => landing
    * Add the views directory : mkdir views
    * Add the landing.ejs : touch views/landing.ejs
    * Add the base template to the landing.ejs
    * Add the response with render : res.render("landing");
# 5. Set the view engine to ejs
    * Indicare the usage of the ejs by the app : app.set("view engine", "ejs");
# 6. Initiate a Campgrounds page route
    * Create a get route for the campsground : "/campgrounds"
    * Create the campsgrounds array with name and image as object [{name:"",image:""}]
    * Add the res.render("campgrounds") to the route
    * Add the campground to the views : touch views/campgrounds.ejs
    * Add content to the campground: Loop througe the data using name and an image
    * Add the {campgrounds : campgrounds} variable to the campgrounds render route
    * Use a forEach loop on a campgrounds array to show the data from the array
    * <% campgrounds.forEach(function(campground) { %> <% }); %>
    * Put the div with name and image into the function to loop through

====================================================================================================================
# II. Layout and Basic Styling setup
    * Create our header and footer partials
    * Add in Bootstrap

# 1. Adding partials folder and files
    * Create a partials directory: mkdir views/partials
    * Create partials files: touch views/partials/header.ejs & footer.ejs
    * Add base content to the header and footer
    * Include the header and footer to the file: <% include partials/header || footer %>
# 2. Add bootstrap to the header and footer from : www.bootstrapcdn.com

====================================================================================================================
# III. Creating New Campgrounds
    * Setup new campground POST route
    * Add in body-parser
    * Setup route to show form
    * Add basic unstyled form

# 1. Setup a Post route for campground
    * Set up a post route for campground with an equal name for the get route
    * Use postman to check if it works : res.send("Workds?");
# 2. Install body-parser extension and use it
    * Use: 'npm install body-parser --save' to add the body parse
    * Add it to the app.js with a require.
# 3. Add a route for a form campgrounds/new
    * Add a GET route to the app.js file that indicated the new route path 
    * Create a new views/new.ejs file  
    * Add a form to the new.ejs file and set method="POST" action="/campgrounds"
    * Update the post : "/campgrounds" route by adding var name|image = req.body.name|image
    * Create a new object that hold name and image : var newCampground = { name: name, image: image }
    * Push the newCampground into the Array campgrounds :  campgrounds.push(newCampground)
    * Redirect the POST route to the GET route of res.redirect("/campgrounds")
# 4. Add a link to the html pages for navigation
    * Add to campgrounds to redirect to ("/campgrounds/new")
    * Add to campgrounds/new to redirect to ("/campgrounds")

====================================================================================================================

# IV. Style the campgrounds page
    * Add a better header/title
    * Make campgrounds display in a grid

# 1. Styling a header in the campgrounds.ejs
    * Wrap all of the html into a div with a class of "container"
    * Add additional p with a description below the title
    * Wrap title and a p with a contianer with a class of a "jumbotron"
    * Move the link to "/campground" to the jubotron and add a class of "btn btn-primary btm-large" to it
    * Wrap content of a jumbotron into one more div wit ha class of "container" to improve spacing
# 2. Adding the display Grid
    * Add a row with a col-lg-12 with h3 text
    * Wrap everything in a div with the class of "col-md-3 col-sm-6" this gives a proper layout for dif size
    * Add a wrapping div around the image with a class of "img-thumbnail"
    * Add a class "img-fluid' to the img tag
    * Move the h4 with text to the img-thumbnail div and add a div with caption class around it
    * Add a text-center class to the main row

====================================================================================================================

# V. Style the Navbar and Form
    * Add a navbar to all templates
    * Style the new campground form with bootstrap classes

# 1. Use the bootstrap navbar of v. 3.3.7 to create a simple navbar and place it on all pages
    * Add a navbar from getbootstrap componente
    * Add link names and classes
# 2. Style the form with bootsrap 3.3.7
    * Place the form in the center: use container div, row div, form-group around each item of the form
    * Stack the input fields on one-another using form-control
    * Add bootstrap button classes to the Submit button: btn btn-lg btn-default
    * Center the text with a class

























