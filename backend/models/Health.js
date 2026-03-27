const mongoose = require("mongoose");

const healthSchema = new mongoose.Schema({
  patientId: {
    type: Number,
    required: true,
  },
  heartRate: {
    type: Number,
    required: true
  },
  oxygen: {
    type: Number,
    required: true
  },
  bp: {
    type: String,
    required: true
  },
  alert: {
    type: String,
    default: ""
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Health", healthSchema);