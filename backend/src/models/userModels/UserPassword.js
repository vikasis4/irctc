const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');

const UserPasswordSchema = new Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true, unique: true },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  resetToken: String,
  emailVerified: {
    type: Boolean,
    default: true,
  },
  authType: {
    type: String,
    default: 'email',
  },
  loggedSessions: {
    type: [String],
    default: [],
  },
});

// generating a hash
UserPasswordSchema.methods.generateHash = function (salt, password) {
  return bcrypt.hashSync(salt + password);
};

UserPasswordSchema.methods.generateSalt = function () {
  return bcrypt.genSaltSync(10);
};

UserPasswordSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  var salt = this.generateSalt();
  this.salt = salt;
  this.password = this.generateHash(salt, this.password);
  next();
});
// checking if password is valid
UserPasswordSchema.methods.validPassword = function (salt, userpassword) {
  return bcrypt.compareSync(salt + userpassword, this.password);
};

module.exports = mongoose.model('UserPassword', UserPasswordSchema);
