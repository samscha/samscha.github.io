exports.user = (req, res, next) => {
  require('../../../passport').authenticate('local', (err, user, info) => {
    if (err)
      return res.status(500).send({ err, message: `error authenticating` });

    if (!user) return res.status(422).send(info);

    req.login(user, function(err) {
      if (err)
        return res.status(500).send({ err, message: `error logging in` });

      next();
    });
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  req.logout();

  next();
};
