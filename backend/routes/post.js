const router = require( 'express' ).Router();
const Bootcamp = require( '../models/Bootcamp' );
const { PostModel } = require( '../models/Post' );
const { authorization, isMember } = require( '../utils/middleware/authorization' );
const findAndResponseBootcamps = require( '../utils/middleware/findAndReturnBootcamps' );

router.post( '/:bootcamp_id', authorization,isMember, async ( req, res, next ) => {
    try {
        req.body.authorId = req.user._id   /* **/
        const post = await new PostModel( req.body ).save() /* Here we save the new post in the Post collection**/
        await Bootcamp.findByIdAndUpdate( req.params.bootcamp_id, { $push: { postIds: post._id } }, { useFindAndModify: false } )
        /* In the line above we update the bootcamp pushing the new post into the array of Posts inside the Bootcamp collection**/
        next()
    } catch ( error ) {
        res.status( 500 ).json( { error, message: "Something went wrong, our apologies" } )
    }
}, findAndResponseBootcamps );
router.patch('/:bootcamp_id/:post_id', authorization, async ( req, res, next ) => {
    try {
        await PostModel.findByIdAndUpdate(req.params.post_id, req.body, { useFindAndModify: false, new:true }  )
        /* Here we update the post in the Post collection**/
    next()
    } catch ( error ) {
        console.log(error)
        res.status( 500 ).json( { error, message: "Something went wrong, our apologies" } )
    }
}, findAndResponseBootcamps);
router.delete('/:bootcamp_id/:post_id', authorization, async ( req, res, next ) => {
    try {
        await Bootcamp.findByIdAndUpdate( req.params.bootcamp_id, { $pull: { postIds:req.params.post_id} }, { useFindAndModify: false } )
        /* Here we Delete the post Id in the Bootcamp collection**/
        await PostModel.findByIdAndDelete(req.params.post_id)
        /* Here we Delete the new post in the Post collection**/
       next()
    } catch ( error ) {
        console.log(error)
        res.status( 500 ).json( { error, message: "Something went wrong, our apologies" } )
    }
}, findAndResponseBootcamps);
module.exports = router;
