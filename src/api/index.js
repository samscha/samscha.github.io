const router = require('express').Router();

/**
 * api endpoints
 */
router.use(`/jobs`, require('./jobs'));
router.use(`/users`, require('./users'));

module.exports = router;
