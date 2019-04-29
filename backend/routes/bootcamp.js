const router = require('express').Router();
const Bootcamp = require('../models/Bootcamp');
const { authorization, isAdmin } = require('../utils/middleware/authorization');
router.get('/mine', authorization, (req, res) => {
  if (req.user.role === 'admin') return Bootcamp.find({})
    .then(bootcamps => res.send(bootcamps))
      .catch(res.send);

  Bootcamp.find({ user: { _id: req.user._id } })
    .then(bootcamps => res.status(200).send(bootcamps))
    .catch(res.send);
});
router.post('/new',authorization, isAdmin, (req, res) => {
  new Bootcamp({
    title: req.body.title,
    description: req.body.description,
    startsAt: req.body.startsAt,
    weeksDuration: req.body.weeksDuration,
    users: req.body.users,
    posts: [],
  }).save().then(Bootcamp =>res.send(Bootcamp))
  .catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
});
router.patch('/update/:id',authorization, isAdmin, (req, res) => {
  Bootcamp.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(bootcamp =>{
    if(!bootcamp)return res.send('bootcamp not found')
    res.send({bootcamp, message: "The bootcamp has been sucessfully updated"})})
  .catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
});
router.patch('/unsuscribe/:id',authorization, (req, res) => {
  Bootcamp.findByIdAndUpdate(req.params.id, {users:users.filter(user=>user._id!==req.user._id)}, { new: true }).then(bootcamp =>{
    if(!bootcamp)return res.send('bootcamp not found')
    res.send({bootcamp, message: "You have been sucessfully unsuscribed"})})
  .catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
});
router.delete('/delete/:id',authorization,isAdmin, (req, res) => {
  Bootcamp.findByIdAndDelete(req.params.id).then(bootcampDeleted =>{
    if(!bootcampDeleted)return res.send('bootcamp not found')
    res.send(bootcampDeleted)})
  .catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
});
module.exports = router;
