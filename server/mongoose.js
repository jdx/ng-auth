'use strict';
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/posts')

module.exports = mongoose
