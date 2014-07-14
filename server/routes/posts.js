'use strict';
var router = require('express').Router()
var Post = require('../models/post')

router.get('/posts', function (req, res, next) {
  Post.find()
  .populate('author')
  .sort('-createdAt')
  .exec(function (err, posts) {
    if (err) return next(err)
    res.json(posts)
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
