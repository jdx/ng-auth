var gulp = require('gulp')

gulp.task('templates', function () {
  return gulp.src('ng/partials/**/*.html')
    .pipe(gulp.dest('assets/partials'))
})

gulp.task('watch:templates', ['templates'], function () {
  gulp.watch('ng/partials/**/*.html', ['templates'])
})
