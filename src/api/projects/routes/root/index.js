const router = require('express').Router();

const utils = require('../utils');

router
  .route(`/`)
  .get(utils.upload.getPhoto, (req, res) => {
    const bucket = res.locals.bucket;

    res.contentType(bucket.ContentType);
    res.send(bucket.Body);
    // res.send({ bucket: res.locals.bucket }),
  })
  .post(
    utils.check.loggedIn,
    utils.parse.multipartForm,
    utils.sanitize.projectInfo,
    utils.project.create,
    utils.upload.photo,
    utils.project.addPhoto,
    utils.user.addProject,
    (req, res) => {
      res.send(utils.sanitize.project(res.locals.newUpdatedProject));
    },
  );

router
  .route(`/:id`)
  .get(utils.check.loggedIn, utils.project.retrieve, (req, res) =>
    res.send(utils.sanitize.project(res.locals.project)),
  )
  .put(
    utils.check.loggedIn,
    utils.sanitize.projectInfo,
    utils.project.update,
    (req, res) => {
      res.send(utils.sanitize.project(res.locals.updatedProject));
    },
  );
// .delete(utils.job.delete, utils.user.removeJob, (req, res) =>
//   res.status(204).send(),
// );

module.exports = router;
