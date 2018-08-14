const router = require('express').Router();

const utils = require('../utils');

router
  .route(`/`)
  .post(
    utils.check.loggedIn,
    utils.sanitize.jobInfo,
    utils.check.dbConnection,
    utils.job.create,
    utils.user.addJob,
    (req, res) => {
      res.send(utils.sanitize.job(res.locals.newJob));
    },
  );

router
  .route(`/:id`)
  .get(utils.check.dbConnection, utils.job.retrieve, (req, res) =>
    res.send(utils.sanitize.job(res.locals.job)),
  )
  .put(utils.check.dbConnection, (req, res) => {
    //
  })
  .delete(
    utils.check.dbConnection,
    utils.job.delete,
    utils.user.removeJob,
    (req, res) => res.status(204).send(),
  );

module.exports = router;
