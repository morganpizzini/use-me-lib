var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var exec = require('child_process').exec;
const argv = require('yargs')
    .alias('m', 'message')
    .alias('sv', 'skipv').argv;
// Require all tasks.
requireDir('./gulp/tasks', { recurse: true });
var storage = require('./gulp/functions/storage');
var package = require('./gulp/functions/package-lib');


/**
 * set default task to helper
 * for list all tasks
 */
gulp.task('default', ['help']);

/**
 * Create local package
 *
 * @task {local} 
 * @group {Public Gulpfile}
 * @order {10}
 */
gulp.task('local', function (cb) {

    //store selected library
    storage.store("libName",'potara-lib');

    // get current package version
    var pkgV = package.getVersion();

    //store current version
    storage.store("pkgV",pkgV);
    
    //store desired version
    storage.store("pkgVFake",'0.0.0');

    /**
     * override package version
     * build library
     * reset package version
     */
    runSequence('override-v-lib', 'package-lib', 'set-v-lib', cb);

});

/**
 * Publish library to npm repository
 *
 * @task {publish} 
 * @group {Public Gulpfile}
 * @order {11}
 * @arg {skipv} (--skipv) skip version upgrading
 */
gulp.task('publish', function (cb) {

     //store selected library
     storage.store("libName",'potara-lib');

    runSequence('clean', 'upgrade-v-lib', 'build-lib', 'npm-publish', cb);
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