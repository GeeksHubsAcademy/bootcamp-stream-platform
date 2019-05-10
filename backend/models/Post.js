const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
 const PostSchema = new mongoose.Schema({
        postType: {
          type: String,
          enum: ['text', 'video', 'activity', 'code','link'],
          required: true,
        },
        authorId: {
          type: ObjectId,
          required: true,
        },
        content: {
          title: String,
          body: String,
          code: String,
          format: String,
          url: String,
        },
        keywords:[String],
        reactions:{
          Likes:[ObjectId],
          Loves:[ObjectId],
          Hahas:[ObjectId],
          Wow:[ObjectId],
        },
  },
  {
    timestamps: true,
  },
);


const PostModel = mongoose.model('post', PostSchema);

module.exports = {PostModel,
  PostSchema};
