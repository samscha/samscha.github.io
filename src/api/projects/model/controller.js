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

exports.retrieve = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id).populate(
      'tags technologies url',
    );

    res.locals.project = project;

    next();
  } catch (error) {
    utils.log.error(error);

    return res.status(500).send({ message: `error retrieving project info` });
  }
};

exports.retrieveWithParms = async (req, res, next) => {
  try {
    const projects = await Project.getAllProjects(res.locals.tag);

    res.locals.projects = projects;
    next();
  } catch (err) {
    utils.log.error(err);

    return res.status(500).send({ message: `error getting projects with tag` });
  }
};

exports.update = async (req, res, next) => {
  const project = { ...res.locals.sanitizedProject };

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      project,
      { new: true },
    ).populate('tags technologies');

    res.locals.updatedProject = updatedProject;

    next();
  } catch (error) {
    utils.log.error(error);

    return res.status(500).send({ message: `error updating project` });
  }
  // }
  //   (err, updatedProject) => {
  //     if (err) {
  //       utils.log.error(err);

  //       return res.status(500).send({ message: `error updating project` });
  //     }

  //     res.locals.updatedProject = updatedProject;
  //     next();
  //   },
  // );
};

exports.addPhoto = (req, res, next) => {
  if (!res.locals.thumbnailKey) return next();

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
