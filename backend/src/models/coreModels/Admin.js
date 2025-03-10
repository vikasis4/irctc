const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  removed: {
    type: Boolean,
    default: true,
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
    default: 'ChartAdmin',
    enum: ['ChartAdmin'],
  },
});

module.exports = mongoose.model('Admin', adminSchema);
