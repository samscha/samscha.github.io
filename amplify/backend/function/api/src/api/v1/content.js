const router = require('express').Router();

router
    .route('/content')
    .get((req, res) => {
        res.json({ success: 'get content succeed', url: req.url });
    })
    .all((req, res) => res.sendStatus(405));

router
    .route('/content/version')
    .get(tempAuth, (req, res) => {
        res.json({ vers: process.version });
    })
    .all((req, res) => res.sendStatus(405));

router
    .route('/content/*')
    .get((req, res) => {
        res.json({ success: 'get content * succeed', url: req.url });
    })
    .all((req, res) => res.sendStatus(405));

const tempAuth = (req, res, next) => {
  if (req.headers.auth1 === 'acbd') {
    next();
  }

  res.sendStatus(403);
  return;
}

module.exports = router;
