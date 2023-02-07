const GULP = require('gulp');
const SASS = require('gulp-sass')(require('sass'));
const IMAGEMIN = require('gulp-imagemin');
const UGLIFY = require('gulp-uglify');

function scripts() {
    return GULP.src('./src/scripts/*.js')
        .pipe(UGLIFY())
        .pipe(GULP.dest('./dist/js'))
}

function styles() {
    return GULP.src('./src/styles/*.scss')
        .pipe(SASS({outputStyle: 'compressed'}))
        .pipe(GULP.dest('./dist/css'))
}

function images() {
    return GULP.src('./src/assets/*')
        .pipe(IMAGEMIN())
        .pipe(GULP.dest('./dist/images'))
}

exports.default = GULP.parallel(styles, images, scripts);
exports.watch = function () {
    GULP.watch('./src/styles/*.scss', GULP.parallel(styles))
    GULP.watch('./src/scripts/*.js', GULP.parallel(scripts))
};