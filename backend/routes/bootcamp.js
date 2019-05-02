const router = require('express').Router();
const Bootcamp = require('../models/Bootcamp');
const { authorization, isAdmin } = require('../utils/middleware/authorization');
const dayjs=require('dayjs')
const findAndResponseBootcamps=require('../utils/middleware/findAndReturnBootcamps')

router.get('/mine', authorization, findAndResponseBootcamps);

router.post('/',authorization, isAdmin, async(req, res, next) => {
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
