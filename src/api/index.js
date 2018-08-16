const router = require('express').Router();

/**
 * api endpoints
 */
router.use(`/posts`, require('./posts'));
router.use(`/projects`, require('./projects'));
router.use(`/tags`, require('./tags'));
router.use(`/techs`, require('./techs'));
router.use(`/users`, require('./users'));

module.exports = router;
