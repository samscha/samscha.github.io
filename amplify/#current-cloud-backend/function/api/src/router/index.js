const Router = require('./router');

module.exports = (routes = require('../routes')) => new Router(routes);
