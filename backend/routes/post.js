const router = require('express').Router();
const Bootcamp = require('../models/Bootcamp');
const Post = require('../models/Post');
const { authorization } = require('../utils/middleware/authorization')

router.get('/all/:bootcamp_id', authorization, (req, res) => {
    Bootcamp.findById(req.params.bootcamp_id).then(bootcamp => {
        Post.find({_id: bootcamp.posts._id})
        .then(posts => res.status(200).send(posts))
            .catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
    }).catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
})
router.get('/new/:bootcamp_id', authorization, (req, res) => {
    new Post( req.body ).save().then(post => {
        Bootcamp.findByIdAndUpdate(req.params.bootcamp_id,{posts:[..._id,{  _id:post._id}]})
        .then(bootcamp => res.status(200).json({post,message:"Post sucessfully added"})).
        catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
    }).catch(err=>res.status(500).send({err,}))
})
module.exports = router;