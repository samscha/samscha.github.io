const router = require('express').Router();

// TODO: move into an auth middleware
const tempAuth = (req, res, next) => {
  if (req.headers.auth1 === 'acbd') {
    next();
    return;
  }

  res.sendStatus(403);
  return;
};

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

module.exports = router;
