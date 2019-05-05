const mongoose = require('mongoose');
 const PostSchema = new mongoose.Schema({
        postType: {
          type: String,
          enum: ['text', 'video', 'activity', 'code'],
          required: true,
        },
        authorId: {
          type: String,
          required: true,
        },
        content: {
          title: String,
          body: String,
          code: String,
          format: String,
          url: String,
        },
  },
  {
    timestamps: true,
  },
);


const PostModel = mongoose.model('post', PostSchema);

module.exports = {PostModel,
  PostSchema};
