var packageJson = require('../../package.json')

module.exports = {
  version: packageJson.version,
  secret:  'devkey'
}
