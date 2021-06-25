const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
  });

const Post = mongoose.model('Post', schema);
module.exports = Post

