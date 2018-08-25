var gulp = require('gulp');
var runSequence = require('run-sequence');
var exec = require('child_process').exec;
var clean = require('gulp-clean');
const argv = require('yargs').argv;
var fs = require('fs');
var bump = require('gulp-bump');

var distFolder = 'dist/';

gulp.task('upgrade-v', function (cb) {
    if (argv.skipv) {
        console.log('Versioning skipped');
        cb();
        return;
    }
    console.log('Upgrading version, use --skipv for skip');
    gulp.src('./projects/icubed-sphera-lib/package.json')
        .pipe(bump({ type: 'patch' }))
        .pipe(gulp.dest('./projects/icubed-sphera-lib/'))
        .on('end', cb);
});

gulp.task('build', function (cb) {
    //build angular
    exec('npm run build_lib', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('clean', function () {
    return gulp.src(distFolder, { read: false })
        .pipe(clean());
});

gulp.task('npm-publish', function (cb) {
    //build angular
    exec('npm run npm_publish', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('publish', function (cb) {
    runSequence('clean', 'upgrade-v', 'build', 'npm-publish', cb);
});