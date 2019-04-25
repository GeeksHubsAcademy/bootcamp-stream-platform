const router = require('express').Router();
const config = require('../config/password')
const User = require('../models/User');
router.get('/all', (req, res) => {
    User.find({}).then(users => res.send(users)).catch(err => res.status(500).send(err))
})
router.get('/:user_id', (req, res) => {
    User.findById(req.params.user_id).then(user => res.send(user)).catch(err => res.status(500).send(err))
})
module.exports = router;