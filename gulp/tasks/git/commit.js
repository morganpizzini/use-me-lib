var gulp = require('gulp');
var git = require('gulp-git');

var gulp = require('gulp');
var git = require('gulp-git');
const argv = require('yargs')
    .alias('m', 'message').argv;
/**
 * Git commit command
 *
 * @task {commit} 
 * @group {Git tasks}
 * @order {13}
 * @arg {message} [--m] message for git commit
 */
gulp.task('commit', () => {
    console.log('commiting');
    if (!argv.message || argv.message === true) {
        console.log('No message for git');
        return;
    }
    return gulp.src('.')
        .pipe(git.commit(argv.message));
})