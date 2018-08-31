var gulp = require('gulp');
var bump = require('gulp-bump');
var storage = require('../../functions/storage');

/**
 * Override package.json version based on storage 'pkgVFake'
 *
 * @task {override-v} 
 * @group {Utils}
 * @order {14}
 */
gulp.task('override-v', function (cb) {
    const pkgV = storage.retrive('pkgVFake');
    if (!pkgV) {
        cb("Canot retrive 'pkgVFake'");
        return;
    }
    console.log('Overriding version to > '+pkgV);
    gulp.src('./projects/potara-lib/package.json')
        .pipe(bump({ version: pkgV }))
        .pipe(gulp.dest('./projects/potara-lib/'))
        .on('end', cb);
});
