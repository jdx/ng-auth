'use strict';
var router = require('express').Router()
var User = require('../models/user')
var authSvc = require('../services/auth')
var passwordSvc = require('../services/password')

function userResponse(user) {
  var token = authSvc.generateToken(user)
  return {
    id: user.id,
    username: user.username,
    createdAt: user.createdAt,
    token: token
  }
}

router.get('/user', function (req, res, next) {
  if (req.user) {
    User.findById(req.user.id, function (err, user) {
      if (err) { return next(err) }
      return res.json(userResponse(user))
    })
  }
})

router.post('/user', function (req, res, next) {
  var user = new User({
    username: req.body.username,
    password: req.body.password
  })
  user.save(function (err, user) {
    if (err) { return next(err) }
    res.json(userResponse(user))
  })
})

router.post('/login', function (req, res, next) {
  User.findOne({username: req.body.username})
  .select('password')
  .exec(function (err, user) {
    if (err) { return next(err) }
    if (!user) { return res.send(401) }
    passwordSvc.comparePasswordHash(req.body.password, user.password, function (err, valid) {
      if (err) { return next(err) }
      if (!valid) { return res.send(401) }
      res.json(userResponse(user))
    })
  })
})

router.get('/users/:username', function (req, res, next) {
  User.findOne({username: req.params.username})
  .exec(function (err, user) {
    if (err) { return next(err) }
    res.json(user)
  })
})

module.exports = router
