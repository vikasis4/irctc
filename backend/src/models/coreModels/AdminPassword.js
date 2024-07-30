const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');

const AdminPasswordSchema = new Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  user: { type: mongoose.Schema.ObjectId, ref: 'Admin', required: true, unique: true },
  password: {
    type: String,
  },
  salt: {
    type: String,
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
AdminPasswordSchema.methods.generateHash = function (salt, password) {
  return bcrypt.hashSync(salt + password);
};

AdminPasswordSchema.methods.generateSalt = function () {
  return bcrypt.genSaltSync(10);
};

AdminPasswordSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  var salt = this.generateSalt();
  this.salt = salt;
  this.password = this.generateHash(salt, this.password);
  next();
});
// checking if password is valid
AdminPasswordSchema.methods.validPassword = function (salt, userpassword) {
  return bcrypt.compareSync(salt + userpassword, this.password);
};

module.exports = mongoose.model('AdminPassword', AdminPasswordSchema);
