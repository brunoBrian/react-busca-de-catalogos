const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const reactEasy = require('gulp-react-easy');


gulp.task('default', ['js', 'watch']);

gulp.task('watch', function () {
	gulp.watch('./src/js/**/*', ['js']);
});

gulp.task('js', function () {
	return reactEasy({
		file: './src/js/app.jsx',
		debug: true
	})
	.to('app.js')
	.pipe(gulp.dest('./dist/js/'));
});