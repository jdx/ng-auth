'use strict';
var bcrypt = require('bcrypt')

exports.generatePasswordHash = function (password, callback) {
  bcrypt.hash(password, 8, callback)
}

exports.comparePasswordHash = function (password, hash, callback) {
  bcrypt.compare(password, hash, callback)
}
