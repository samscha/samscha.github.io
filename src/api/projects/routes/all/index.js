const router = require('express').Router();

const utils = require('../utils');

router
  .route(`/:tag`)
  .get(utils.validate.tag, utils.project.retrieveWithParms, (req, res) => {
    res.send({ projects: utils.sanitize.projects(res.locals.projects) });
  });

router
  .route(`/`)
  .get((req, res) => res.status(422).send({ message: `please provide a tag` }));

module.exports = router;
