const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
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
  {
    timestamps: true,
  },
);


const Post = mongoose.model('post', PostSchema);

module.exports = Post;
