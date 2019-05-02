const router = require( 'express' ).Router();
const Bootcamp = require( '../models/Bootcamp' );
const { PostModel } = require( '../models/Post' );
const { authorization } = require( '../utils/middleware/authorization' )
const findAndResponseBootcamps = require( '../utils/middleware/findAndReturnBootcamps' )

router.post( '/:bootcamp_id', authorization, async ( req, res, next ) => {
    try {
        req.body.authorId = req.headers.authorization   /* **/
        const post = await new PostModel( req.body ).save() /* Here we save the new post in the Post collection**/
        await Bootcamp.findByIdAndUpdate( req.params.bootcamp_id, { $push: { posts: post } }, { useFindAndModify: false } )
        /* In the line above we update the bootcamp pushing the new post into the array of Posts inside the Bootcamp collection**/
        next()
    } catch ( error ) {
        res.status( 500 ).json( { error, message: "Something went wrong, our apologies" } )
    }
}, findAndResponseBootcamps )
router.patch('/:bootcamp_id//:post_id', authorization, async ( req, res, next ) => {
    try {
        req.body.authorId = req.headers.authorization
        const post = await PostModel.findByIdAndUpdate(req.params.post_id, req.body )/* Here we update the new post in the Post collection**/
        // await Bootcamp.findByIdAndUpdate( req.params.bootcamp_id, { $push: { posts: post } }, { useFindAndModify: false } )
        next()
    } catch ( error ) {
        res.status( 500 ).json( { error, message: "Something went wrong, our apologies" } )
    }
}, findAndResponseBootcamps)
module.exports = router;
