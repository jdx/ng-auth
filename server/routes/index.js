var router     = require('express').Router()
var bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/', require('./info'))

var posts = require('./posts')
router.route('/posts')
  .get(posts.list)
  .post(posts.create)

module.exports = router
