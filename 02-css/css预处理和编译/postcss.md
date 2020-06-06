# postcss

使用插件转化css代码

* 使用下一代最新的语法
* autoprefixer添加浏览器前缀
* css代码压缩

## 资源

* [官网](https://postcss.org/)
* [中文翻译](https://www.postcss.com.cn/)
* [github](https://github.com/postcss/postcss)

## 常见插件

1. Autoprefixer
2. postcss-cssnext
3. cssnano
4. postcss-pxtorem

## 使用

### webpack集成

1. 安装postcss-loader

```shell
# 安装webpack postcss loader
npm i -D postcss-loader
# 安装cssnao
npm i -D cssnao
# 安装autoprefixer
npm i -D autoprefixer
```

2. 配置.browserslist文件

```
> 1%
last 2 versions
not ie <= 10
```

3. postcss.config.js

```js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

4. webpack.config.js配置

```js
{
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        plugins: [
          require('autoprefixer')
        ]
      }
    }
  ]
}
```

5. 运行webpack

### gulp集成

1. 安装gulp-postcss

```shell
npm install --save-dev gulp-postcss
npm install --save-dev autoprefixer
npm install --save-dev cssnano
```

2. 编写gulpfile.js

```js
const {src, dest, task, watch } = require('gulp');
const autoprefixer = require('autoprefixer'); // 根据浏览器版本自动添加前缀
const cssnano = require('cssnano');
gulp.task('css', function () {
  const plugins = [
    autoprefixer({browsers: ['last 1 version']}),
    cssnano()
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dest'));
});
```

3. 运行gulp

```shell
gulp
```
