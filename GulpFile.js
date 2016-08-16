var gulp = require('gulp');
var connect = require('gulp-connect');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var ghPages = require('gulp-gh-pages');

gulp.task('connect', function() {
  connect.server();
});

gulp.task('copy-html-files', function() {
  gulp.src(['./app/**/*.html', '!./app/index.html'], {base: './app'})
  .pipe(gulp.dest('build/'));
});

gulp.task('usemin', function() {
  gulp.src('./app/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat', rev()],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('build', ['copy-html-files', 'usemin']);


gulp.task('deploy', function() {
  return gulp.src('./app/**/*')
    .pipe(ghPages());
});