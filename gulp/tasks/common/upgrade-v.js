var gulp = require('gulp');
var bump = require('gulp-bump');

/**
 * Upgrade package.json version
 *
 * @task {upgrade-v} 
 * @group {Utils}
 * @order {12}
 * @arg {skipv} [--sv] version update
 */
gulp.task('upgrade-v', function (cb) {
    if (argv.skipv) {
        console.log('Versioning skipped');
        cb();
        return;
    }
    console.log('Upgrading version, use --skipv for skip');
    gulp.src('./projects/potara-lib/package.json')
        .pipe(bump({ type: 'patch' }))
        .pipe(gulp.dest('./projects/potara-lib/'))
        .on('end', cb);
});