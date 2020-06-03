const Server = require('./server');

module.exports = (app = require('../app')()) => new Server(app);
