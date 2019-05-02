const router = require('express').Router();
const {UserModel} = require('../models/User');
const bcrypt = require('bcrypt');
const uploadProfilePics=require('../config/multer')
const {authorization, isAdmin} =require('../utils/middleware/authorization')

router.get('/all',authorization,isAdmin, (req, res) => {
    UserModel.find({}).then(users => res.send(users)).catch(error => res.status(500).send(error))
})
router.post('/', (req, res) => {
    // jwt.sign({                     /* This will be added when the confirmed email property will be created at the User schema */
    //     user: req.body.email
    // }, config.EMAIL_SECRET, {
    //     expiresIn: '2d'
    // }, (error, emailToken) => {
    //     if (error) return res.send(error)
    //     const url = `http://localhost:3001/user/confirmation/${emailToken}`
    //     transporter.sendMail({
    //         to: req.body.email,
    //         subject: 'Confirm your email in the bootcamp stream Full Stack app.',
    //         html: `<h3>Please click the following link to confirm your email:<br>
    //             <a href="${url}">Click here to confirm your email</a><br>
    //                 The link above will expire in 48 hours.</h3> `
    //     }).then(()=>{
        req.body.role='student'
    new UserModel(req.body).save().then(user => {
        res.status(200).send({ user, 'info': 'user successfully created' })
    }).catch(error =>res.status(400).send( error))
    // }).catch(console.log)
    // })
});

router.post('/login', (req, res) => {
    UserModel.findOne({
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
                res.status(200).send({_id, name, lastname, email, imagePath, token})
            }).catch(error=>res.status(500).json({error,message:"Something went wrong, our apologies"}))
        }).catch(error=>res.status(500).json({error,message:"Something went wrong, our apologies"}))
    })
});

router.patch('/',authorization,uploadProfilePics.single('image'), async(req, res) => {
    req.body.role=req.user.role
    try{
        if(req.file) req.body.imagePath=req.file.filename
        if(req.body.password){
            const hash = await bcrypt.hash(req.body.password, 9);
            req.body.password = hash;
        }
        const { _id, name, lastname, email, imagePath }= await UserModel.findByIdAndUpdate(req.user._id,req.body, { new: true, useFindAndModify:false})
        res.send({ _id, name, lastname, email, imagePath })
    }catch(error){
        res.status(500).json({error,message:"Something went wrong, our apologies"})
    }
  });
  
router.get('/logout',authorization, (req, res) => {
    const tokens=req.user.tokens.filter(token=>token.type!=='auth')
    UserModel.findByIdAndUpdate(req.user._id,{$set:{tokens}},{upsert:true})
    .then(()=>res.status(200).json({message:'You have been successfully logged out'}))
    .catch(error=>res.status(500).json({error,message:"Something went wrong, our apologies"}))
  });
router.delete('/delete/',authorization, (req, res) => {
    UserModel.findByIdAndDelete(req.user._id).then((userDeleted) =>{
     if(!userDeleted)return res.status(400).send("User not found")
     res.status(200).send({userDeleted,message:"User successfully deleted"});
 }).catch(error=>res.status(500).json({error,message:"Something went wrong, our apologies"}))
});
router.delete('/delete/byAdmin/:id',authorization,isAdmin, (req,res)=>{
    UserModel.findByIdAndDelete(req.params.id).then((userDeleted) =>{
        if(!userDeleted)return res.status(400).send("User not found")
              res.status(200).send({userDeleted,message:"User successfully deleted"});
    }).catch(error=>res.status(500).json({error,message:"Something went wrong, our apologies"}))
});
module.exports = router;