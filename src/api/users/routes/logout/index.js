const router = require('express').Router();

const utils = require('../utils');

router
  .route(`/`)
  .get(utils.authenticate.logout, (req, res) => res.status(204).send());

module.exports = router;
