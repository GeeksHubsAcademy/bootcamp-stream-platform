const router = require('express').Router();
const Bootcamp = require('../models/Bootcamp');
const {PostModel} = require('../models/Post');
const { authorization } = require('../utils/middleware/authorization')

router.get('/all/:bootcamp_id', authorization, (req, res) => {
    Bootcamp.findById(req.params.bootcamp_id).then(bootcamp => {
        PostModel.findById({$in:bootcamp.postIds})
        .then(posts => res.status(200).send({posts,bootcamp}))
        .catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
    }).catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
})
router.post('/new/:bootcamp_id',authorization, async(req, res) => {
    try{
    req.body.authorId=req.headers.authorization
    const post= await new PostModel( req.body ).save()
    await Bootcamp.findByIdAndUpdate(req.params.bootcamp_id,{$push: { posts:post}},{new:true,useFindAndModify:false})
    let bootcamps = await Bootcamp.find({ userIds:req.user._id})
    console.log(bootcamps)
        res.status(200).json({bootcamps,message:"Post sucessfully added"})
    }catch(err){
        console.log(err)
        res.status(500).json({err,message:"Something went wrong, our apologies"})
    }
            // Post.find({_id:{$in:bootcamp.postIds}}).then(posts=>{
            //     const bootcamps=[]
            //     res.status(200).json({bootcamp,message:"Post sucessfully added"})
            //     })
})
module.exports = router;