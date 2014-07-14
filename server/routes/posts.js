var Post = require('../models/post')

exports.list = function (req, res, next) {
  Post.find()
  .sort('-createdAt')
  .exec(function (err, posts) {
    if (err) return next(err)
    res.json(posts)
  })
}

exports.create = function (req, res, next) {
  var post = new Post({
    body: req.body.body,
    createdAt: Date.now()
  })
  post.save(function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
}
