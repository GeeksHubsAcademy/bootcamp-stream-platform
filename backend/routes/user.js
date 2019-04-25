const router = require('express').Router();
const config = require('../config/password')
const User = require('../models/User');
const Bootcamp=require('../models/Bootcamp')
router.get('/all', (req, res) => {
    User.find({}).then(users => res.send(users)).catch(err => res.status(500).send(err))
})
router.get('/:user_id', (req, res) => {
    User.findById(req.params.user_id).then(userFound => {
        Bootcamp.find({user:{_id:userFound._id}}).then(Bootcamps=>{
            res.status(200).json({userFound,Bootcamps})
        })
    }).catch(err => res.status(500).send(err))
})
module.exports = router;