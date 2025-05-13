// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: { type: String, required: true },
  event_date: { type: Date, required: true },
  status: {
    type: String,
    enum: ['upcoming', 'attending', 'maybe', 'declined'],
    default: 'upcoming'
  }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
