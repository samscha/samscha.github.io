const router = require('express').Router();

/**
 * /api/users
 *
 * routes for users endpoint
 *
 */
router.use(`/`, require('./routes/root'));
router.use(`/login`, require('./routes/login'));
router.use(`/logout`, require('./routes/logout'));

module.exports = router;
