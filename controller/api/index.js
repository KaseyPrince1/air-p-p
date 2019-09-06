// modules
const router = require('express').Router();
const userRoutes = require('./user');
const reviewRoutes = require('./review');
const authRoutes = require('./auth');

// declare our routes
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/review', reviewRoutes);

module.exports = router;