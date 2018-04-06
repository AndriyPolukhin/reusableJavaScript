'use strict';
var http = require('http');
var url = require('url');
var PORT = process.env.PORT || 8888;
var HOSTNAME = process.env.HOSTNAME || 'localhost';
var server;

// override body with http://localhost?msg=Hola+Mundo

function requestHandler(req, res) {
	var parsedUrl = url.parse(req.url, true);
	var msg = parsedUrl.query.msg || 'Hello World';

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1>' + msg + '</h1>');
}

function startupHandler() {
	var serverAddr = server.address();
	var outputMessage = 'Server running at ';
	outputMessage += 'http://' + serverAddr.address;
	outputMessage += ':' + serverAddr.port;
	console.log(outputMessage);
}

server = http.createServer(requestHandler);
server.listen(PORT, HOSTNAME, null, startupHandler);
