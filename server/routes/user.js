'use strict';
var User = require('../models/user')
var authService = require('../services/auth')

exports.create = function (req, res, next) {
  var user = new User({
    username: req.body.username,
    password: req.body.password
  })
  user.save(function (err, user) {
    if (err) return next(err)
    var token = authService.generateToken(user)
    res.json({
      username: user.username,
      createdAt: user.createdAt,
      token: token
    })
  })
}
