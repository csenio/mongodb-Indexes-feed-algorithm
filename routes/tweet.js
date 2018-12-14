const mongoose = require("mongoose");
var express = require("express");
var router = express.Router();

const Tweet = require("../models/Tweet");
const Comment = require("../models/Comment");
const User = require("../models/User");

function newPost(creator, title, content) {
  User.findOne({ name: creator })
    .then(user => {
      console.log(user);
      const tweet = new Tweet({
        _id: new mongoose.Types.ObjectId(),
        image: content,
        title: title,
        creator: user._id,
        upvotes: 0
      });

      tweet.save(function(err) {
        if (err) return console.log(err);
      });
    })
    .catch(err => console.log(err));
}

function createFeed(user) {
  // Tweet.findOne({ title: "firstTweet" })
  //   .populate("creator")
  //   .exec(function(err, tweet) {
  //     if (err) return handleError(err);
  //     console.log("The creator is %s", tweet.creator._id);
  //     // prints "The author is Ian Fleming"
  //   });
}

module.exports = router;
