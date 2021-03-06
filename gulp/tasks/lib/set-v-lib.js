var gulp = require('gulp');
var bump = require('gulp-bump');
var storage = require('../../functions/storage');

/**
 * Set package.json version based on storage 'pkgV'
 *
 * @task {set-v-lib} 
 * @group {Utils}
 * @order {14}
 */
gulp.task('set-v-lib', function (cb) {
    const libName = storage.retrive('libName')
    if (!libName) {
        cb("Canot retrive 'libName'");
        return;
    }
    const pkgV = storage.retrive('pkgV');
    if (!pkgV) {
        cb("Canot retrive 'pkgV'");
        return;
    }
    console.log('Set version to > '+pkgV);
    gulp.src('./projects/'+ libName +'/package.json')
        .pipe(bump({ version: pkgV }))
        .pipe(gulp.dest('./projects/' + libName + '/'))
        .on('end', cb);
});
