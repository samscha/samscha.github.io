const Technology = require('./');

const utils = require('./utils');

exports.create = async (req, res, next) => {
  try {
    const newTechnology = await new Technology(res.locals.technology).save();

    res.locals.newTechnology = newTechnology;

    next();
  } catch (error) {
    utils.log.error(error);

    res.status(500).send({ message: `error creating new technology` });
  }
};
