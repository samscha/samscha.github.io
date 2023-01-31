module.exports = (router, configs) => {
  const app = require('express')();
  const helpers = require('./helpers');
  const port = helpers.normalizePort();

  app.set('port', port);
  configs.forEach((config) => app.use(config));
  app.use('/', router);
  app.use((req, res) => {
    res.sendStatus(404);
  });

  return app;
};
