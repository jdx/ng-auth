var express = require('express')
var logger  = require('morgan')

var app = express()

app.use(logger('dev'))

app.use(express.static(__dirname + '/../public'))
app.use(express.static('/assets', __dirname + '/../assets'))

app.use('/api', require('./routes'))

var server = app.listen(3000, function () {
  console.log('server listening on', server.address().port)
})
