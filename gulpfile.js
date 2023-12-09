const { src, dest, watch, parallel, series } = require('gulp')

const scss = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')
const ttf2woff2 = require('gulp-ttf2woff2')
const browserSync = require('browser-sync').create()
const clean = require('gulp-clean')


function styles() {
    return src('app/scss/styles.scss')
        .pipe(concat('style.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function scripts() {
    return src('app/js/main.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function images() {
    return src('app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(webp())
        .pipe(dest('dist/images'))
}

function fonts() {
    return src(['app/fonts/**/*.ttf'])
        .pipe(ttf2woff2())
        .pipe(dest('dist/fonts/'))
}

function browsersync(){
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    })
}

function watching() {
    watch(['app/scss/styles.scss'], styles)
    watch(['app/js/main.js'], scripts)
    watch(['app/*.html']).on('change', browserSync.reload)
}

function cleaning() {
    return src('dist', {allowEmpty: true})
    .pipe(clean())
}

function building() {
    return src([
        'app/css/style.min.css',
        'app/js/main.min.js',
        'app/images/**/*.+(png|jpg|gif|svg)',
        'app/fonts/**/*.woff2',
        'app/index.html'
    ], {base: 'app'})
    .pipe(dest('dist'))
}

exports.styles = styles
exports.scripts = scripts
exports.images = images
exports.fonts = fonts
exports.browsersync = browsersync
exports.watching = watching
exports.build = series(cleaning, building)

exports.default = parallel(styles, scripts, browsersync, watching)