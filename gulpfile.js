'use strict';

const {src, dest, watch, parallel} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const ts = require('gulp-typescript')
const browserSync = require('browser-sync').create()
const uglify = require('gulp-uglify-es').default

function browser_sync() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
}

function styles() {
    return src('./src/css/style.scss')
        .pipe(
            sass({outputStyle: 'compressed'})
                .on('error', sass.logError)
        )
        .pipe(concat('style.min.css'))
        .pipe(dest('./src/css'))
        .pipe(browserSync.stream())
}

function scripts() {
    return src(['./src/js/main.ts'])
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.min.js',
            noEmitOnError: true,
        }))
        .pipe(uglify())
        .pipe(dest('./src/js'))
        .pipe(browserSync.stream())
}

function watching() {
    watch(['./src/css/**/*.scss'], styles)
    watch(['./src/js/**/*.ts'], scripts)
    watch(['./src/*.html'])
        .on('change', browserSync.reload)
}

exports.styles = styles
exports.scripts = scripts
exports.watching = watching
exports.browser_sync = browser_sync
exports.build = parallel(styles, scripts)


exports.default = parallel(browser_sync, watching)