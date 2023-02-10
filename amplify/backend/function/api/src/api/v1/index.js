const contacts = require('./contacts');
const info = require('./info');
const location = require('./location');
const skills = require('./skills');

module.exports = [
  require('./root'),
  require('./content'),
  contacts.router,
  info.router,
  location.router,
  skills.router,
];
