var gulp   = require('gulp');
var config = require('../config');
var watch  = require('gulp-watch');

gulp.task('watch', function() {
  watch(config.images.src, function() { gulp.start('images'); });
  watch('**/*.scss', function() { gulp.start('sass'); });
});