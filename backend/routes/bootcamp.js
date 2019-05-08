const router = require( 'express' ).Router();
const Bootcamp = require( '../models/Bootcamp' );
const { authorization, isAdmin } = require( '../utils/middleware/authorization' );
const findAndResponseBootcamps = require( '../utils/middleware/findAndReturnBootcamps' )

router.get( '/mine', authorization, findAndResponseBootcamps );

router.post( '/', authorization, isAdmin, async ( req, res, next ) => {
  try{

    const {
        title,
        description,
        startsAt,
        weeksDuration,
        users
    } = req.body
    // const userIds = users.map( user => user._id ),
    const userIds=[req.user._id]
    await new Bootcamp( {
        title,
        description,
        startsAt,
        weeksDuration,
        userIds,
        posts: []
      } ).save();
    next();
  }catch(error){
    res.status(500).send( error)
  }
}, findAndResponseBootcamps );

router.patch( '/:id', authorization, isAdmin, async ( req, res, next ) => {
  try{
   let body;
   if(req.body.users){
     userIds = req.body.users.map( user => user._id )
    body={...req.body,userIds}
    }else body=req.body
      await Bootcamp.findByIdAndUpdate( req.params.id, body );
      next();
  }catch(error){
    console.log(error)
    res.status(500).send( error)
  }
}, findAndResponseBootcamps );

router.delete( '/delete/:id', authorization, isAdmin, ( req, res, next ) => {
    Bootcamp.findByIdAndDelete( req.params.id ).then( bootcampDeleted => {
        if ( !bootcampDeleted ) return res.status(400).send( 'bootcamp not found' )
        next();
    } );
}, findAndResponseBootcamps );
module.exports = router;
