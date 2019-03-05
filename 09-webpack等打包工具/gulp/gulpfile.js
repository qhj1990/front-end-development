const {src, dest, task, watch } = require('gulp');


const notify = require('gulp-notify'); // 通知提醒


const sass = require('gulp-sass'); // sass文件编译为css文件
const autoprefixer = require('gulp-autoprefixer'); //根据浏览器版本自动添加前缀

const concat = require('gulp-concat'); // 文件拼接

const uglify  = require('gulp-uglify'); // 压缩js