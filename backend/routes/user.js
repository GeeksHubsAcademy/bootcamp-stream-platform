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
router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(userFound => {
        if (!userFound) {
            return res.send({message:'Email or password wrong'});
        }
        // if(!userFound.confirmed) {       /* This will be added when the confirmed email property will be created at the User schema */
        //     return res.send('error','Email or password wrong'); 
        // }
        bcrypt.compare(req.body.password, userFound.password).then(isMatch => {
            if (!isMatch){
                return res.status(400).send({message:'Email or password wrong'});
            }
            userFound.generateAuthToken().then(token=>{
                res.header('Authorization',token).send(userFound)
            }).catch(console.log)
        }).catch(console.log)
    })
});
module.exports = router;