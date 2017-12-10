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
  },
  bundle: {
        js: [
            './node_modules/angular/angular.js',
            './node_modules/angular-ui-router/release/angular-ui-router.js'
        ]
    }
};

gulp.task('js', function() {
  return gulp.src(paths.js)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./bin/js'));
});

gulp.task('sass', function () {
  return gulp.src([
    paths.sass.blocks,
    paths.sass.common])
    .pipe(sass({
      outputStyle: 'compressed'
    }).on("error", sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('bin/css'))
});

gulp.task('clean', function del(cb) {
  return rimraf('bin', cb);
});

gulp.task('watch',['js', 'sass'], function () {
    gulp.watch(paths.js, ['js']),
    gulp.watch([paths.sass.blocks, paths.sass.common], ['sass'])
});

gulp.task('sass:templates', function () {
  return gulp.src(paths.sass.templates)
    .pipe(sass())
    .pipe(gulp.dest('./templates/compiled/'))
});

gulp.task('watch:templates', ['sass:templates'], function () {
  gulp.watch(paths.sass.templates, ['sass:templates']);
});

gulp.task('bundle:js', function() {
    return gulp.src(paths.bundle.js)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./bin/vendor/'));
});
