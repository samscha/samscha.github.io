const utils = require('./');

exports.tag = async (req, res, next) => {
  const tags = JSON.parse(process.env.PROJECT_TAGS);
  const tag = req.params.tag;

  if (!tag) return res.status(422).send({ message: `please provide a tag` });

  if (!tags.includes(tag))
    return res.status(422).send({ message: `invalid tag` });

  const tagId = await utils.tag.findOne({ tag });

  res.locals.tag = { tags: [tagId] };

  next();
};
