var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var notify = require('gulp-notify');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');

gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./lib/'));
});

gulp.task('styles', function () {
  return gulp.src('./styles/**/index.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./static/css'))
    .pipe(notify({ message: 'LESS task complete' }));
});

gulp.task('build', function () {
  runSequence(['coffee', 'styles']);
});

// gulp.task('browserify', function () {
//   return gulp.src('./')
// })
