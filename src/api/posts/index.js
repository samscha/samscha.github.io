const router = require('express').Router();

/**
 * /api/jobs
 *
 * routes for jobs endpoint
 *
 */
router.use(`/`, require('./routes/root'));

module.exports = router;
