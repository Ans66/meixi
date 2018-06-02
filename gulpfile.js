const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

gulp.task('scss',function(){
	gulp.src('scss/*.scss').pipe(sass()).pipe(rename({'suffix':'.min'})).pipe(cssnano()).pipe(gulp.dest('css'));
})

gulp.task('meixi',function(){
	gulp.watch('scss/*.scss',['scss']);
})

gulp.task('js',function(){
	gulp.sec('js/*.js').pipe(uglify()).pipe(rename({'suffix':'.min'})).pipe(concat('all.min.js')).pipe(gulp.dest('js'));
})
