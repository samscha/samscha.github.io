const mongoose = require('mongoose');
const { Schema } = mongoose;

const bcrypt = require('bcryptjs');

// const Job = require('../../jobs/model');

const UserSchema = new Schema(
  {
    email: { type: String, lowercase: true, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }],
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', function(next) {
  const user = this;
  const SALT_FACTOR = process.env.SALT || 11;

  if (!Number.isInteger(+SALT_FACTOR))
    return next({ err: `SALT_FACTOR (${SALT_FACTOR}) is not a number` });

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(+SALT_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;

      return next();
    });
  });
});

UserSchema.statics.getAllUsers = function(cb) {
  User.find({}, (err, user) => {
    if (err) return cb({ err });

    cb(users);
  });
};

UserSchema.methods.comparePassword = function(pwd, cb) {
  bcrypt.compare(pwd, this.password, (err, isMatch) => {
    if (err) return cb(err);

    return cb(null, isMatch);
  });
};

module.exports = mongoose.model(`User`, UserSchema);
