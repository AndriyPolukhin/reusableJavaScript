'use strict';
var init = require('./config/init')(),
    config = require('./config/config'),
    mongoose = require('mongoose'),
    chalk = require('chalk');

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
    if (err) {
        console.error(chalk.red('Could not connect to MongoDB!'));
        console.log(chalk.red(err));
    }
});


// Init the express application
var app = require('./config/express')(db);

// Start the app by listening on <port>
app.listen(congif.port);

// Expose app
exports = module.exports = app;

// Logging initializaation
console.log('MEAN.JS application started on port ' + config.port);