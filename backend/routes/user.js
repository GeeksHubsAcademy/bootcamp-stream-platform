const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const uploadProfilePics=require('../config/multer')
const {authorization, isAdmin} =require('../utils/middleware/authorization')

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
        req.body.role='student'
    new User(req.body).save().then(user => {
        res.status(200).send({ user, 'info': 'user succesfully created' })
    }).catch(err =>res.status(400).send({ err, 'error': 'Email already in use, please choose another email' }))
    // }).catch(console.log)
    // })
});

router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then((userFound) => {
        if (!userFound) {
            return res.status(401).send({ message: 'Email or password wrong'}); /*Email Wrong */ 
        }
        // if(!userFound.confirmed) {       /* This will be added when the confirmed email property will be created at the User schema */
        //     return res.send('error','Email or password wrong'); 
        // }
        bcrypt.compare(req.body.password, userFound.password).then(isMatch => {
            if (!isMatch)return res.status(401).send({ message: 'Email or password wrong' }); /*Password Wrong */ 
            userFound.generateAuthToken().then(token => {
                const {_id, name, lastname, email, imagePath}=userFound
                userFound.token=token;
                res.status(200).send({_id, name, lastname, email, imagePath, token})
            }).catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
        }).catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
    })
});

router.patch('/update/',authorization,uploadProfilePics.single('image'), async(req, res) => {
    req.body.role=req.user.role
    try{
        if(req.file) req.body.imagePath=req.file.filename
        if(req.body.password){
            const hash = await bcrypt.hash(req.body.password, 9);
            req.body.password = hash;
        }
        const { _id, name, lastname, email, imagePath }= await User.findByIdAndUpdate(req.user._id,req.body, { new: true, useFindAndModify:false})
        res.send({ _id, name, lastname, email, imagePath })
    }catch(err){
        res.status(500).json({err,message:"Something went wrong, our apologies"})
    }
  });
  
router.get('/logout',authorization, (req, res) => {
    const tokens=req.user.tokens.filter(token=>token.type!=='auth')
    User.findByIdAndUpdate(req.user._id,{$set:{tokens}},{upsert:true})
    .then(()=>res.status(200).json({message:'You have been sucessfully logged out'}))
    .catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
  });
router.delete('/delete/',authorization, (req, res) => {
 User.findByIdAndDelete(req.user._id).then((userDeleted) =>{
     if(!userDeleted)return res.status(400).send("User not found")
     res.status(200).send({userDeleted,message:"User successfully deleted"});
 }).catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
});
router.delete('/delete/byAdmin/:id',authorization,isAdmin, (req,res)=>{
    User.findByIdAndDelete(req.params.id).then((userDeleted) =>{
        if(!userDeleted)return res.status(400).send("User not found")
              res.status(200).send({userDeleted,message:"User successfully deleted"});
    }).catch(err=>res.status(500).json({err,message:"Something went wrong, our apologies"}))
});
module.exports = router;