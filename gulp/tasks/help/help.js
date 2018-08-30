var gulp = require('gulp');
var usage = require('gulp-help-doc');

/**
 * This simply defines help task which would produce usage
 * display for this gulpfile. Simple run `gulp help` to see how it works.
 * NOTE: this task will not appear in a usage output as far as it is not
 * marked with the @task tag.
 */
gulp.task('help', function () { return usage(gulp); });
