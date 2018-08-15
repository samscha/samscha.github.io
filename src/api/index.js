const router = require('express').Router();

/**
 * api endpoints
 */
router.use(`/posts`, require('./posts'));
router.use(`/projects`, require('./projects'));
router.use(`/users`, require('./users'));

module.exports = router;
