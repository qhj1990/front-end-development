# vue-cli

vue项目脚手架工具, 并有图形化界面管理vue项目。

* CLI(@vue/cli)
  * vue create
  * vue serve
  * vue ui
    > vue ui图形化界面引导创建项目
* CLI 服务(@vue/cli-service) 开发依赖环境
  > 需要全局安装 @vue/cli-service, 执行vue serve可进行快速原型开发，对.vue单文件
* CLI插件@vue/cli-plugin-

## 安装

```shell
npm install -g @vue/cli
# 或者
yarn global add @vue/cli
```

## 环境变量

默认有三个模式: development 模式, production模式, test 模式

```text
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

文件内容只包含环境变量的“键=值”对

## 配置

### 全局CLI配置

vue config命令可以查看全局配置文件.vuerc的json文件

### 目标浏览器

可在package.json文件里的browserslist对象或者.browserslistrc文件指定目标浏览器的范围。这个值会被 @babel/preset-env 和 Autoprefixer 用来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀。

如何指定范围[browserslist](https://github.com/browserslist/browserslist)

### vue.config.js

若项目的根目录中存在vue.config.js文件，会自动加载配置

### babel

为了ES版本的兼容性，可以通过 babel.config.js 进行配置。

### ESLint

.eslintrc 或者 package.json 中的 eslintConfig 字段来配置。

### TypeScript

tsconfig.json配置

### 单元测试

#### Jest

#### Mocha

### E2E测试

#### Cypress

#### Nightwatch