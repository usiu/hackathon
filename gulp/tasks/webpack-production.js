var gulp = require('gulp');
var config = require('../config').webpack('production');
var logger = require('../lib/bundleLogger');
var webpack = require('webpack');

gulp.task('webpack:production', function(callback) {
    webpack(config, function(err, stats) {
        logger(err, stats)
        callback()
    })
})