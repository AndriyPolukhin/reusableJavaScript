const express = require('express');
const serveStatic = require('serve-static');

var app = express();

app.use(serveStatic('public/', {
  'index': [
    'index.html', 'index.htm'
  ]
}));
app.listen(3000);

// Multiple roots
app.use(serveStatic(__dirname, '/first'));
app.use(serveStatic(__dirname, '/second'));


app.get('/simple', function (req, res) {
  res.send('Simple router accessed!');
});

var router = express.Router();
router.get('/', function (req, res) {
  res.send('first page');
});
router.get('/enki', function (req, res) {
  res.send('enki page');
});

app.use('/', router);

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});
