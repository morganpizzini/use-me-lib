var gulp = require('gulp');
var clean = require('gulp-clean');
var variables = require('../../variables');

var distFolder = variables.distFolder;

gulp.task('clean', function () {
    return gulp.src(distFolder, { read: false })
        .pipe(clean());
});
