const router = require('express').Router();
const Bootcamp = require('../models/Bootcamp');
const Post = require('../models/Post');
const { authorization } = require('../utils/middleware/authorization')

router.get('/all/:bootcamp_id', authorization, (req, res) => {
    Bootcamp.findById(req.params.bootcamp_id).then(bootcamp => {
        Post.findById({$in:bootcamp.postIds})
        .then(posts => res.status(200).send({posts,bootcamp}))
        .catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
    }).catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
})
router.post('/new/:bootcamp_id', (req, res) => {
    new Post( req.body ).save().then(post => {
        Bootcamp.findByIdAndUpdate(req.params.bootcamp_id,{$push: { postIds:post._id}},{new:true,useFindAndModify:false})
        .then(bootcamp =>{
            Post.find({_id:{$in:bootcamp.postIds}}).then(posts=>
                res.status(200).json({bootcamp,posts,message:"Post sucessfully added"}))
            }).
        catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
    }).catch(console.log)
})
module.exports = router;