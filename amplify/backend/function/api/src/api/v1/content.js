const router = require('express').Router();

router
    .route('/content')
    .get(async (req, res) => {
        res.json({ success: 'get content succeed', url: req.url });
    })
    .all((req, res) => res.sendStatus(405));

router
    .route('/content/*')
    .get((req, res) => {
        res.json({ success: 'get content * succeed', url: req.url });
    })
    .all((req, res) => res.sendStatus(405));

module.exports = router;
