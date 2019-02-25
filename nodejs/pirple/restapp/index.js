/**
 * PRIMARY FILE FOR THE API
 */

// DEPENDENCIES
const http = require('http');
const https = require('https');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const fs = require('fs');
const config = require('./lib/config');
const handlers = require('./lib/handlers');
const helpers = require('./lib/helpers');

// Instantiating a httpServer
const httpServer = http.createServer((req, res) => {
  unifiedServer(req, res);
});

// Start the server with a dynamic port
httpServer.listen(config.httpPort, () => {
  console.log(`Serving on localhost:${config.httpPort} in ${config.envName} mode`);
});
// Instantiae a httpsServer
const httpsServerOptions = {
  key: fs.readFileSync('./https/key.pem'),
  cert: fs.readFileSync('./https/cert.pem')
};
const httpsServer = https.createServer(httpsServerOptions, (req, res) => {
  unifiedServer(req, res);
});
// Start a http Server
httpsServer.listen(config.httpsPort, () => {
  console.log(`Serving on localhost:${config.httpsPort} in ${config.envName} mode`);
});

// Al the server logic for both the http and https server
const unifiedServer = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  const queryStringObject = parsedUrl.query;
  const method = req.method.toLowerCase();
  const headers = req.headers;
  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });
  req.on('end', () => {
    buffer += decoder.end();

    const chosenHandler = typeof (router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

    const data = {
      trimmedPath,
      queryStringObject,
      method,
      headers,
      payload: helpers.parseJsonToObject(buffer)
    };
    chosenHandler(data, (statusCode, payload) => {
      statusCode = typeof (statusCode) === 'number' ? statusCode : 200;
      payload = typeof (payload) === 'object' ? payload : {};
      const payloadString = JSON.stringify(payload);
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      res.end(payloadString);
      console.log('Return response:', statusCode, payloadString);
    });
  });
};

// Define a requrest router object
const router = {
  ping: handlers.ping,
  users: handlers.users,
  tokens: handlers.tokens,
  checks: handlers.checks
};
