const mongoose = require("mongoose");

const zoneSchema = new mongoose.Schema({ 
  name: String,
  type: String,
  coordinates: Number,
  capacity: Number,
  eventId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Event"
}
});

const Zone = mongoose.model("Zone", zoneSchema);

module.exports = Zone;