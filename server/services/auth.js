'use strict';
var jwt = require('jwt-simple')
var config = require('../config')

exports.generateToken = function (user) {
  return jwt.encode({
    username: user.username
  }, config.secret)
}
