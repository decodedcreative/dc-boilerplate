var
gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
sourcemaps = require('gulp-sourcemaps'),
cssnano = require('gulp-cssnano'),
jshint = require('gulp-jshint'),
stylish = require('jshint-stylish'),
imagemin = require('gulp-imagemin'),
notify = require('gulp-notify'),
del = require('del'),
concat = require("gulp-concat"),
cache = require('gulp-cache'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
	.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('images'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function() {
    return del(['css', 'js', 'images']);
});

gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter(stylish))
    .pipe(concat('app.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Styles
gulp.task('sass', function() {
  return sass('src/scss/app.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Styles task complete' }));
});


gulp.task('default', ['clean'], function() {
    gulp.start('images', 'scripts', 'sass');
});