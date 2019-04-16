# gulp

## gulp相关文档

* [Gulp](https://gulpjs.com/)
* [Gulp中文网](https://www.gulpjs.com.cn/)
* [awesome-gulp](https://github.com/alferov/awesome-gulp)
* [awesome-gulp-cn](https://github.com/Pines-Cheng/awesome-gulp-cn)

## gulp入门

### 1.全局安装

```
npm install -g gulp-cli
```

### 2.作为项目的依赖（devDenpendencies）安装

```
npm install --save-dev gulp
```

### 3.项目根目录下创建gulpfile.js文件

```
touch gulpfile.js
```

### 4.运行gulp

```
gulp
```

默认会执行default任务

## gulp API

- src() 读取文件
- dest() 写入文件
- symlink()
- lastRun()
- series()
- parallel()
- task(name[,deps], fn) 定义一个task，任务的名称，依赖，和执行的内容
- watch() 监听文件，执行任务
- registry()
- tree()
- Vinyl
- Vinyl.isVinyl()
- Vinyl.isCustomProp()

## gulp常用插件

### 编译

* gulp-sass  sass转换成css
* gulp-less less预处理为css
* gulp-react   Facebook React JSX 模板编译成JavaScript.

### 压缩

* gulp-uglify 压缩js
* gulp-clean-css 压缩css
* gulp-imagemin     压缩PNG，JPEG，GIF，SVG
* gulp-htmlmin  压缩HTML

### 代码校验

* [gulp-csslint]()
* [gulp-htmlhint]()
* [gulp-jshint]() js代码检测
* [gulp-tslint]()
* [gulp-eslint]()
* [gulp-lesshint](https://github.com/lesshint/lesshint)

### 日志

* [gulp-notify](https://github.com/mikaelbr/gulp-notify)

* gulp-sourcemaps
* gulp-plumber   记录错误信息
* gulp-livereload     自动刷新
* gulp-autoprefixer  css前缀
* gulp-contact    合并文件
* gulp-rename   重命名
* gulp-clean  清空文件
* gulp-uncss   移除未使用的CSS选择器通过
* gulp-responsive - 生成不同尺寸的图片
