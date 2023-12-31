const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // You can add more fields like author, date, etc.
});

module.exports = mongoose.model('Post', postSchema);
