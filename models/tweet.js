const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  retweets: {
    type: Number,
    required: true,
  },
  discussions: {
    type: Number,
    required: true,
  },
});

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;
