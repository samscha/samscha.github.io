const Project = require('./');

exports.create = (req, res, next) => {
  new Project(res.locals.sanitizedProject).save((err, newProject) => {
    if (err)
      return res.status(500).send({ err, message: `error saving project` });

    res.locals.newProject = newProject;
    next();
  });
};

exports.retrieve = (req, res, next) => {
  Project.findById(req.params.id).exec((err, project) => {
    if (err)
      return res
        .status(500)
        .send({ err, message: `error retrieving project info` });

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
        return res.status(500).send({ err, message: `error updating project` });
      }

      res.locals.updatedProject = updatedProject;
      next();
    },
  );
};
