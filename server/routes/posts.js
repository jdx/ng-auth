'use strict';
var router = require('express').Router()
var Post = require('../models/post')
var User = require('../models/user')

router.get('/posts', function (req, res, next) {
  Post.find()
  .populate('author')
  .sort('-createdAt')
  .exec(function (err, posts) {
    if (err) return next(err)
    res.json(posts)
  })
})

router.get('/users/:username/posts', function (req, res, next) {
  User.findOne({username: req.params.username}, function (err, user) {
    if (err) { return next(err) }
    Post.find({author: user})
    .sort('-createdAt')
    .exec(function (err, posts) {
      if (err) { return next(err) }
      res.json(posts)
    })
  })
})

router.post('/posts', function (req, res, next) {
  var post = new Post({
    author: req.user.id,
    body: req.body.body,
    createdAt: Date.now()
  })
  post.save(function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router
