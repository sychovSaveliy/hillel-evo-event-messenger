const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const rimraf = require('rimraf');

let paths = {
  js: 'app/**/*.js',
  sass: {
    blocks: 'app/src/**/*.sass',
    common: 'app/sass/**/*.sass',
    templates: 'templates/**/*.sass'
  },
  css: {
    libs: 'app/libs/**/*.css',
    main: 'app/css/**/*.css'
  }
};

gulp.task('js', function () {
  return gulp.src([
      paths.js
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('bin/js'))
});

gulp.task('sass', function () {
  return gulp.src(
      paths.sass.blocks,
      paths.sass.common)
    .pipe(sourcemaps.init())
    .pipe(concat('main.sass'))
    .pipe(sass({
      outputStyle: 'compressed'
    }).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('bin/css'))
});

gulp.task('clean', function del(cb) {
  return rimraf('bin', cb);
});

gulp.task('watch', function () {
  gulp.watch(paths.js, ['js']),
  gulp.watch([paths.sass.blocks, paths.sass.common], ['sass'])
});

gulp.task('sass:templates', function () {
  return gulp.src(paths.sass.templates)
    .pipe(sass())
    .pipe(gulp.dest('./templates/compiled/'))
});


gulp.task('watch:templates', function () {
  gulp.start('sass:templates')
  gulp.watch(paths.sass.templates, ['sass:templates']);
});