var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		htmlmin = require('gulp-htmlmin'),
		uglify = require('gulp-uglify'),
		cssnano = require('gulp-cssnano'),
		autoprefixer = require('gulp-autoprefixer');

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: "app"
		}
	});
	gulp.watch("app/**/*.*").on('change', browserSync.reload);
});

gulp.task('prefixer', function () {
	gulp.src('app/**/*.css')
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('dist'));
});

gulp.task('minifyJS', function() {
  return gulp.src('app/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('minifyHtml', function() {
	gulp.src('app/**/*.html')
	.pipe(htmlmin({
		collapseWhitespace: true,
		removeComments: true,
		minifyJS: true,
		minifyCSS: true
	}))
	.pipe(gulp.dest('dist'))
});

gulp.task('minifyCSS', function() {
	gulp.src('app/**/*.css')
	.pipe(cssnano({
		discardComments: {removeAll: true}
	}))
	.pipe(gulp.dest('dist'));
});

gulp.task('minify', ['minifyJS', 'minifyHtml', 'minifyCSS']);
