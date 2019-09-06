// modules
const router = require('express').Router();
const db = require('../../models');

// Find all locations by type
router.get('/all/:type', (req, res) => {
    console.log(req.params);
  db.Location.findAll({where:{loc_type:"mall"}})
    .then(location => {
      res.json(location);
    })
    .catch(error => console.log(error));
});

// Find a location by location id
router.get('/single/:id', (req, res) => {
    console.log(req.params);
  db.Location.findAll({where:{id:req.params.id}})
    .then(location => {
      res.json(location);
    })
    .catch(error => console.log(error));
});

module.exports = router;