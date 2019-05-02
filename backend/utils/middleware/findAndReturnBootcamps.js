const Bootcamp = require( '../../models/Bootcamp' );
const dayjs = require( 'dayjs' );
const findAndResponseBootcamps = async ( req, res ) => {
    try {
        if ( req.user.role === 'admin' ) {
            let bootcamps = await Bootcamp.find( {} )
            return res.status( 200 ).send( bootcamps )
        }
        const bootcamps = await Bootcamp.find( { userIds: req.user._id } )
        res.status( 200 ).send( bootcamps )
    } catch ( error ) {
        console.log( error )
        res.json( { error, message: "Something went wrong, our apologies" } )
    }
};
module.exports = findAndResponseBootcamps
