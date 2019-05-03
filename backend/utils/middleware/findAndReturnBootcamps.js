const Bootcamp = require( '../../models/Bootcamp' );
const findAndResponseBootcamps = async ( req, res ) => {
    try {
        if ( req.user.role === 'admin' ) {
            let bootcamps = await Bootcamp.aggregate([ {
                $lookup:
                  {
                    from: 'users',
                    localField: 'userIds',
                    foreignField: '_id',
                    as: 'users'
                  }
             } ])
            return res.status( 200 ).send( bootcamps )
        }
        const bootcamps = await Bootcamp.aggregate( [
            { 
                $match: { userIds: ObjectId("5cc6ca23771c3019dc38a521") }
            }, {
                $lookup:
                  {
                    from: 'users',
                    localField: 'userIds',
                    foreignField: '_id',
                    as: 'users'
                  }
             }]  )

        res.status( 200 ).send( bootcamps )
    } catch ( error ) {
        console.log( error )
        res.json( { error, message: "Something went wrong, our apologies" } )
    }
};
module.exports = findAndResponseBootcamps
