const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  const andriy = { name: 'Andriy', age: 33, health: 'perfect' };
  // res.send('Hey! It Workds!');
  // res.json(andriy);
  // res.send(req.query.name);
  res.json(req.query);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);

});

module.exports = router;