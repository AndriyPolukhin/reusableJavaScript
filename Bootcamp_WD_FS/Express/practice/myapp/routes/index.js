var express = require('express');
var router = express.Router();

 

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expresses' })
 
}) 

module.exports = router;
 
*/

var app = express()

var myLogger = function(req, res, next) {
  console.log('Logged')
  next()
}

app.use(myLogger)

app.get('/', function (req, res) {
  res.send('Hello world')
})

app.listen(3000)