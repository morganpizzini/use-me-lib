var gulp = require('gulp');
var git = require('gulp-git');

/**
 * Git add command
 *
 * @task {add} 
 * @group {Git tasks}
 * @order {12}
 */
gulp.task('add', function () {
    console.log('adding...');
    return gulp.src('.')
        .pipe(git.add());
});