require('./gulp')
var gulp = require('gulp')

gulp.task('default', ['server', 'watch:js', 'watch:templates'])
