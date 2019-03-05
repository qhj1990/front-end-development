const {src, dest, task, watch } = require('gulp');


const notify = require('gulp-notify'); // 通知提醒

const rename = require('gulp-rename'); // 重命名
const sass = require('gulp-sass'); // sass文件编译为css文件
const less = require('gulp-less'); // 编译less文件
const autoprefixer = require('gulp-autoprefixer'); //根据浏览器版本自动添加前缀
const uncss = require('gulp-uncss'); // 移除未使用的css

const concat = require('gulp-concat'); // 文件合并

const uglify  = require('gulp-uglify'); // 压缩js
const cleancss = require('gulp-clean-css'); // 压缩css
const htmlmin = require('gulp-htmlmin'); // 压缩HTML
const imagemin = require('gulp-imagemin'); // 压缩PNG，JPEG，GIF，SVG图片


const csslint = require('gulp-csslint'); // 自动校验CSS
const htmlhint = require('gulp-htmlhint'); // 校验HTML
const jshint = require('gulp-jshint'); // 
const tslint = require('gulp-tslint'); // Typescript 代码校验
