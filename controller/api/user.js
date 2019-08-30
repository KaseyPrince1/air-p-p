// modules
const router = require('express').Router();
const db = require('../../models');

// create a user
router.post('/create', (req, res) => {
  db.User.create(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(error => console.log(error));
});

// update a user????
router.put('/create', (req, res) => {
  console.log(req.body);
  res.send('hit the create user route');
});


module.exports = router;
