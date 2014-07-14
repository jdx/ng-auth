'use strict';
var bcrypt   = require('bcrypt')
var mongoose = require('../mongoose')

var schema = mongoose.Schema({
  username: {type: String, required: true, unique: true, index: true},
  password: {type: String, required: true },
  createdAt: {type: Date, default: Date.now}
})

schema.pre('save', function (next) {
  var doc = this
  if (doc.isModified('password')) {
    bcrypt.hash(this.password, 8, function (err, hash) {
      if (err) return next(err)
      doc.password = hash
      next()
    })
  } else {
    next()
  }
})

module.exports = mongoose.model('User', schema)
