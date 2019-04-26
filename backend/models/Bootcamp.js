const mongoose = require('mongoose');
const BootcampSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    description: {
      type: String,
      maxlength: 500,
      trim: true,
    },
    startsAt: {
      type: Date,
      // required: true,
    },
    weeksDuration: {
      type: Number,
      // required: true,
    },
    users: [
      {
        _id: {
          // user._id  // check type in db
          type: String,
        },
      },
    ],
    posts: [
      {
        postType: {
          type: String,
          enum: ['text', 'video', 'activity', 'snippet'],
          required: true,
        },
        authorId: {
          type: String,
          required: true,
        },
        content: {
          type: Object,
          required: true,
          enum: [
            {
              snippet: {
                title: String,
                code: String,
                format: String,
              },
            },
            {
              text: {
                title: String,
                body: String,
              },
            },
            {
              video: {
                title: String,
                body: String,
                url: String,
              },
            },
            {
              activity: {
                title: String,
                body: String,
                repo: String,
              },
            },
          ],
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);


const Bootcamp = mongoose.model('bootcamp', BootcampSchema);

module.exports = Bootcamp;
