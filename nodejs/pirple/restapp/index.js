/**
 * PRIMARY FILE FOR THE API
 */

// Dependencies
const server = require('./lib/server');
const workers = require('./lib/workers');

// Declare the App
const app = {};

// Init
app.init = function () {
  // Start the server
  server.init();
  // Start the workers
  workers.init();
};

// Execute the function
app.init();

// Export the app
module.exports = app;