/**
 * EJSタスク
 * EJSで作られたファイルを指定ディレクトリにコンパイルして出力する
 */
var gulp = require('gulp');
var config = require('./config');
var ejs = require("gulp-ejs");
var browser = require('browser-sync');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('ejs', function() {
   return gulp.src(config.path.ejs.src)
      .pipe(plumber({
         errorHandler: notify.onError('<%= error.message %>')
      }))
      .pipe(ejs(config.ejs))
      .pipe(gulp.dest(config.path.ejs.dest))
      .pipe(browser.stream());
});
