const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchmea = new Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  name: { type: String, required: true },
  created: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user'],
  },
});

module.exports = mongoose.model('User', userSchmea);
