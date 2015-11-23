var
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-ruby-sass'),
	minifycss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	gulpSequence = require('gulp-sequence'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	browserSync = require("browser-sync"),
	through = require('through2'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	globby = require('globby'),
	uglify = require('gulp-uglify'),
	browserify = require('browserify'),
	notify = require('gulp-notify'),
	reload = browserSync.reload;


	//-- SASS -------------------------------------------------------------------------------//
	//-- 1) Autoprefix for adding browser prefixes to CSS properties
	//-- 2) Minify CSS
	//-- 3) Write CSS Sourcemaps for minified CSS
	//-- 4) Output to Wordpress Theme directory
	//---------------------------------------------------------------------------------------//
	gulp.task('sass', function () {
		return sass('scss/style.scss', { sourcemap: true })
			.on('error', sass.logError)
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

			.pipe(gulp.dest("../"))
			//.pipe(reload({stream:true}));
	});
	//---------------------------------------------------------------------------------------//


	//-- IMAGES -----------------------------------------------------------------------------//
	//-- 1) Minify Images
	//-- 2) Output to Wordpress Theme directory
	//---------------------------------------------------------------------------------------//
	gulp.task('images', function() {
		return gulp.src('images/*')
			.pipe(imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			}))
			.pipe(gulp.dest('../images'));
	});
	//---------------------------------------------------------------------------------------//



	//-- FONTS ------------------------------------------------------------------------------//
	//-- 1) Output to Wordpress Theme directory
	//---------------------------------------------------------------------------------------//
	gulp.task('copyfonts', function() {
		gulp.src('fonts/**/*.{ttf,woff,eof,svg}').pipe(gulp.dest('../fonts'));
	});
	//---------------------------------------------------------------------------------------//


	//-- WEBSERVER --------------------------------------------------------------------------//
	//-- 1) Serve Files
	//-- 2) Watch for changes to PHP, JS, SCSS
	//---------------------------------------------------------------------------------------//
	gulp.task('serve', function() {
		//watch files
		var files = [
			'../style.css',
			'../*.php'
		];

		//initialize browsersync
		browserSync.init(files, {
			//browsersync with a php server
			proxy: "caffenero.jimmers",
			notify: false
		});

	});
	//---------------------------------------------------------------------------------------//


	//-- JS HINT ----------------------------------------------------------------------------//
	//-- 1) Lint JS Files
	//-- 2) Send Lint Errors to OSX Notifications
	//---------------------------------------------------------------------------------------//
	gulp.task('lint', function() {
		gulp.src([ 'js/**/*.js' ])
		.pipe(jshint())

		// Use gulp-notify as jshint reporter
		.pipe(notify(function (file) {
		if (file.jshint.success) {
			// Don't show something if success
			return false;
		}

		var errors = file.jshint.results.map(function (data) {
			if (data.error) {
		  		return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
			}
		}).join("\n");
		return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
		}))

		.pipe(jshint.reporter(stylish))
	});
	//---------------------------------------------------------------------------------------//


	//-- JAVASCRIPT -------------------------------------------------------------------------//
	//-- 1) Minify JS
	//-- 2) Write sourcemaps for minified JS
	//-- 3) Use Browserify to import external modules
	//-- 4) Output to Wordpress Theme directory
	//---------------------------------------------------------------------------------------//
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

		// Write source maps for the minified JS
			.pipe(sourcemaps.init({loadMaps: true}))

		// Add gulp plugins to the pipeline here.
			.pipe(uglify())
			.on('error', gutil.log)
			.pipe(sourcemaps.write('../maps'))
			.pipe(gulp.dest('../js/'));

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
	//---------------------------------------------------------------------------------------//

	gulp.task('default', gulpSequence(['sass', 'images', 'copyfonts', 'lint', 'js']));