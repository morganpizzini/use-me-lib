var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('package-lib', function (cb) {
     //build angular
     exec('npm run package', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});