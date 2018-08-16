const Tag = require('./');

const utils = require('./utils');

exports.create = async (req, res, next) => {
  try {
    const newTag = await new Tag(res.locals.tag).save();

    res.locals.newTag = newTag;

    next();
  } catch (error) {
    utils.log.error(error);

    res.status(500).send({ message: `error creating new tag` });
  }
};
