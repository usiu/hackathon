var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var serverPath = 'dev-server.js';

gulp.task('start-dev-server', function() {
	nodemon({
		script: serverPath
	});
});
