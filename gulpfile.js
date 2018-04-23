const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const refresh = require('gulp-refresh')

gulp.task('css-min', function () {
  return gulp.src('src/css/**/*.css')
    .pipe(cssmin())
    .pipe(sourcemaps.init())
    .pipe(concat('app.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('../css'))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('css', function () {
  return gulp.src('src/css/**/*.css')
    .pipe(concat('app.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(refresh())
})

gulp.task('fonts', function () {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('img', function () {
  return gulp.src('src/img/**/*')
    .pipe(gulp.dest('dist/img'))
})

gulp.task('build', ['css-min', 'fonts', 'img'])

gulp.task('dev', ['css', 'fonts', 'img'], function () {
  refresh.listen()
  gulp.watch('src/css/**/*.css', ['css'])
})
