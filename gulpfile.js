// Include gulp
var gulp = require( 'gulp' );

// Include Our Plugins
var sass = require( 'gulp-sass' );
var browserSync = require( 'browser-sync' )
	.create();

// Compile Our Sass
gulp.task( 'sass', function () {
	return gulp.src( 'app/scss/**/*.scss' ) // Gets all files ending with .scss in app/scss
		.pipe( sass()
			.on( 'error', function ( err ) {
				console.error( err.message );
				browserSync.notify( err.message, 3000 ); // Display error in the browser
				this.emit( 'end' ); // Prevent gulp from catching the error and exiting the watch process
			} ) )
		.pipe( gulp.dest( 'app/css' ) )

		.pipe( browserSync.stream() );
} );

// Watch Files For Changes
gulp.task( 'watch', [ 'browserSync', 'sass' ], function () {
	gulp.watch( 'app/scss/**/*.scss', [ 'sass' ] );
	// Other watchers
	gulp.watch( "app/*.html" )
		.on( 'change', browserSync.reload );
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
