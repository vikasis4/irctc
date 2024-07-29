const mongoose = require('mongoose');

const Bookings = new mongoose.Schema({
    removed: {
        type: Boolean,
        default: false,
    },
    bookingNumber:{
        type: Number,
        unique: true,
        required: true
    },
    status:{
        type: String,
        required: true,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    },
    train: {
        type: mongoose.Schema.ObjectId,
        ref: 'Train',
        required: true,
        unique: true,
        autopopulate: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
        autopopulate: true
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

Bookings.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Booking', Bookings);