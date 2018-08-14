const passport = require('passport');

const localStrategy = require('./providers/local');
// const twitterStrategy = require('./providers/twitter');

const User = require('../users/model');

passport.use(localStrategy);
// passport.use(twitterStrategy);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
