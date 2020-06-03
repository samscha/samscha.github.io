const router = require('express').Router();

router.route('/users').get((req, res) => {
    res.json('/users');
});

module.exports = router;
