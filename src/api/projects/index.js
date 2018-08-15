const router = require('express').Router();

/**
 * /api/projects
 *
 * routes for projects endpoint
 *
 */
router.use(`/`, require('./routes/root'));

module.exports = router;
