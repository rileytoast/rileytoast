var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var notify = require('gulp-notify');
var coffee = require('gulp-coffee');
var debug = require('gulp-debug');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
 
// Basic usage 
gulp.task('browserify', function() {
  return browserify('./lib/app.js')
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('bundle.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./lib/'));
});

gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./lib/'))
    .pipe(debug());
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
  runSequence(['coffee', 'styles'], 'browserify');
});

// gulp.task('browserify', function () {
//   return gulp.src('./')
// })
