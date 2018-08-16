exports.projectInfo = (req, res, next) => {
  const PROJECT_FIELDS = JSON.parse(process.env.PROJECT_FIELDS || []);
  const OPTIONAL_FIELDS = JSON.parse(process.env.PROJECT_FIELDS_OPTIONAL || []);
  const sanitizedProject = {};

  if (PROJECT_FIELDS.length === 0) {
    return res.status(500).send({ message: `no project fields env found` });
  }

  for (let i = 0; i < PROJECT_FIELDS.length; i++) {
    const field = PROJECT_FIELDS[i];
    const info = req.body[field];

    if (!info) {
      return res.status(422).send({ message: `please provide a ${field}` });
    }

    sanitizedProject[field] = info;
  }

  for (let i = 0; i < OPTIONAL_FIELDS.length; i++) {
    const field = OPTIONAL_FIELDS[i];
    const info = req.body[field];

    if (!info) continue;

    sanitizedProject[field] = info;
  }

  res.locals.sanitizedProject = sanitizedProject;
  next();
};

exports.updatedProjectInfo = (req, res, next) => {
  const OPTIONAL_FIELDS = JSON.parse(process.env.PROJECT_FIELDS_OPTIONAL || []);
  const sanitizedProject = {};

  for (let i = 0; i < OPTIONAL_FIELDS.length; i++) {
    const field = OPTIONAL_FIELDS[i];
    const info = req.body[field];

    if (!info) continue;

    sanitizedProject[field] = info;
  }

  res.locals.sanitizedProject = sanitizedProject;
  next();
};

/**
 * note: this is not to be used with middleware
 *
 * @param {Object} project - project doc
 */
exports.project = project => {
  if (!JSON.parse(process.env.PROD)) return project;

  return {
    ...project._doc,
    _id: undefined,
    __v: undefined,
    createdAt: undefined,
    updatedAt: undefined,
  };
};
