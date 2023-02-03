const location = require('./location');
const skills = require('./skills');

module.exports = [
  require('./root'),
  require('./content'),
  location.router,
  skills.router,
];
