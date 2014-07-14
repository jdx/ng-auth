var nodemon = require('gulp-nodemon')
var gulp = require('gulp')

gulp.task('server', function () {
  nodemon({
    script: 'server/app.js',
    ext: 'js',
    ignore: ['ng*', 'assets*', 'gulp*']
  })
})
