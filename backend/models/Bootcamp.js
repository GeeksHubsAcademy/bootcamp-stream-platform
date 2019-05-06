const mongoose = require( 'mongoose' );
const ObjectId = mongoose.Schema.Types.ObjectId;

const BootcampSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        maxlength: 500,
        trim: true,
    },
    startsAt: {
        type: Date,
        // required: true,
    },
    weeksDuration: {
        type: Number,
        // required: true,
    },
    userIds: [ ObjectId ],
    postIds: [ ObjectId ],
}, {
    timestamps: true,
}, );

const Bootcamp = mongoose.model( 'bootcamp', BootcampSchema );

module.exports = Bootcamp;
