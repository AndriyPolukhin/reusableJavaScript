const http = require('http');

// Create a server object
http.createServer((req, res) => {
  // Write a response
  res.write('Hello Anastasia');
  res.end();
}).listen(5000, () => console.log('server running....'));