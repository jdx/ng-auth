'use strict';
var router         = require('express').Router()
var bodyParser     = require('body-parser')
var authMiddleware = require('../middleware/auth')

router.use(bodyParser.json())
router.use(authMiddleware)

router.get('/', require('./info'))

router.use(require('./posts'))
router.use(require('./user'))

module.exports = router
