const router = require('express').Router();

router
    .route('/')
    .get((req, res) => {
        res.json();
    })
    .all((req, res) => res.sendStatus(405));

module.exports = router;
