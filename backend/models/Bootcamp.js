const mongoose = require( 'mongoose' );
const { PostSchema } = require( './Post' )
const { UserSchema } = require( './User' )
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
<<<<<<< HEAD
    userIds: [ String ],
    postIds: [ String ],
=======
    users: [ String ],
    posts: [ PostSchema ],
>>>>>>> 559888d45f866c1d4c51423db4221e78c9c53b60
}, {
    timestamps: true,
}, );

const Bootcamp = mongoose.model( 'bootcamp', BootcampSchema );

module.exports = Bootcamp;
