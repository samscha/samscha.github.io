const App = require('./app');

module.exports = (router = require('../router')()) => new App(router);
