const router = require( 'express' ).Router();
const Bootcamp = require( '../models/Bootcamp' );
const { authorization, isAdmin } = require( '../middleware/authorization' );
const findAndResponseBootcamps = require( '../middleware/findAndReturnBootcamps' )

router.get( '/mine', authorization, findAndResponseBootcamps );

router.post( '/', authorization, isAdmin, async ( req, res, next ) => {
    try {
        let body;
        if ( req.body.users ) {
            userIds = req.body.users.map( user => user._id )
            body = { ...req.body, userIds, postIds: [] }
        } else body ={ ...req.body, postIds: []  }
        await new Bootcamp( body).save();
        next();
    } catch ( error ) {
        console.log(error);

        res.status( 500 ).send( error )
    }
}, findAndResponseBootcamps );

router.patch( '/:id', authorization, isAdmin, async ( req, res, next ) => {
    try {
        let body;
        if ( req.body.users ) {
            userIds = req.body.users.map( user => user._id )
            body = { ...req.body, userIds }
        } else body = req.body
        await Bootcamp.findByIdAndUpdate( req.params.id, body );
        next();
    } catch ( error ) {
        console.log( error )
        res.status( 500 ).send( error )
    }
}, findAndResponseBootcamps );

router.delete( '/delete/:id', authorization, isAdmin, ( req, res, next ) => {
    Bootcamp.findByIdAndDelete( req.params.id ).then( bootcampDeleted => {
        if ( !bootcampDeleted ) return res.status( 400 ).send( 'bootcamp not found' )
        next();
    } );
}, findAndResponseBootcamps );
module.exports = router;
