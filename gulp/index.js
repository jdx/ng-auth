require('fs').readdirSync(__dirname).forEach(function (module) {
  require('./' + module)
})
