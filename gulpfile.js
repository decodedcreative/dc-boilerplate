var
	gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	processhtml = require('gulp-processhtml'),
	uglify = require('gulp-uglify'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	plumber = require('gulp-plumber'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	ignore = require('gulp-ignore'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	gulpSequence = require('gulp-sequence'),
	browserify = require('gulp-browserify'),
	browserSync = require("browser-sync").create();

gulp.task('sass', function () {
  return sass('scss/app.scss', { sourcemap: true })
    .on('error', sass.logError)

    .pipe(plumber())
		.pipe(autoprefixer({
      browsers: ["last 4 versions", "Firefox >= 27", "Blackberry >= 7", "IE 8", "IE 9"],
      cascade: false
    }))
    .pipe(minifycss())

    // For inline sourcemaps
    .pipe(sourcemaps.write())

    // For file sourcemaps
    .pipe(sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: 'scss'
    }))

		.on('error', function(e) {
      console.log(e);
    })

		.pipe(gulp.dest("dist/css"))
		.pipe(browserSync.stream());
});

gulp.task('images', () => {
    return gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('copyfonts', function() {
  gulp.src('fonts/**/*.{ttf,woff,eof,svg}').pipe(gulp.dest('dist/fonts'));
});

gulp.task('js', function() {
    gulp.src([ 'js/**/*.js' ])
		.pipe(sourcemaps.init())
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(browserify())
		.pipe(concat("app.js"))
    .pipe(ignore.exclude([ "**/*.map" ]))
    .pipe(uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
		.pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest("dist/js"));
});

gulp.task('html', function () {
    return gulp.src('./*.html')
	   .pipe(processhtml())
	   .pipe(gulp.dest('dist'))
		 .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'html', 'js'], function() {
    browserSync.init({
        server: "./dist"
    });
		gulp.watch('./*.html', ['html']);
		gulp.watch('./js/**/*.js', ['js']);
		gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', gulpSequence(['sass', 'html', 'images', 'copyfonts', 'js'], 'serve'));
