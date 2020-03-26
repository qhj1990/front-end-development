const {src, dest, task, watch } = require('gulp');

const notify = require('gulp-notify'); // 通知提醒

/**
 * 文件处理
 */
const rename = require('gulp-rename'); // 重命名
const clean = require('gulp-clean'); // 删除文件
const del = require('del');
const concat = require('gulp-concat'); // 文件合并
const filter = require('gulp-filter'); // 过滤文件

 /**
  * css
  */
const autoprefixer = require('gulp-autoprefixer'); //根据浏览器版本自动添加前缀
const uncss = require('gulp-uncss'); // 移除未使用的css

/**
 * 编译相关
 */
const sass = require('gulp-sass'); // sass文件编译为css文件
const less = require('gulp-less'); // 编译less文件
const stylus = require('gulp-stylus'); // stylus
const coffee = require('gulp-coffee'); // coffee
const typescript = require('gulp-typescript'); // typescript
const babel = require('gulp-babel'); // 编译ES6
const react = require('gulp-react'); // react jsx转为js

/**
 * 压缩
 */
const uglify  = require('gulp-uglify'); // 压缩js
const cleancss = require('gulp-clean-css'); // 压缩css
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin'); // 压缩HTML
const imagemin = require('gulp-imagemin'); // 压缩PNG，JPEG，GIF，SVG图片
const pngquant = require('imagemin-pngquant'); // 深度压缩图片
const zip = require('gulp-zip'); // zip压缩文件

/**
 * 校验相关
 */

const csslint = require('gulp-csslint'); // 自动校验CSS
const htmlhint = require('gulp-htmlhint'); // 校验HTML
const jshint = require('gulp-jshint'); // 
const tslint = require('gulp-tslint'); // Typescript 代码校验

/**
 * hash
 */

const rev = require('gulp-rev'); // 给静态资源文件名添加hash
const revCollector = require('gulp-rev-collector'); // 给资源文件添加时间戳

/**
 * 格式化format
 */

const csscomb = require('gulp-csscomb');

/**
 * 资源注入
 */
const useref = require('gulp-useref'); 


/**
 * 自动重启
 */

 const livereload = require('gulp-livereload');

/** 
 * 流程控制
*/
const gulpif = require('gulp-if'); // 条件运行任务