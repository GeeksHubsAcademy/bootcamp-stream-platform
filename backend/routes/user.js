const router = require('express').Router();
const config = require('../config/password')
const User = require('../models/User');
const Bootcamp = require('../models/Bootcamp')
const bcrypt = require('bcrypt');
const {authorization, isAdmin} =require('../utils/middleware/authorization')

router.get('/find/:user_id', async (req, res) => {
    try{

    }catch(e){
        
    }
    User.findById(req.params.user_id).then(userFound => {
        Bootcamp.find({
            user: {
                _id: userFound._id
            }
        }).then(Bootcamps => {
            res.status(200).json({
                userFound,
                Bootcamps
            })
        })
    }).catch(err => res.status(500).send(err))
})

router.get('/all',authorization,isAdmin, (req, res) => {
    User.find({}).then(users => res.send(users)).catch(err => res.status(500).send(err))
})
router.post('/register', (req, res) => {
    // jwt.sign({                     /* This will be added when the confirmed email property will be created at the User schema */
    //     user: req.body.email
    // }, config.EMAIL_SECRET, {
    //     expiresIn: '2d'
    // }, (err, emailToken) => {
    //     if (err) return res.send(err)
    //     const url = `http://localhost:3001/user/confirmation/${emailToken}`
    //     transporter.sendMail({
    //         to: req.body.email,
    //         subject: 'Confirm your email in my Trello-MERN Full Stack app.',
    //         html: `<h3>Please click the following link to confirm your email:<br>
    //             <a href="${url}">Click here to confirm your email</a><br>
    //                 The link above will expire in 48 hours.</h3> `
    //     }).then(()=>{
    new User({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }).save().then(user => {
        res.send({
            user,
            'info': 'user succesfully created'
        })
    }).catch(err => {
        res.send({
            err,
            'error': 'Email already in use, please choose another email'
        })
    })
    // }).catch(console.log)
    // })
});

router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then((userFound) => {
        if (!userFound) {
            return res.status(401).send({
                message: 'Email or password wrong'
            });
        }
        // if(!userFound.confirmed) {       /* This will be added when the confirmed email property will be created at the User schema */
        //     return res.send('error','Email or password wrong'); 
        // }
        bcrypt.compare(req.body.password, userFound.password).then(isMatch => {
            if (!isMatch) {
                return res.status(401).send({
                    message: 'Email or password wrong'
                });
            }
            userFound.generateAuthToken().then(token => {
                const {_id, name, lastname, email, imagePath}=userFound
                userFound.token=token;
                res.status(200).send({_id, name, lastname, email, imagePath, token})
            }).catch(err=>res.status(500).send(err))
        }).catch(err=>res.status(500).send(err))
    })
});

router.get('/logout',authorization, (req, res) => {
    const tokens=req.user.tokens.filter(token=>token.type!=='auth')
    User.findByIdAndUpdate(req.user._id,{$set:{tokens}},{upsert:true})
    .then(()=>res.status(200).json({message:'You have been sucessfully logged out'}))
    .catch(err=>res.status(500).send(err))
  });
module.exports = router;