const gulp = require('gulp');
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const ejs = require('gulp-ejs');
const terser = require('gulp-terser');
const rigger = require("gulp-rigger");
const del = require('del');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


function styles() {

	return gulp.src('src/assets_landing/scss/style.scss')
		.pipe(plumber())
		.pipe(sourcemap.init())
		.pipe(sass())
		.pipe(concat('style.css'))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(sourcemap.write('./'))
		.pipe(gulp.dest('build/assets_landing/css'))
		.pipe(browserSync.stream());
}

function scripts() {
	return gulp.src([
		'src/assets_landing/js/main.js'
	])
		.pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
		.pipe(concat('libs.min.js'))
		.pipe(plumber())
		.pipe(rigger())
		.pipe(gulp.dest('build/assets_landing/js'))
		.pipe(terser())
		.pipe(gulp.dest('build/assets_landing/js'))
		.pipe(browserSync.stream());
}

function script() {
	return gulp.src('src/assets_landing/js/libs/**/*.js')
		.pipe(gulp.dest('build/assets_landing/js/libs'))

}

function html() {
	return gulp.src('src/*.html')
		.pipe(plumber())
		.pipe(ejs())
		.pipe(gulp.dest('./build'))
		.pipe(browserSync.stream());
}

function img() {
	return gulp.src('src/assets_landing/img/**/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/assets_landing/img'))
}

function fonts() {
	return gulp.src('src/assets_landing/fonts/**/*.*')
		.pipe(gulp.dest('build/assets_landing/fonts'))

}

function og() {
	return gulp.src('src/assets_landing/og/**/*.*')
		.pipe(gulp.dest('build/assets_landing/og'))

}

function favicons() {
	return gulp.src('src/assets_landing/favicons/**/*.*')
		.pipe(gulp.dest('build/assets_landing/favicons'))

}

function clean() {
	return del(['build/*'])
}

function watch() {
	browserSync.init({
		server: {
			baseDir: "./build"
		}
	});

	gulp.watch('src/assets_landing/scss/**/*.scss', styles)
	gulp.watch('src/assets_landing/js/**/*.js', scripts)
	gulp.watch('src/*.html', html)
	gulp.watch('src/assets_landing/img/**/*.*', img)
	gulp.watch('src/assets_landing/fonts/**/*.*', fonts)
	gulp.watch('src/assets_landing/og/**/*.*', og)
	gulp.watch('src/assets_landing/og/**/*.*', favicons)
	gulp.watch("*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('script', script);
gulp.task('html', html);
gulp.task('img', img);
gulp.task('fonts', fonts);
gulp.task('og', og);
gulp.task('og', favicons);
gulp.task('del', clean);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles,scripts,script,html,img,fonts,og,favicons)));
gulp.task('dev', gulp.series('build','watch'));
