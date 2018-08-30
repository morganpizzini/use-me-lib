var gulp = require('gulp');
var git = require('gulp-git');

/**
 * Git push command
 *
 * @task {push} 
 * @group {Git tasks}
 * @order {14}
 */
gulp.task('push', function () {
    console.log('pushing...');
    return git.push('origin', function (err) {
        if (err) throw err;
    });
});