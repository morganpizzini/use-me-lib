var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('npm-publish', function (cb) {
    //build angular
    exec('npm run npm_publish', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});