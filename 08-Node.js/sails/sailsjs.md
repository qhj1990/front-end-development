# Sails

Sails是在Node.js Express 和Socket.io的基础上构建。Node.js MVC框架

## sails资源

* [sails官网](https://sailsjs.com/)
* [sails github](https://github.com/balderdashy/sails)
* [sails中文文档](https://linxiaowu66.gitbooks.io/sailsjs/content/)

## 开始使用Sails

### 安装Sails

全局安装，mac系统需要在前面加sudo

```
npm install sails -g
```

### 创建app

```
sails new sails-project
```

会出现以下的选择

```
Choose a template for your new Sails app:
 1. Web App  ·  Extensible project with auth, login, & password recovery
 2. Empty    ·  An empty Sails app, yours to configure
 (type "?" for help, or <CTRL+> to cancel)
?
```

1 为 web app。 2为空白模板

### 启动app

cd sails-project && sails lift

可以在localhost:1337 看到已经启动的app

## sails app项目结构

* api
  * controllers
  * helpers
  * models
  * policies
* assets
  * dependendies
    * sails.io.js
  * images
  * js
  * styles
    * importer.less
  * templates
  * .eslintrc 最高级的编码规范，允许前端js代码和后端代码在Node.js程序
  * favicon.ico
* config 定制和配置文件
  * env 环境专用文件
    * production.js 当允许sails lift --prod时，这些设置将会载入
  * locales
    * de.json German德语
    * en.json English英语
    * es.json Espanish西班牙语
    * fr.json French法语
  * blueprints.js
  * bootstrap.js
  * custom.js
  * datastores.js
  * globals.js 配置全局变量
  * http.js 配置底层http和http中间件
  * i18n.js 国际化设置
  * local.js 设置一下个人系统的配置
  * log.js 将日志分为0-6不同的等级
  * models.js 该文件中的所有的properties都会包含在每一个models中
  * policies.js
  * routes.js 自定义路由配置，除了自定义路由之外还可能匹配Blueprint route， Assets里的文件，CSRF
  * security.js 全局安全设置CORS CSRF
  * session.js 告诉Sails哪里存储sessions,可用内置，也可使用mongodb和redis
  * sockets.js
  * views.js sails默认使用ejs渲染html，在次可以修改为其他的模板引擎
* tasks
  * config
    * babel.js Grunt任务：ES8 ES7 ES6语法转化为ES5。默认只会吧assets/js文件夹下的js文件才会转为旧浏览器可允许的代码
    * clean.js 清空.tmp/public文件
    * coffee.js 将assets/js中的coffeeScript文件编译代替.tmp/public/js/
    * concat.js
    * copy.js dev状态下将除了coffeescipt和less文件的所有文件和文件夹从assets文件夹复制到.tmp/public目录， build环境一下复制.tmp/public所有的文件复制到www目录
    * cssmin.js 压缩css文件代替到.tmp/public/min目录
    * hash.js 在缓冲busing文件名称后面创建和增加一个唯一的hash
    * jst.js 预编译underscore模板成.jst文件在客户端能够加速模板渲染，减少宽带使用
    * less.js 将less文件编译成css。只编译assets/styles/importer.less
    * sails-linker.js 讲js文件自动注入到script标签，将css文件自动注入到<link>
    * sync.js 当文件实际发生改变时，同步asset/ 文件夹到.tmp/public/
    * uglify.js 压缩客户端js资源。函数名和变量名都会改变，显著缩小文件大小
    * watch.js assets/文件下 文件增加，改变或者删除时，自动执行任务，无需重启sails 服务
  * register
    * build.js
    * buildProd.js
    * compileAssets.js
    * default.js
    * linkAssets.js
    * linkAseetsBuild.js
    * linkAssetsBuildProd.js
    * polyfill.js
    * prod.js
    * syncAssets.js
  * pipeline.js 决定哪个样式文件，js和客户端模板文件需要编译。链接成script和style文件
* views
  * layouts
    * layout.ejs 默认的布局模板
  * pages
    * homepage.ejs
  * .eslintrc
  * 404.ejs
  * 500.ejs
* .editorconfig
* .eslintignore
* .eslintrc
* .gitignore
* .htmlhintrc
* .sailsrc sails cli执行一个命令时，首先会寻找这个文件中的配置
* app.js
* Gruntfile.js
* package.json
* README.md

## sails命令行界面

### sails console

### sails debug

适用低版本Node，调试app

### sails generate

可以生成page, model, action, helper, controller, hook等等

### sails inspect

适用高版本Node，执行后，可用chrome devtools 来交互式调试app

### sails lift

默认是开发模式状态，启动服务

### sails new

新建sails app项目

### sails version

sails版本
