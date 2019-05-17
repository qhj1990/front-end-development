# npm-scripts使用

package.json 中scripts对象配置的脚本，可以通过npm run script-name来执行。每当执行npm run时，会自动新建一个Shell，会将当前目录的node_modules/.bin子目录假如PATH变量，执行结束后，PATH变量会恢复。

[文档](https://www.npmjs.com.cn/misc/scripts/)

## 通配符

npm脚本即为shell脚本，可以使用shell的通配符。 * 代表任意文件名，** 代表任意一层子目录。

为防止被转义，要将*符号转义

## 变量

### package.json中的字段

通过npm_package_前缀，npm 脚本可以拿到package.json里面的字段

### env

env可以列出所有环境变量

### 跨环境设置变量cross-env

windows不支持NODE_ENV=development的设置模式

## 参数

npm 脚本传入参数，要使用--标明。

## 执行顺序

如果要执行多个任务，需要明确执行顺序

1. &同时执行

```shell
npm run script1 & npm run script2
```

2. && 前一个任务执成功后再执行下一个任务。

```shell
npm run script1 && npm run script2
```

## 钩子

pre和post

默认钩子

* prepublish, postpublish
* preinstall, postinstall
* preuninstall, postuninstall
* preversion, postversion
* pretest, posttest
* prestop, poststop
* prestart, poststart
* prerestart, postrestart

npm_lifecycle_event变量，返回当前正在允许的脚本名称。

执行npm run start时，会自带先执行npm run prestart,再执行npm run start，然后执行npm run poststart

```shell
npm run prebuild && npm run build && npm run postbuild
```

## 简写

默认钩子的都可以简写，去掉run。 直接执行npm start, npm stop等