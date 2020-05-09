const browserSync = require('browser-sync').create()
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const cssnano = require('gulp-cssnano')

exports.buildStyles = () => {
    return gulp.src('./styles/main.css')
      .pipe(postcss())
      .pipe(cssnano())
      .pipe(gulp.dest('./dest'))
      .pipe(browserSync.stream())
}

exports.buildTemplates = () => {
  return gulp.src('./templates/**/*.html')
    .pipe(gulp.dest('./dest'))
}

exports.build = gulp.parallel([
  exports.buildStyles,
  exports.buildTemplates
])

exports.default = () => {
  gulp.watch('./styles/**/*.css', gulp.parallel([exports.buildStyles]))
  gulp.watch('./templates/**/*.html', gulp.parallel([exports.buildTemplates]))

  gulp.watch('./dest/**/*.html').on('change', browserSync.reload)

  browserSync.init({
    server: {
      baseDir: './dest'
    }
  })
}
