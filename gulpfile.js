
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');

gulp.task('fonts', function() {
  return gulp.src(['src/fonts/**/*.{ttf,woff,woff2,eof,svg}'])
    .pipe(gulp.dest('build/fonts'));
});

gulp.task('styles', function(){
  // var processors = [
  //   autoprefixer({browsers: ['last 1 version']})
  // ];
  gulp.src(['src/materialize.scss'])
    .pipe(plumber())
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    // .pipe(sourcemaps.write('.'))
    // .pipe(postcss(processors))
    .pipe(autoprefixer({browsers: ['last 1 version']}))
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/'))
    // .pipe(minifycss())
    // .pipe(gulp.dest('build/'))
});

gulp.task('default', function() {
  gulp.run('fonts');

  gulp.watch([
    "src/*.scss",
    "src/**/*.scss",
    "src/styles/**/*.scss"], ['styles']);
});
