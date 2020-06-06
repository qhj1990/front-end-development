# Gulp

## gulp相关文档

* [Gulp](https://gulpjs.com/)
* [Gulp中文网](https://www.gulpjs.com.cn/)
* [awesome-gulp](https://github.com/alferov/awesome-gulp)
* [awesome-gulp-cn](https://github.com/Pines-Cheng/awesome-gulp-cn)

## gulp入门

### 1.全局安装

```shell
npm install -g gulp-cli
```

### 2.作为项目的依赖（devDenpendencies）安装

```shell
npm install --save-dev gulp
```

### 3.项目根目录下创建gulpfile.js文件

```shell
touch gulpfile.js
```

```javascript
// gulpfile.js
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
const autoprefixer = require('gulp-autoprefixer'); // 根据浏览器版本自动添加前缀
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
const jshint = require('gulp-jshint');
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
```

### 4.运行gulp

```shell
gulp
```

默认会执行default任务

## gulp API

* src() 读取文件
* dest() 写入文件
* symlink()
* lastRun()
* series() 按顺序进行task
* parallel() 同时进行多个task
* task(name[,deps], fn) 定义一个task，任务的名称，依赖，和执行的内容
* watch() 监听文件，执行任务
* registry()
* tree()
* Vinyl
* Vinyl.isVinyl()
* Vinyl.isCustomProp()

## gulp常用插件

### 编译

* [gulp-sass](https://github.com/dlmanning/gulp-sass)  sass转换成css
* [gulp-less](https://github.com/gulp-community/gulp-less) less预处理为css
* [gulp-postcss](https://github.com/postcss/gulp-postcss)
* [cssnano](https://github.com/cssnano/cssnano) postcss插件
* [uncss](https://github.com/uncss/postcss-uncss) postcss插件，移除未使用的css
* [gulp-react](https://github.com/sindresorhus/gulp-react)   Facebook React JSX 模板编译成JavaScript.
* [gulp-coffee](https://github.com/gulp-community/gulp-coffee)
* [gulp-babel](https://github.com/babel/gulp-babel) es6 编译成es5

### 模板

* [gulp-pug](https://github.com/gulp-community/gulp-pug) pug html
* [gulp-nunjucks](https://github.com/sindresorhus/gulp-nunjucks)
* [gulp-handlebars](https://github.com/lazd/gulp-handlebars) templates → JS
* [gulp-hb](https://github.com/shannonmoeller/gulp-hb) templates → HTML.

### 合并

* [gulp-concat](https://github.com/gulp-community/gulp-concat) 合并文件

### 压缩

* [gulp-uglify](https://github.com/terinjokes/gulp-uglify) 压缩js
* [gulp-clean-css](https://github.com/scniro/gulp-clean-css) 压缩css
* [gulp-csso](https://github.com/ben-eb/gulp-csso) 压缩css
* [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)    压缩PNG，JPEG，GIF，SVG
* [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin)  压缩HTML
* [gulp-svgmin](https://github.com/ben-eb/gulp-svgmin)
* [gulp-zip](https://github.com/sindresorhus/gulp-zip) 压缩成zip文件

### 代码校验

* [gulp-csslint](https://github.com/lazd/gulp-csslint)
* [gulp-htmlhint](https://github.com/bezoerb/gulp-htmlhint)
* [gulp-jshint](https://github.com/spalger/gulp-jshint) js代码检测
* [gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint))
* [gulp-eslint](https://github.com/adametry/gulp-eslint)
* [gulp-lesshint](https://github.com/lesshint/lesshint)

### 资源注入

* [gulp-inject](https://github.com/klei/gulp-inject) 指定的css或js文件以标签的形式插入到HTML中的指定标志内
* [gulp-useref](https://github.com/jonkemp/gulp-useref) 解析HTML文件中特殊标签里面的script或style标签，合并成一个script或css文件，并替换

### 实时加载

* [gulp-livereload](https://github.com/vohof/gulp-livereload) 自动刷新
* [browser-sync](https://github.com/BrowserSync/browser-sync) 保证多个浏览器或设备网页同步显示

### 流程控制

* [gulp-if](https://github.com/robrich/gulp-if) 条件处理
* [run-sequence](https://github.com/OverZealous/run-sequence) 队列

### 日志

* [gulp-notify](https://github.com/mikaelbr/gulp-notify)

### 其他

* [gulp-rev](https://github.com/sindresorhus/gulp-rev) 在静态文件名的后面添加hash值，如: unicorn.css → unicorn-d41d8cd98f.css.
* [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps)
* [gulp-plumber]() 记录错误信息
* [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) 自动添加css前缀，用postcss插件代替
* [gulp-csscomb](https://github.com/koistya/gulp-csscomb) css格式化
* [gulp-rename](https://github.com/hparra/gulp-rename) 重命名
* [gulp-clean](https://github.com/peter-vilja/gulp-clean) 清空文件
* [del](https://github.com/sindresorhus/del) 删除文件
* [gulp-uncss](https://github.com/ben-eb/gulp-uncss) 移除未使用的CSS选择器通过， 用post-uncss代替
* [gulp-responsive](https://github.com/mahnunchik/gulp-responsive) - 生成不同尺寸的图片
