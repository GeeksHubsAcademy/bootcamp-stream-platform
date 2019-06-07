const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const PresenceSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      required: true,
    },
    location: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
    registeredMilliseconds: {
      type: Number,
      //   required: true,
    },
  },
  {
    timestamps: true,
  },
);

const PresenceModel = mongoose.model('presence', PresenceSchema);

module.exports = PresenceModel;
