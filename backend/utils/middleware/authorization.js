const jwt = require( 'jsonwebtoken' );
const { UserModel } = require( '../../models/User' );
const { PostModel } = require( '../../models/Post' );
const Bootcamp = require( '../../models/Bootcamp' );
const password = require( '../../config/password' )
const authorization = async ( req, res, next ) => {
    try {
        const authToken = req.headers.authorization
        const { _id } = jwt.verify( authToken, password.SECRET );

        const user = await UserModel.findOne( {
            _id,
            tokens: {
                $elemMatch: {
                    type: 'auth',
                    token: authToken
                }
            }
        } )
        if ( !user ) throw new Error( 'Invalid User provided by the JWT' )
        req.user = user;
        next();
    } catch ( err ) {
        res.status( 401 ).send( err.message )
    }
}
const isAdmin = async ( req, res, next ) => {
    if ( req.user.role !== 'admin' )return res.status( 401 ).send( 'You are not authorized' )
    next();
}
const isMember = async ( req, res, next ) => {
    /**Should be middleware that checks if the user is a bootcamp member and have the right to post */
    if ( req.user.role === 'admin' ) return next();
    console.log(req.params.bootcamp_id,req.user._id)
    const bootcamp = await Bootcamp.findOne( {
        _id: req.params.bootcamp_id,
        userIds:req.user._id
        });
    if ( !bootcamp ) res.status(401).json( {message:"You are not a member of this bootcamp"} );
    else return next();
}
const isAuthor = async ( req, res, next ) => {
    /**Should be middleware that checks if the user is the post author and have the right to edit the post */
    if ( req.user.role === 'admin' )return  next();
    const Post=PostModel.findOne({
        _id: req.params.post_id,
        authorId: req.user._id
     })
     if(!Post) return res.status(401).send('You are not the author of the post')
     return next();
}

module.exports = {
    authorization,
    isAdmin,
    isMember,
    isAuthor
}
