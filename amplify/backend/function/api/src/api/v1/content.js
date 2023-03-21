const aws = require('aws-sdk');
const router = require('express').Router();

// TODO: move into an auth middleware
const tempAuth = async (req, res, next) => {
  const { Parameters } = await new aws.SSM()
    .getParameters({
      Names: ['AUTH_KEY_TEMP'].map((secretName) => process.env[secretName]),
      WithDecryption: true,
    })
    .promise();

  // TODO: move to above request invocation
  if (Parameters.length === 0) {
    res.sendStatus(500);
    return;
  }

  const authKey = response.Parameters.pop().Value;

  if (req.headers.auth1 === authKey) {
    next();
    return;
  }

  res.sendStatus(403);
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
