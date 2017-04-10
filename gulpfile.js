// Include gulp
var gulp = require( 'gulp' );

// Include Our Plugins
var sass = require( 'gulp-sass' );
var browserSync = require( 'browser-sync' )
	.create();

// Compile Our Sass
gulp.task( 'sass', function () {
	return gulp.src( 'app/scss/**/*.scss' ) // Gets all files ending with .scss in app/scss
		.pipe( sass() )
		.pipe( gulp.dest( 'app/css' ) )
		.pipe( browserSync.reload( {
			stream: true
		} ) )
} );

// Watch Files For Changes
gulp.task( 'watch', [ 'browserSync', 'sass' ], function () {
	gulp.watch( 'app/scss/**/*.scss', [ 'sass' ] );
	// Other watchers
} );

// BrowserSync
gulp.task( 'browserSync', function () {
	browserSync.init( {
		server: {
			baseDir: 'app'
		},
	} )
} )

// Test Function
gulp.task( 'testing', function () {
	console.log( 'Hello Gulp' );
} );
