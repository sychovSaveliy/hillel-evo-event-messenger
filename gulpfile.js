const gulp        = require('gulp');
const sass        = require('gulp-sass');
const concat      = require('gulp-concat');
const sourcemaps  = require('gulp-sourcemaps');
const rimraf      = require('rimraf');



gulp.task('js', function () {
    return gulp.src([
            'app/src/**/*.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('bin/js'))
});

gulp.task('sass', function () {
    return gulp.src('app/src/**/*.sass')
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
    gulp.watch('app/src/**/*.js',  gulp.series('js')),
    gulp.watch('app/src/**/*.sass',  gulp.series('sass'))

});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('sass', 'js'),
    gulp.parallel('watch')
));