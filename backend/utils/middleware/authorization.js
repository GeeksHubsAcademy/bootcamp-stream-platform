const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const password = require('../../config/password')
const authorization = async (req, res, next) => {
    try {
        const authToken = req.headers.authorization
        const { _id } = jwt.verify(authToken, password.SECRET);
        const user = await User.findOne({
            _id,
            tokens: {
                $elemMatch: {
                    type: 'auth',
                    token: authToken
                }
            }
        })
        if (!user) throw new Error('Invalid User')
        req.user = user;
        next();
    } catch (err) {
        res.status(401).send(err.message)
    }
}
const isOwner = async (req, res, next) => {
    if (req.params.user_id !== req.user._id.toHexString()) {
        return res.status(403).send('You are not authorized')
    }
    next();
}
const isAdmin = async (req, res, next) => {
    if (req.user.role!=='admin') {
        return res.status(401).send('You are not authorized')
    }
    next();
}
module.exports = {
    authorization,
    isOwner,
    isAdmin
}