const session = require('express-session');

if (JSON.parse(process.env.DEV)) {
  exports.morgan = require('morgan')('combined');
}

exports.bodyParser = require('body-parser');
exports.cors = require('cors');
exports.express = require('express');
exports.session = session;
exports.mongoose = require('mongoose');
exports.mongoStore = require('connect-mongo')(session);
exports.passport = require('./api/passport');
exports.path = require('path');
