# webpack

## webpack核心概念

### 入口entry

将需要构建的文件的放在该入口

### 输出output

输出所创建的bundle，以及命名这些文件

### loader

webpack本身只能处理js和json文件。loader允许webpack处理其他类型的文件

loader有两个属性

test: 标示出应该被loader进行转换的某个或某些文件
use: 使用哪个loader

常用loader

文件

转译

* [script-loader]()
* [babel-loader]()
* [buble-loader]()
* [traceur-loader]()
* [ts-loader]()
* [coffee-loader]()
* [fengari-loader]()

模板

* [html-loader]()
* [pug-loader]()
* [markdown-loader]()
* [react-markdown-loader]()
* [posthtml-loader]()
* [handlebars-loader]()
* [markup-inline-loader]()
* [twig-loader]()

样式

* [style-loader]() 将模块的导出作为样式添加到DOM中
* [css-loader]() 解析CSS文件，使用import加载，并返回CSS代码
* [less-loader]() 加载和转译LESS文件
* [sass-loader]() 加载和转译 SASS/SCSS文件
* [postcss-loader]() 使用postcss加载和转译css文件

### 插件plugin

插件可以用于执行范围更广的任务，打包优化，资源管理，注入环境变量

### 模式mode

mode有三种development、production（默认）、node，分别启用webpack内置相应环境。不同的变量设置不同的打包行为