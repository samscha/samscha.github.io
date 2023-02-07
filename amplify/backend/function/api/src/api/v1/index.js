const contacts = require('./contacts');
const location = require('./location');
const skills = require('./skills');

module.exports = [
  require('./root'),
  require('./content'),
  contacts.router,
  location.router,
  skills.router,
];
