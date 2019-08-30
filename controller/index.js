// modules
const router = require('express').Router();
const apiRoutes = require('./api');

// declare our routes
// API Routes
router.use('/api', apiRoutes);

module.exports = router;
