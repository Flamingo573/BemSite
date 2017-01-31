'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const bs = require('browser-sync').create();
const bemjson2bl = require('bemjson2bl');
const html2bl = require('html2bl');
const through2 = require('through2').obj;
const path = require('path');


const params = {
    out: './public',
    htmlSrc: './public/index.html',
    bemjsonSrc: './index.bemjson.js',
    levels: ['./common.blocks']
};

const getFileNamesJson = bemjson2bl.getFileNames(params);

gulp.task('bemhtml', function(callback) {
    getFileNamesJson.then(function(file) {
        gulp.src(file.dirs.map((dir) => {
                return dir + '/**/*.bemhtml.js'
            }))
            .pipe($.concat('index.bemhtml.js'))
            .pipe(gulp.dest('./'))
            .on('end', callback);
    });

});


gulp.task('html', function(callback) {
    return gulp.src('./*.bemjson.js')
        .pipe($.plumber({
            errorHandler: $.notify.onError()
        }))
        .pipe($.bemjson2htmlUpdated({
            template: 'index.bemhtml.js'
        }))
        .pipe($.rename('index.html'))
        .pipe(gulp.dest('./public'))
});


gulp.task('css', (callback) => {
    html2bl.getFileNames(params).then((source) => {
        gulp.src(source.dirs.map((dir) => {
                return dir + '/**/*.{styl,css}';
            }))
            .pipe($.plumber({
                errorHandler: $.notify.onError()
            }))
            .pipe($.stylus())
            .pipe($.concat('styles.css'))
            .pipe($.cssUrlAdjuster({
                prepend: '/image/'
            }))
            .pipe($.autoprefixer())
            .pipe(gulp.dest('./public'))
            .on('end', callback)
    });
});


gulp.task('images', (callback) => {
    html2bl.getFileNames(params).then((source) => {
        gulp.src(source.dirs.map((dir) => {
                return dir + '/**/*.{png,svg,jpg,JPG}';
            }))
            .pipe(through2((file, enc, callback) => {
                file.base = file.dirname
                callback(null, file)
            }))
            .pipe($.imagemin())
            .pipe(gulp.dest('./public/image'))
            .on('end', callback)
    });
});

gulp.task('js', (callback) => {
    html2bl.getFileNames(params).then((source) => {
        gulp.src(source.dirs.map((dir) => {
                return dir + '/**/*.js';
            }))
            .pipe(through2((file, enc, callback) => {
                if (path.extname(file.stem)) return callback();
                callback(null, file)
            }))
            .pipe($.concat('app.js'))
            .pipe($.babel({
                presets: ['es2015']
            }))
            .pipe($.minify({
                ext: {
                    min: '.min.js'
                },
                noSource: true
            }))
            .pipe(gulp.dest('./public'))
            .on('end', callback)
    });
});

gulp.task('watch', function() {
    gulp.watch('{*.bemjson.js,common.blocks/**/*.bemhtml.js}', gulp.series('bemhtml', 'html'));
    gulp.watch('./common.blocks/**/*.{styl,css}', gulp.series('css'));
    gulp.watch(['common.blocks/**/*.js', '!common.blocks/**/*.bemhtml.js'], gulp.series('js'))
});

gulp.task('bs', function() {
    bs.init({
        server: './public'
    });
    bs.watch('./public/**/*.*').on('change', bs.reload);
});


gulp.task('default', gulp.series('bemhtml', 'html', 'css', 'js', 'images', gulp.parallel('watch', 'bs')));
