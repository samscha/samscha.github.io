const router = require('express').Router();

const utils = require('../utils');

router
  .route(`/`)
  .get(
    utils.check.loggedIn,
    utils.check.dbConnection,
    utils.user.retrieve,
    (req, res) => res.send(utils.sanitize.user(res.locals.user)),
  )
  .post(
    utils.sanitize.info,
    utils.check.dbConnection,
    utils.user.create,
    utils.authenticate.user,
    (req, res) => res.send(utils.sanitize.user(res.locals.savedUser)),
  )
  .put(
    utils.check.loggedIn,
    utils.sanitize.info,
    utils.check.dbConnection,
    utils.user.update,
    (req, res) => res.send(utils.sanitize.user(res.locals.updatedUser)),
  )
  .delete(
    utils.check.loggedIn,
    utils.check.dbConnection,
    utils.user.delete,
    (req, res) => res.status(204).send(),
  );

module.exports = router;
