// modules
const router = require('express').Router();
const userRoutes = require('./user');
const reviewRoutes = require('./review');

// declare our routes
router.use('/user', userRoutes);
router.use('/review', reviewRoutes);

module.exports = router;