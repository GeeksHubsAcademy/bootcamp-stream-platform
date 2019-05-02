const router = require('express').Router();
const Bootcamp = require('../models/Bootcamp');
const { authorization, isAdmin } = require('../utils/middleware/authorization');

const findAndResponseBootcamps=async(req, res) => {
  try{
    if (req.user.role === 'admin') {
    const bootcamps = await Bootcamp.find({})
    return res.status(200).send(bootcamps)
  }
   const bootcamps = await Bootcamp.find({ userIds:req.user._id})
        res.status(200).send(bootcamps)
  }catch(err){
    res.json({err,message:"Something went wrong, our apologies"})
  }
};

router.get('/mine', authorization, findAndResponseBootcamps);

router.post('/new',authorization, isAdmin, async(req, res, next) => {
  await new Bootcamp(req.body).save();
  next();
},findAndResponseBootcamps);

router.patch('/:id',authorization, isAdmin, async (req, res, next) => {
  await Bootcamp.findByIdAndUpdate(req.params.id, req.body);
  next();
},findAndResponseBootcamps );

router.patch('/unsubscribed/:id',authorization, (req, res, next) => {
  Bootcamp.findByIdAndUpdate(req.params.id,{$pull: { users:req.user._id}}).then(bootcamp =>{
    if(!bootcamp)return res.send('bootcamp not found')
    next();
  })
},findAndResponseBootcamps);

router.delete('/delete/:id',authorization,isAdmin, (req, res,next) => {
  Bootcamp.findByIdAndDelete(req.params.id).then(bootcampDeleted =>{
    if(!bootcampDeleted)return res.send('bootcamp not found')
    next();
  });
},findAndResponseBootcamps);
module.exports = router;
