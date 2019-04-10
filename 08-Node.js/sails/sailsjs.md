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
  * env 不同的环境允许不同的任务
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
  * globals.js
  * http.js
  * i18n.js
  * local.js
  * log.js
  * models.js
  * policies.js
  * routes.js
  * security.js
  * session.js
  * sockets.js
  * views.js sails默认使用ejs渲染html，在次可以修改为其他的模板引擎
* tasks
  * config
    * babel.js Grunt任务：ES8 ES7 ES6转化为ES5。默认只会吧assets/js文件夹下的js文件才会转为旧浏览器可允许的代码
    * clean.js
    * coffee.js
    * concat.js
    * cssmin.js
    * hash.js
    * jst.js
    * less.js
    * sails-linker.js
    * sync.js
    * uglify.js
    * watch.js
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
* .sailsrc
* app.js
* Gruntfile.js
* package.json
* README.md
