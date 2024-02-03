const gulp = require('gulp');
const fileInclide = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs'); // File System
const sourceMaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpack = require('webpack-stream');
// const babel = require('gulp-babel');
// const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');


// Объекты
const fileInclideSetting = {
    prefix: '@@',
    basepath: '@file'
}
const serverOptions = {
    livereload: true,
    open: true
}
const plumberNotify = (title) => {
    return {
        errorHandler: notify.onError({
            title: title,
            message: 'Error <%= error.message %>',
            sound: false,
        })
    }
}

// Сборка html файлов
gulp.task('html:dev', function() {
    return ( 
    gulp
        .src(['./src/html/**/*.html', '!./src/html/blocks/*.html'])
        .pipe(changed('./build/', { hasChanged: changed.compareContents }))
        .pipe(plumber(plumberNotify('HTML')))
        .pipe(fileInclide(fileInclideSetting))
        .pipe(gulp.dest('./build/'))
    )
})

// Компиляция SCSS
gulp.task('sass:dev', function() {
    return gulp
        .src('./src/scss/*.scss')
        .pipe(changed('./build/css/'))
        .pipe(plumber(plumberNotify('SCSS')))
        .pipe(sourceMaps.init())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./build/css/'));
})

// Копирование изображний
gulp.task('images:dev', function() {
    return gulp
        .src('./src/img/**/*')
        .pipe(changed('./build/img/'))
        // .pipe(imagemin({ verbose: true }))
        .pipe(gulp.dest('./build/img/'))
})

// Копирование шрифтов
gulp.task('fonts:dev', function() {
    return gulp
        .src('./src/fonts/**/*')
        .pipe(changed('./build/fonts/'))
        .pipe(gulp.dest('./build/fonts/'))
})

// Копирование файлов
gulp.task('files:dev', function() {
    return gulp
        .src('./src/files/**/*')
        .pipe(changed('./build/files/'))
        .pipe(gulp.dest('./build/files/'))
})

// 
gulp.task('js:dev', function() {
    return gulp
        .src('./src/js/*.js')
        .pipe(changed('./build/js/'))
        .pipe(plumber(plumberNotify('JS')))
        // .pipe(babel())
        .pipe(webpack(require('./../webpack.config.js')))
        .pipe(gulp.dest('./build/js'))
})

// Запуск сервера
gulp.task('server:dev', function() {
    return gulp
        .src('./build/')
        .pipe(server(serverOptions));
})

// Удаление папки dist
gulp.task('clean:dev', function(done) {
    if (fs.existsSync('./build/')) {
        return gulp
            .src('./build/', { read: false })
            .pipe(clean({ force: true }));
    }
    done();
})

// Watch
gulp.task('watch:dev', function() {
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass:dev'));
    gulp.watch('./src/**/*.html', gulp.parallel('html:dev'));
    gulp.watch('./src/img/**/*', gulp.parallel('images:dev'));
    gulp.watch('./src/fonts/**/*', gulp.parallel('fonts:dev'));
    gulp.watch('./src/files/**/*', gulp.parallel('files:dev')); 
    gulp.watch('./src/js/**/*.js', gulp.parallel('js:dev')); 
})