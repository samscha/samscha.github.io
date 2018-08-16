const router = require('express').Router();

const utils = require('../utils');

router
  .route(`/`)
  // .get(utils.check.loggedIn, utils.user.retrieve, (req, res) =>
  //   res.send(utils.sanitize.user(res.locals.user)),
  // )
  .post(utils.sanitize.tagInfo, utils.tag.create, (req, res) =>
    res.send(utils.sanitize.tag(res.locals.tag)),
  );
// .put(
//   utils.check.loggedIn,
//   utils.sanitize.info,
//   utils.user.update,
//   (req, res) => res.send(utils.sanitize.user(res.locals.updatedUser)),
// )
// .delete(utils.check.loggedIn, utils.user.delete, (req, res) =>
//   res.status(204).send(),
// );

module.exports = router;
