const Project = require('./');

const utils = require('./utils');

exports.create = (req, res, next) => {
  new Project(res.locals.sanitizedProject).save((err, newProject) => {
    if (err) {
      utils.log.error(err);

      return res.status(500).send({ message: `error saving project` });
    }

    res.locals.newProject = newProject;
    next();
  });
};

exports.retrieve = (req, res, next) => {
  Project.findById(req.params.id).exec((err, project) => {
    if (err) {
      utils.log.error(err);

      return res.status(500).send({ message: `error retrieving project info` });
    }

    res.locals.project = project;
    next();
  });
};

exports.update = (req, res, next) => {
  const project = { ...res.locals.sanitizedProject };

  Project.findByIdAndUpdate(
    req.params.id,
    project,
    { new: true },
    (err, updatedProject) => {
      if (err) {
        utils.log.error(err);

        return res.status(500).send({ message: `error updating project` });
      }

      res.locals.updatedProject = updatedProject;
      next();
    },
  );
};

exports.addPhoto = (req, res, next) => {
  Project.findByIdAndUpdate(
    res.locals.newProject._id,
    { thumbnail: res.locals.thumbnailKey },
    { new: true },
    (err, newUpdatedProject) => {
      if (err) {
        utils.log.error(err);

        return res
          .status(500)
          .send({ message: `error adding photo to project` });
      }

      res.locals.newUpdatedProject = newUpdatedProject;

      next();
    },
  );
};
