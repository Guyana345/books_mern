const router = require('express').Router();
const bookRoutes = require('./books');

// http://localhost:5000/api/books
router.use('/api/books', bookRoutes);

module.exports = router;