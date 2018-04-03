const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const rimraf = require('rimraf');

let paths = {
  js: 'app/**/*.js',
  mock: 'server/constants/app.default.mock.js',
  server: 'server/constants/app.default.server.js',
  localServer: 'server/constants/app.default.localserver.js',
  sass: {
    blocks: 'app/src/blocks/**/*.sass',
    common: 'app/src/sass/**/*.sass',
    templates: 'templates/**/*.sass'
  },
  css: {
    libs: 'app/src/css/**/*.css',
    main: 'app/css/**/*.css'
  },
  bundle: {
        js: [
            './node_modules/angular/angular.js',
            './node_modules/angular-ui-router/release/angular-ui-router.js',
            './node_modules/angular-resource/angular-resource.js',
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/moment/min/moment.min.js',
            './static_vendor/calendar.js',
            './node_modules/fullcalendar/dist/fullcalendar.min.js',
            './node_modules/fullcalendar/dist/gcal.js'
        ]
    }
};
//compile js for mock 5006
gulp.task('js', function() {
  return gulp.src(
    paths.js)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./bin/js'));
});
gulp.task('js.mock', function() {
  return gulp.src([
    paths.js,
    paths.mock])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./bin/js'));
});

//compile js for live server
gulp.task('server', function() {
  return gulp.src([
    paths.js,
    paths.server])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./bin/js'));
});
//compile js for local server 8080
gulp.task('localServer', function() {
  return gulp.src([
    paths.js,
    paths.localServer])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./bin/js'));
});

gulp.task('css:libs', function(){
  return gulp.src(paths.css.libs)
  .pipe(concat('libs.css'))
  .pipe(gulp.dest('./bin/css'))
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

gulp.task('watch',['js.mock', 'sass', 'css:libs'], function () {
    gulp.watch(paths.js, ['js.mock']),
    gulp.watch([paths.sass.common, paths.sass.blocks], ['sass']),
    gulp.watch(paths.css.libs, ['css:libs'])
});
gulp.task('watch:server',['server', 'sass', 'css:libs'], function () {
    gulp.watch(paths.js, ['server']),
    gulp.watch([paths.sass.common, paths.sass.blocks], ['sass'])
});
gulp.task('watch:localServer',['localServer', 'sass', 'css:libs'], function () {
    gulp.watch(paths.js, ['localServer']),
    gulp.watch([paths.sass.common, paths.sass.blocks], ['sass'])
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

gulp.task('build:local', ['localServer', 'sass', 'css:libs', 'bundle:js']);
gulp.task('build:server', ['server', 'sass', 'css:libs', 'bundle:js']);
