'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var minifyhtml = require('gulp-htmlmin');

gulp.task('html', function () {
  return gulp.src(['./browser/views/**/*.pug'])
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest(function (file) {
      return './browser/'
    }));
});

gulp.task('watch', function(){
  gulp.watch('./browser/views/**/*.pug', ['html']);
})

gulp.task('build', ['html']);
