const mongoose = require('mongoose');

const Train = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  trainName: {
    type: String,
    unique: true,
    required: true
  },
  trainNumber: {
    type: Number,
    unique: true,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  departureTime: {
    type: Date,
    allowNull: true
  },
  arrivalTime: {
    type: Date,
    allowNull: true
  },
  totalSeats: {
    type: Number,
    required: true
  },
  availableSeats: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Train', Train);
