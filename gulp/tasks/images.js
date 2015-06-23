var changed = require('gulp-changed');
var config = require('../config').images;
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var imageminMozjpeg = require('imagemin-mozjpeg');

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
  .pipe(imagemin({
    progressive: true,
    use: [pngquant(), imageminMozjpeg({ progressive: true, quality: 50})]
  })) // Optimize
  .pipe(gulp.dest(config.dest))
});
