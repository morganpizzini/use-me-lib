var gulp = require('gulp');
var bump = require('gulp-bump');
var storage = require('../../functions/storage');

/**
 * Override package.json version based on 
 * storage 'pkgVFake'
 * library name 'libName'
 *
 * @task {upgrade-v-lib} 
 * @group {Utils}
 * @order {15}
 */
gulp.task('override-v-lib', function (cb) {
    const libName = storage.retrive('libName')
    if (!libName) {
        cb("Canot retrive 'libName'");
        return;
    }
    const pkgV = storage.retrive('pkgVFake');
    if (!pkgV) {
        cb("Canot retrive 'pkgVFake'");
        return;
    }
    console.log('Overriding version to > '+pkgV);
    gulp.src('./projects/'+libName+'/package.json')
        .pipe(bump({ version: pkgV }))
        .pipe(gulp.dest('./projects/'+libName+'/'))
        .on('end', cb);
});
