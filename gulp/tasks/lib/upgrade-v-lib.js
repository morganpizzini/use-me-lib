var gulp = require('gulp');
var bump = require('gulp-bump');
const argv = require('yargs')
    .alias('sv', 'skipv').argv;
var storage = require('../../functions/storage');

/**
 * Upgrade package.json version
 *
 * @task {upgrade-v-lib} 
 * @group {Utils}
 * @order {15}
 * @arg {skipv} [--sv] version update
 */
gulp.task('upgrade-v-lib', function (cb) {
    const libName = storage.retrive('libName')
    if (!libName) {
        cb("Canot retrive 'libName'");
        return;
    }
    if (argv.skipv) {
        console.log('Versioning skipped');
        cb();
        return;
    }
    console.log('Upgrading version, use --skipv for skip');
    gulp.src('./projects/'+ libNmae +'/package.json')
        .pipe(bump())
        .pipe(gulp.dest('./projects/'+ libNmae +'/'))
        .on('end', cb);
});