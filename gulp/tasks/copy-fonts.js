var gulp = require('gulp');
var config = require('../config');

gulp.task('copy-fonts', function(cb) {
    //Copy all fonts from stylesheets folder
    return gulp.src(config.sourceAssets + '/stylesheets/**/*.{eot,otf,ttf,svg,woff}')
        .pipe(gulp.dest(config.distAssets + '/stylesheets'));
});