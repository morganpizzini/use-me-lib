var gulp = require('gulp');
var bump = require('gulp-bump');
var storage = require('../../functions/storage');

/**
 * Set package.json version based on storage 'pkgV'
 *
 * @task {set-v} 
 * @group {Utils}
 * @order {14}
 */
gulp.task('set-v', function (cb) {
    const pkgV = storage.retrive('pkgV');
    if (!pkgV) {
        cb("Canot retrive 'pkgV'");
        return;
    }
    console.log('Set version to > '+pkgV);
    gulp.src('./projects/potara-lib/package.json')
        .pipe(bump({ version: pkgV }))
        .pipe(gulp.dest('./projects/potara-lib/'))
        .on('end', cb);
});
