'use strict';
var jwt = require('jwt-simple')
var config = require('../config')

exports.generateToken = function (user) {
  return jwt.encode({
    id: user.id,
    username: user.username
  }, config.secret)
}

exports.decryptToken = function (token) {
  return jwt.decode(token, config.secret)
}
