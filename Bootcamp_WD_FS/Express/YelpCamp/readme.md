#Yelp Camp

v1
# I. Setup and First base functionality
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
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
    * Include the header and footer to the filte: <% include partials/header || footer %>
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






























