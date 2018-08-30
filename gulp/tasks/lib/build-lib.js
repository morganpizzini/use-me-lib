var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('build', function (cb) {
    //build angular
    exec('npm run build_lib', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
