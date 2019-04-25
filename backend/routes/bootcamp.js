const router = require('express').Router();
const Bootcamp=require('../models/Bootcamp')

router.get('/all',(req,res)=>{
    Bootcamp.find({}).then(Bootcamps=>res.send(Bootcamps)).catch(console.log)
})
router.get('/:id',(req,res)=>{
    Bootcamp.findById(req.params.id).then(Bootcamp=>res.send(Bootcamp)).catch(console.log)
})
router.post('/new',(req,res)=>{
    new Bootcamp({
        title:req.body.title
    }).save().then(Bootcamp=>{
        res.send(Bootcamp)
    }).catch(console.log)
})
router.patch('/update/:id',(req,res)=>{
    console.log(req.params.id,req.body.lists)
    Bootcamp.findByIdAndUpdate(req.params.id,{lists:req.body.lists},{new:true}).then(Bootcamp=>res.send(Bootcamp))
})
module.exports = router;