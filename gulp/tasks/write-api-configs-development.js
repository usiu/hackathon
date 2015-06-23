var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var config = require('../config');

gulp.task('api-configs-development', function() {
	var contents = 'var config = \'' + JSON.stringify(config.apiConfigs.development, null, null) + '\'' + '\n' + 'module.exports = JSON.parse(config)';
	fs.writeFile(path.join(config.sourceDirectory, '/api-config.js'), contents, function (err) {
  		if (err) throw err;
		return gulp.src(config.sourceDirectory + '/api-config.js')
			.pipe(gulp.dest(config.distDirectory));		
	});
});
