var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var notify = require('gulp-notify');
 
gulp.task('less', function () {
  return gulp.src('./styles/**/index.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(notify({ message: 'LESS task complete' }));
});

// gulp.task('browserify', function () {
//   return gulp.src('./')
// })
