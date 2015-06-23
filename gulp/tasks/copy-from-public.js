var gulp = require('gulp');
var config = require('../config');

gulp.task('copy-from-public', function(cb) {
    //Copy Sitemap, Robots, Humans as well as images from public
    return gulp.src(config.publicDirectory + '/**/*.{txt,xml,png,jpg,ico,js,css}')
        .pipe(gulp.dest(config.distDirectory));
});