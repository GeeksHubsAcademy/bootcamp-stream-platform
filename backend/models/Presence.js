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
      accuracy: {
        type: Number,
        required: true,
      },
    },
    registeredMilliseconds: {
      type: Number,
      default: 0,
      //   required: true,
    },
  },
  {
    timestamps: true,
  },
);

const DELTA_DISTANCE = 1; // TODO FIX THIS VALUE
const DELTA_TIME = 1000 * 60 * 16  ; // 16MIN

PresenceSchema.methods.isNear = function(coords, accuracyGap = DELTA_DISTANCE) {
  const from = this.location;
  const delta = {
    latitude: from.latitude - coords.latitude,
    longitude: from.longitude - coords.longitude,
  };
  const absModule = Math.sqrt(delta.latitude ** 2 + delta.longitude ** 2);
  console.log('isNear absModule:', absModule);

  return absModule <= accuracyGap;
};

PresenceSchema.methods.elapsedTime = function() {
  const from = new Date(this.updatedAt);
  const to = new Date();
  const delta = to.getTime() - from.getTime();
  console.log('elapsedTime delta:', delta);

  return delta;
};

PresenceSchema.statics.findLast = function(userId) {
  return this.findOne({ userId }, {}, { sort: { updatedAt: -1 } }).exec();
};

PresenceSchema.statics.newRecord = async function(location, userId) {
  let lastRecord = await this.findLast(userId);

  if (
    lastRecord &&
    lastRecord.elapsedTime() <= DELTA_TIME &&
    lastRecord.isNear(location)
  ) {
    console.log('updated precense document ' + lastRecord._id);
    const elapsedTime = lastRecord.elapsedTime();
    lastRecord.registeredMilliseconds += elapsedTime;
    return lastRecord.save();
  } else {
    console.log('new precense document ');
    return new PresenceModel({ location, userId }).save();
  }
};

var PresenceModel = mongoose.model('presence', PresenceSchema);

module.exports = PresenceModel;
