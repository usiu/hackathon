var gulp = require('gulp');
var rename = require('gulp-rename');
var path = require('path');
var fs = require('fs');
var Handlebars = require('handlebars');
var handleErrors = require('../lib/handleErrors');
var config = require('../config').html;

gulp.task('generate-html', function(cb) {

    var manifest = require(path.join(__dirname, '../../', config.dest, '/rev-manifest.json'));

    var templateData = {
        title: 'Hackathon Summer 2015',
        STYLES_URL: '/assets/stylesheets/app.css',
        APP_SCRIPT_URL: '/assets/' + manifest.app,
        SHARED_SCRIPT_URL: '/assets/' + manifest.shared
    };

    var templateSource = fs.readFileSync(path.join(__dirname, '../../', config.src));
    var template = Handlebars.compile(templateSource.toString());

    //Write Template
    fs.writeFileSync(path.join(config.dest, 'index.html'), template(templateData));

    return gulp.src(config.dest + '/index.html')
        .on('error', handleErrors)
        .pipe(rename('index.html'))
        .pipe(gulp.dest(config.dest));

});