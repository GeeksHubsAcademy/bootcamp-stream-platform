const Bootcamp = require( '../models/Bootcamp' );
const lookupUsersByUserIdsFromBootcamps = [ {
        $lookup: {
            from: 'users',
            localField: 'userIds',
            foreignField: '_id',
            as: 'users'
        }
    },
    {
        $lookup: {
            from: 'posts',
            localField: 'postIds',
            foreignField: '_id',
            as: 'posts'
        }
    },
    {
        $project: {
            users: {
                password: false,
                tokens: false,
                __v: false
            },

            posts: {
                __v: false
            }
        }

    },
]
const findAndResponseBootcamps = async ( req, res ) => {
    try {
        if ( req.user.role === 'admin' ) {
            let bootcamps = await Bootcamp.aggregate( [ ...lookupUsersByUserIdsFromBootcamps ] )
            return res.status( 200 ).send( bootcamps )
        }
        const bootcamps = await Bootcamp.aggregate( [ {
            $match: { userIds: req.user._id }
        }, ...lookupUsersByUserIdsFromBootcamps ] )
        res.status( 200 ).send( bootcamps )
    } catch ( error ) {
        console.log( error )
        res.json( { error, message: "Something went wrong, our apologies" } )
    }
};
module.exports = findAndResponseBootcamps
