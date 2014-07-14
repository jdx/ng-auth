var gulp       = require('gulp')
var concat     = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('js', function () {
  return gulp.src(['ng/**/module.js', 'ng/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'))
})

gulp.task('watch:js', ['js'], function () {
  gulp.watch('ng/**/*.js', ['js'])
})
