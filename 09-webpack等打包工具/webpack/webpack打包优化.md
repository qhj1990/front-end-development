# webpack打包优化

## 体积优化

### 分析

[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 能够直观的看到模块的大小，以及有哪些模块组成。

```Bash
npm install webpack-bundle-analyzer
```

### 引入DllPlugin 和DllReferencePlugin

将特定的第三方NPM包模块提前构建，然后通过页面引入。

### 外部引入CDN

常用库，可以使用externals予以指定，webpack不会将这些进行打包

### 第三方包

### 压缩代码

[uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) 这插件可以

```Bash
npm install uglifyjs-webpack-plugin --save-dev
```

### 不必要的库不引入，如jQuery

### 避免类库引入但不使用

使用eslint进行检查，对声明但未使用的代码予以提醒

### 尽量使用模块话引入

### 引入更合适的包

找到体积小的能满足功能的包

## 按需异步加载模块

异步加载，代码分割时能分割成对应的chunk

## 生产环境，压缩混淆并移除console