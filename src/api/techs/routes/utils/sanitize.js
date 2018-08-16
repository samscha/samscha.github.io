exports.technologyInfo = (req, res, next) => {
  const technology = req.body.technology;

  if (!technology)
    return res.status(422).send({ message: `please provide a technology` });

  res.locals.technology = { technology, createdBy: req.user.id };

  next();
};

exports.technology = technology => {
  if (process.env.NODE_ENV === 'development') return technology;

  return {
    ...technology._doc,
  };
};
