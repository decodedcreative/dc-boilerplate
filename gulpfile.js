var
gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
browserify = require('browserify'),
source = require('vinyl-source-stream'),
sourcemaps = require('gulp-sourcemaps'),
buffer = require('vinyl-buffer'),
gutil = require('gulp-util'),
cssnano = require('gulp-cssnano'),
jshint = require('gulp-jshint'),
stylish = require('jshint-stylish'),
imagemin = require('gulp-imagemin'),
buffer = require('vinyl-buffer'),
ngAnnotate = require('browserify-ngannotate'),
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

gulp.task('lint', function() {
    gulp.src([ 'src/js/**/*.js' ])
	.pipe(jshint())
	.pipe(jshint.reporter(stylish))
});


gulp.task('browserify', function() {
    var b = browserify({
        entries: './src/js/app.js',
        debug: true,
        paths: ['./src/js/controllers', './src/js/services', './src/js/directives'],
        transform: [ngAnnotate]
    });

    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./js/'));
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
    gulp.start('images', 'browserify', 'sass');
});