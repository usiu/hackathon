var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:development', function(cb) {
    gulpSequence('clean', ['images'], ['sass', 'copy-from-public', 'copy-fonts', 'api-configs-development'], ['webpack:development', 'watch'], 'start-dev-server', cb);
});