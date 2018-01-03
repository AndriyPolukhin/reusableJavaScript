//  ////////////////////////////////////
//             REQUIRED
//  //////////////////////////////////

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    compass = require('gulp-compass'),
    rename = require('gulp-rename');

//  ////////////////////////////////////
//             SCRI{TS TASK
//  ///////////////////////////////////

gulp.task('scripts', function () {
    gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});



//  ////////////////////////////////////
//             COMPASS / Sass  TASK
//  ///////////////////////////////////

gulp.task('compass', function () {
    gulp.src('app/scss/style.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'app/css',
            sass: 'app/scss',
            require: ['susy']
        }))
        .pipe(gulp.dest('app/css/'));
})



//  ////////////////////////////////////
//             WATCH TASK
//  ///////////////////////////////////

gulp.task('watch', function () {
    gulp.watch('app/js/**/*.js', ['scripts']);
    gulp.watch('app/scss/**/*.scss', ['compass']);
});


//  ////////////////////////////////////
//             DEAFULT TASK
//  ///////////////////////////////////


gulp.task('default', ['scripts', 'watch', 'compass']);
