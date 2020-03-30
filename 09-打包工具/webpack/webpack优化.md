# webpack打包优化

## 缩小文件搜索范围

* 配置Loader 时可以通过 test 、 include 、 exclude
* 通过配置 resolve.alias 可以让 Webpack 在处理 React 库时，直接使用单独完整的 react.min.js 文件，从而跳过耗时的递归解析操作。

## 体积优化

### 分析

[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 能够直观的看到模块的大小，以及有哪些模块组成。

```Bash
npm install webpack-bundle-analyzer
```

### 引入DllPlugin 和DllReferencePlugin

将特定的第三方NPM包模块提前构建，然后通过页面引入。

### 第三方包

### 压缩代码

uglify

[uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) 这插件可以

```Bash
npm install uglifyjs-webpack-plugin --save-dev
```

### IgnorePlugin

忽略一些不必要的语言国际化的文件

### externals

如jQuery，可以使用externals予以指定，webpack不会将这些进行打包，改用外部引入CDN

### 避免类库引入但不使用

使用eslint进行检查，对声明但未使用的代码予以提醒

### 尽量使用模块化引入

### 引入更合适的包

找到体积小的能满足功能的包

### 提取公共的依赖，避免重复打包

commonsChunkPlugin

### 借助 webpack-bundle-analyzer 进一步优化

### 按需异步加载模块

异步加载，代码分割时能分割成对应的chunk

### 生产环境，压缩混淆并移除console

基本配置，开发和生成代码的config 配置 分开，merge来合并
