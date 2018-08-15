const sanitize = require('../../../projects/routes/utils/sanitize').project;

exports.info = (req, res, next) => {
  const USER_FIELDS = JSON.parse(process.env.USER_FIELDS || []);
  const sanitizedUser = {};

  if (USER_FIELDS.length === 0) {
    res.status(500).send({ message: `no user fields env found` });
    return;
  }

  for (let i = 0; i < USER_FIELDS.length; i++) {
    const field = USER_FIELDS[i];
    const info = req.body[field];

    if (!info) {
      res.status(422).send({ message: `please provide a ${field}` });
      return;
    }

    sanitizedUser[field] = info;
  }

  res.locals.sanitizedUser = sanitizedUser;
  next();
};

/**
 * note: this is not to be used with middleware
 *
 * @param {Object} user - req.user
 */
exports.user = user => {
  if (!JSON.parse(process.env.PROD)) return user;

  return {
    ...user._doc,
    password: undefined,
    _id: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    __v: undefined,
    projects: user.projects.map(project => sanitize(project)),
  };
};

exports.loginCheck = (req, res, next) => {
  const { email } = req.body;

  if (!email) return res.status(422).send({ message: `email not provided` });

  res.locals.email = email;
  next();
};
