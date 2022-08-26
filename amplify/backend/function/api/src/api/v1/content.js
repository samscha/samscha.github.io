const router = require('express').Router();

router
    .route('/content')
    .get((req, res) => {
        res.json({ success: 'get content succeed', url: req.url, node: process.version });
    })
    .all((req, res) => res.sendStatus(405));

router
    .route('/content/version')
    .get((req, res) => {
        if (req.headers.auth1 === 'acbd') {
          res.json({ vers: process.version });
        } else {
          res.sendStatus(403);
        }
    })
    .all((req, res) => res.sendStatus(405));

router
    .route('/content/*')
    .get((req, res) => {
        res.json({ success: 'get content * succeed', url: req.url });
    })
    .all((req, res) => res.sendStatus(405));

module.exports = router;
