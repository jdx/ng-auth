'use strict';
var mongoose = require('../mongoose')

var schema = mongoose.Schema({
  body: String,
  createdAt: Date
})

module.exports = mongoose.model('Post', schema)
