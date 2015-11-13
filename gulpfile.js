var
	gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return sass('scss/app.scss', { sourcemap: true })
    .on('error', sass.logError)

    // For inline sourcemaps
    .pipe(sourcemaps.write())

    // For file sourcemaps
    .pipe(sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: 'scss'
    }))

    .pipe(gulp.dest('dist/css'));
});


gulp.task('default', ['sass']);