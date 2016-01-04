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
	through = require('through2'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	globby = require('globby'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	gulpSequence = require('gulp-sequence'),
	browserify = require('browserify'),
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

gulp.task('images', function(){
  gulp.src('images/*')
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

gulp.task('lint', function() {
    gulp.src([ 'js/**/*.js' ])
	.pipe(jshint())
	.pipe(jshint.reporter(stylish))
});

gulp.task('js', function () {
  // gulp expects tasks to return a stream, so we create one here.
  var bundledStream = through();

  bundledStream
    // turns the output bundle stream into a stream containing
    // the normal attributes gulp plugins expect.
    .pipe(source('app.js'))

    // the rest of the gulp task, as you would normally write it.
    // here we're copying from the Browserify + Uglify2 recipe.
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    	// Add gulp plugins to the pipeline here.
      	.pipe(uglify())
      	.on('error', gutil.log)
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('./dist/js/'));

  // "globby" replaces the normal "gulp.src" as Browserify
  // creates it's own readable stream.
  globby(['./js/*.js']).then(function(entries) {
    // create the Browserify instance.
    var b = browserify({
      entries: entries,
      debug: true,
      paths: ['./node_modules','./js/']
    });

    // pipe the Browserify stream into the stream we created earlier
    // this starts our gulp pipeline.
    b.bundle().pipe(bundledStream);
  }).catch(function(err) {
    // ensure any errors from globby are handled
    bundledStream.emit('error', err);
  });

  // finally, we return the stream, so gulp knows when this task is done.
  return bundledStream;
});


gulp.task('html', function () {
    return gulp.src('./*.html')
		.pipe(processhtml())
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'html', 'lint', 'js'], function() {
    browserSync.init({
        server: "./dist"
    });
	gulp.watch('./*.html', ['html']);
	gulp.watch('./js/**/*.js', ['lint','js']);
	gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', gulpSequence(['sass', 'html', 'images', 'copyfonts', 'lint', 'js'], 'serve'));
