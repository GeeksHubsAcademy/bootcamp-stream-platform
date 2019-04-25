const router = require('express').Router();
const Bootcamp=require('../models/Bootcamp')
const {authorization,isAdmin} =require('../utils/middleware/authorization')
router.get('/all',authorization,isAdmin,(req,res)=>{
    Bootcamp.find({}).then(Bootcamps=>res.send(Bootcamps)).catch(console.log)
})
router.get('/:id',(req,res)=>{
    Bootcamp.findById(req.params.id).then(Bootcamp=>res.send(Bootcamp)).catch(console.log)
})
router.post('/new',(req,res)=>{
    new Bootcamp({
        title:req.body.title,
        description:req.body.description,
        startsAt:req.body.startsAt,
        weeksDuration:req.body.weeksDuration,
        users:req.body.users,
        posts:[]
    }).save().then(Bootcamp=>{
        res.send(Bootcamp)
    }).catch(console.log)
})
router.patch('/update/:id',(req,res)=>{
    console.log(req.params.id,req.body)
    Bootcamp.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(Bootcamp=>res.send(Bootcamp))
})
module.exports = router;