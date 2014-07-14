'use strict';
var authSvc = require('../services/auth')

module.exports = function (req, res, next) {
  if (req.headers['x-auth']) {
    req.user = authSvc.decryptToken(req.headers['x-auth'])
  }
  next()
}

module.exports.force = function (req, res, next) {
  if (!req.user) {
    return res.send(401)
  }
  next()
}
