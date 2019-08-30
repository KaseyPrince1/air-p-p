// modules
const router = require('express').Router();
const db = require('../../models');

// create a review
router.post('/create', (req, res) => {
  db.Review.create(req.body)
  .then(review => {
    res.json(review);
  })
  .catch(error => console.log(error));
});


module.exports = router;