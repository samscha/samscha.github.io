const router = require('express').Router();

/**
 * /api/tags
 *
 * routes for tags endpoint
 *
 */
router.use(`/`, require('./routes/root'));

module.exports = router;
