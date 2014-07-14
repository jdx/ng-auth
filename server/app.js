'use strict';
var express = require('express')
var logger  = require('morgan')

var app = express()

app.use(logger('dev'))

app.use('/assets', express.static(__dirname + '/../assets'))
app.use('/api', require('./routes'))
app.get('*', require('./angular'))

var server = app.listen(3000, function () {
  console.log('server listening on', server.address().port)
})
