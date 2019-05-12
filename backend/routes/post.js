const router = require( 'express' ).Router();
const Bootcamp = require( '../models/Bootcamp' );
const { PostModel } = require( '../models/Post' );
const { authorization, isMember, isAuthor } = require( '../utils/middleware/authorization' );
const findAndResponseBootcamps = require( '../utils/middleware/findAndReturnBootcamps' );
const ObjectId = require( 'mongodb' ).ObjectID
router.post( '/:bootcamp_id', authorization, isMember, async ( req, res, next ) => {
    try {
        const newPost = {
          ...req.body,
          authorId:req.user._id,
          keywords:['#'+req.body.postType]
        };
        const post = await new PostModel( newPost).save() /* Here we save the new post in the Post collection**/
        await Bootcamp.findByIdAndUpdate( req.params.bootcamp_id, { $push: { postIds: post._id } }, { useFindAndModify: false } )
        /* In the line above we update the bootcamp pushing the new post into the array of Posts inside the Bootcamp collection**/
        next();
    } catch ( error ) {
        res.status(400).json(error);
    }
}, findAndResponseBootcamps );
router.patch( '/:post_id', authorization, isAuthor, async ( req, res, next ) => {
    try {
        await PostModel.findByIdAndUpdate( req.params.post_id, req.body, { useFindAndModify: false, new: true } );
        next();
    } catch ( error ) {
        res.status( 500 ).json( { error, message: "Something went wrong, our apologies" } );
    }
}, findAndResponseBootcamps );
router.delete( '/:post_id', authorization, isAuthor, async ( req, res, next ) => {
    try {
        await Bootcamp.findOneAndUpdate( {
            postIds: ObjectId( req.params.post_id )
        }, { $pull: { postIds: req.params.post_id } }, { useFindAndModify: false } );
        /* Here we Delete the post Id in the Bootcamp collection**/
        await PostModel.findByIdAndDelete( req.params.post_id )
        /* Here we Delete the new post in the Post collection**/
        next();
    } catch ( error ) {
        res.status( 500 ).json( { error, message: "Something went wrong, our apologies" } );
    }
}, findAndResponseBootcamps );

router.patch( '/reactions/add/:post_id', authorization, isMember, async ( req, res, next ) => {
    try {
        await PostModel.findByIdAndUpdate( req.params.post_id, { reactions: {
                $push: {  [ req.body.reactionType ]: req.user._id } } }, { useFindAndModify: false } );
        next();
    } catch ( error ) {
        res.status( 500 ).json( { error, message: "Something went wrong, our apologies" } );
    }
}, findAndResponseBootcamps );
module.exports = router;
