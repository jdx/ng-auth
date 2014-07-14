var config = require('../config')

module.exports = function (req, res) {
  res.json({
    version: config.version
  })
}
