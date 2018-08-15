const {
  bodyParser,
  cors,
  express,
  session,
  mongoose,
  mongoStore,
  passport,
  path,
} = require('./server.dependencies');

let devConfig, config;

if (JSON.parse(process.env.DEV)) {
  devConfig = [require('./server.dependencies').morgan];
}

config = [
  /**
   * parser
   */
  express.json(),

  /**
   * check db connection on every request
   * it is important to check this before using session
   * because session is stored in db
   */
  require('./api/utils/check').dbConnection,

  /**
   * cors
   */
  cors(JSON.parse(process.env.CORS_OPTIONS)),

  /**
   * static files for frontend
   */
  express.static(path.join(__dirname, 'client/build')),

  /**
   * `passport` requirements
   * and `session` requirements for `passport`
   *
   * http://www.passportjs.org/docs/configure/
   *
   */
  express.static('public'),
  session({
    ...JSON.parse(process.env.SESSION_OPTIONS),
    cookie: { secure: JSON.parse(process.env.PROD) },
    secret: process.env.SESSION_SECRET,
    store: new mongoStore({
      mongooseConnection: mongoose.connection,
    }),
  }),
  bodyParser.urlencoded({ extended: false }),
  passport.initialize(),
  passport.session(),
];

module.exports = config.concat(devConfig || []);
