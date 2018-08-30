var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
const argv = require('yargs')
    .alias('m', 'message')
    .alias('sv', 'skipv').argv;
// Require all tasks.
requireDir('./gulp/tasks', { recurse: true });



/**
 * set default task to helper
 * for list all tasks
 */
gulp.task('default', ['help']);

/**
 * Publish library to npm repository
 *
 * @task {publish} 
 * @group {Public Gulpfile}
 * @order {11}
 * @arg {skipv} (--skipv) skip version upgrading
 */
gulp.task('publish', function (cb) {
    runSequence('clean', 'upgrade-v', 'build', 'npm-publish', cb);
});

/**
 * Git flow for push to remote repository
 *
 * @task {gitsend} 
 * @group {Public Gulpfile}
 * @order {12}
 * @arg {message} [--m] message message for git commit
 */
gulp.task('gitsend', function (cb) {
    if (!argv.message || argv.message === true) {
        console.log('No message for git');
        return;
    }
    runSequence('add', 'commit', 'push', cb);
});