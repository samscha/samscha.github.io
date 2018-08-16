exports.tagInfo = (req, res, next) => {
  const tag = req.body.tag;

  if (!tag) return res.status(422).send({ message: `please provide a tag` });

  res.locals.tag = { tag, createdBy: req.user.id };

  next();
};

exports.tag = tag => {
  if (process.env.NODE_ENV === 'development') return tag;

  return {
    ...tag._doc,
  };
};
