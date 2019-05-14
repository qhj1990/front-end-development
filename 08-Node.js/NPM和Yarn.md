# NPM和Yarn

<details>
<summary>目录</summary>

* [`NPM`](##NPM)
* [`Yarn`](##Yarn)

</details>

## NPM

### 常用网站

* [npm中文网](https://www.npmjs.cn/)
* [淘宝npm镜像](https://npm.taobao.org/)

### NPM 模块管理器

npm 不需要安装，在安装Node.js时候会同时安装npm

```// 查看当前npm 版本
npm -v
```

### npm set 设置环境变量

```npm set init-author-name 'Your name'
npm set init-author-email 'Your email'
npm set init-author-url 'http://yourdomain.com'
npm set init-license 'MIT'
```

npm init 时会自动使用这些预设的值

### npm config

### npm init

初始化一个项目，一步一步根据提示，输入项目相关内容，生成一个package.json文件。

```npm init --yes
npm init -y
```

这两个命令会跳过提示，直接生成package.json文件

### npm install 安装模块

npm 会检测node_modules目录中是否已经存在指导模块，若已存在则不安装。

```// 强制重新安装
- npm install <package name> --force

// 本次安装
npm install <package name>

// 全局安装
npm install -g <package name>

// 安装特定版本
npm install <package name>@0.1.1

// 安装依赖，会在package.json的dependencies
npm install <package name> --save

// 开发依赖,m会在package.json的devDependencies
npm install <package name> --save-dev
```

### npm uninstall 卸载模块

```npm uninstall [package name]

// 卸载全局模块
npm uninstall [package name] -global
```

### npm update 更新模块

```// 升级当前项目的指定模块
npm update [package name]

// 升级全局安装的模块
npm update -global [package name]
```

### npm run 执行script

npm 可以在项目package.json里面自定义脚本命令

简写的执行脚本

```npm start === npm run start
npm stop === npm run stop
npm test === npm run test
npm restart === npm run stop && npm run start
```

### pre- post-脚本

npm run lint 之前会检测是否有prelint 和postlint两个钩子，若有，会执行per post。依次执行，如果中间出错不再执行后续的脚本

```npm run prelint && npm run lint && npm run postlint
```

### npm list 列出已安装模块

```// 当前项目所有模块
npm list

// 全局安装的模块
npm list -g

// 单个模块
npm list [package name]
```

### npm info

```// 查看摸个模块的具体信息
npm info [package name]
```

## Yarn

### yarn 资料

- [官网](https://yarnpkg.com/zh-Hans/docs)
- [yarn中文网](https://yarn.bootcss.com/)

### yarn介绍

yarn安装速度快

### 搜索包

[官方](https://yarnpkg.com/zh-Hans/packages)

### 安装Yarn

```
brew install yarn
```

### 升级Yarn

```
brew upgrade yarn
```

### Yarn 版本

```
yarn --version
```

### 初始化项目

```shell
yarn init
```

### 添加依赖包

```shell
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

### 将依赖包添加到不同类别

```shell
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

### 升级依赖包

```shell
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

### 移除依赖包

```shell
yarn remove [package]
```

### 安装项目的所有依赖

```shell
yarn
```

### 执行自定义脚本

```shell
yarn run [script] [<args>]
```

### 全局安装

```shell
yarn global add [package]
```

### 固化依赖

使用 yarn.lock 文件来固化依赖，需要将该文件放到代码仓库，保持多个地方下载的包是一致的
