module.exports = (routes) => {
  const router = require('express').Router();

  routes.forEach((route) => router.use('/v1', route));

  return router;
};
