/**
 * APP
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');

module.exports = function () {
  const server = express();

  const create = (config, db) => {
    const routes = require('../routes');
    // set all the server things
    server.set('env', config.env);
    server.set('port', config.port);
    server.set('hostname', config.hostname);

    // add the middleware to parse the json
    server.use(bodyParser.json());
    server.use(expressValidator());
    server.use(bodyParser.urlencoded({
      extended: false
    }));

    // connect the database
    mongoose.connect(
      db.database,
      {
        useNewUrlParser: true,
        useCreateIndex: true
      }
    );

    // Set up routes
    routes.init(server);
  };

  const start = () => {
    const hostname = server.get('hostname');
    const port = server.get('port');

    server.listen(port, () => console.log(`Express server listening on http://${hostname}:${port}`));

  };

  return {
    create,
    start
  };
};
