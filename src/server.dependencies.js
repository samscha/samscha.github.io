const session = require('express-session');

/**
 * all exports that are deps should be using default export
 *
 * e.g.
 * package > index.js
 * `module.exports = dependency`
 *
 * this file
 * `exports.dependency = require('path-to-dependency-dir');`
 */
if (JSON.parse(process.env.DEV)) {
  exports.morgan = require('morgan')('combined');
}

exports.s3 = require('./aws');
exports.bodyParser = require('body-parser');
exports.cors = require('cors');
exports.express = require('express');
exports.fileType = require('file-type');
exports.fs = require('fs');
exports.session = session;
exports.mongoose = require('mongoose');
exports.mongoStore = require('connect-mongo')(session);
exports.multiparty = require('multiparty');
exports.passport = require('./api/passport');
exports.path = require('path');
