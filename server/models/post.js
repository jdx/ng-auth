'use strict';
var mongoose = require('../mongoose')

var schema = mongoose.Schema({
  author: {type: 'ObjectId', ref: 'User', required: true},
  body: {type: String, required: true},
  createdAt: {type: Date, required: true, default: Date.now, index: -1}
})

module.exports = mongoose.model('Post', schema)
