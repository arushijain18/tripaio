const mongoose = require("mongoose");
const itinerarySchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  destination: String,
  days: Number,
  people: String,
  budget: String,
  itineraryData: Object,
  coverImage: { type: String, default: null },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Itinerary", itinerarySchema);