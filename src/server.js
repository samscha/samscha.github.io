const server = require('express')();

/**
 * trust first proxy in production
 */
if (process.env.NODE_ENV === 'production') server.set('trust proxy', 1);

/**
 * server configuration
 */
require('./server.config').forEach(config => server.use(config));

/**
 * connect to database
 */
require('./db').connectToDb();

/**
 * server routes
 */
server.use(`/api`, require('./api'));
// add more here

/**
 * the "catchall" handler
 *
 * https://daveceddia.com/deploy-react-express-app-heroku/
 *
 */
server.get(`*`, (req, res) => {
  res.sendFile(require('path').join(__dirname + '/client/build/index.html'));
});

module.exports = server;
