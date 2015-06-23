var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var config = require('../config').sass;

gulp.task('minify-css', function() {
    return gulp.src(config.dest + '/*.css')
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(gulp.dest(config.dest))
});