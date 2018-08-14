const router = require('express').Router();

const utils = require('../utils');

router
  .route(`/`)
  .post(utils.check.dbConnection, utils.authenticate.user, (req, res) =>
    res.send(utils.sanitize.user(req.user)),
  );

router
  .route(`/check`)
  .post(
    utils.check.dbConnection,
    utils.sanitize.loginCheck,
    utils.user.checkIfExists,
    (req, res) => res.status(204).send(),
  );

module.exports = router;
