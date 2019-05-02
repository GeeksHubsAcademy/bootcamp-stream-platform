const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const SALT_I = 9;
const jwt = require('jsonwebtoken');
const password = require('../config/password');

const PASS = password.SECRET;
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 50,
      trim: true,
      required: true,
    },
    lastname: {
      type: String,
      maxlength: 50,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: function(email) {
        return new Promise(function(resolve) {
          setTimeout(function() {
            resolve(isEmail(email));
          }, 5);
        });
      },
      message: 'the {VALUE} entered is not a valid email.',
    },
    // confirmed: {
    //   type: Boolean,
    //   defaultValue: false,
    // },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    imagePath: {
      type: String
    },
    role: {
      type: String,
      enum: ['admin', 'student'],
      default: 'student'
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

UserSchema.methods.toJSON = function() {
  const { _id, name, lastname, email, imagePath } = this;
  return { _id, name, lastname, email, imagePath };
};

UserSchema.pre('save', function(next) {
  const user = this;
  if (user.isModified('password'))bcrypt.hash(user.password, SALT_I)
    .then(hash => {
            user.password = hash;
            return next();
          }).catch(err => next(err))
 else next();
});

UserSchema.methods.generateAuthToken = function() {
  const user = this;
  const payload = {
    _id: user._id,
    iat: Date.now() / 1000,
    exp: Date.now() / 1000 + 60 * 60 * 24 * 7, // will expire in 7 days
  };
  const token = jwt.sign(payload, PASS);
  user.tokens.push({
    token,
    type: 'auth',
  });
  return user.save().then(() => token);
};

const UserModel = mongoose.model('user', UserSchema);

module.exports = {UserModel,
  UserSchema};