var
gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
plumber = require('gulp-plumber'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer'),
cssnano = require('gulp-cssnano'),
jshint = require('gulp-jshint'),
stylish = require('jshint-stylish'),
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant');
browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return sass('src/scss/app.scss', { sourcemap: true })
    .on('error', sass.logError)
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: ["last 4 versions", "Firefox >= 27", "Blackberry >= 7", "IE 8", "IE 9"],
      cascade: false
    }))
    .pipe(cssnano())

    // For inline sourcemaps
    .pipe(sourcemaps.write())

    // For file sourcemaps
    .pipe(sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: 'src/scss'
    }))

	.on('error', function(e) {
      console.log(e);
    })

	.pipe(gulp.dest("css"))
	.pipe(browserSync.stream());
});

gulp.task('lint', function() {
  gulp.src([ 'js/**/*.js' ])
  .pipe(jshint())
  .pipe(jshint.reporter(stylish))
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['lint']);
});

// or...

// gulp.task('serve', function() {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
//    gulp.watch('src/scss/**/*.scss', ['sass']);
//    gulp.watch('src/js/**/*.js', ['lint']);
// });

gulp.task('default', ['sass', 'lint', 'serve']);
