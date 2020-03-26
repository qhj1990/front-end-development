# webpack常用功能

## 代码风格code splitting

```javascript
const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        publicPath: __dirname + '/dist/', // js 引用的路径或者 CDN 地址
        path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
        filename: '[name].bundle.js', // 代码打包后的文件名
        chunkFilename: '[name].js' // 代码拆分后的文件名
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    name: 'vendors'
                }
            }
        }
    },
    plugins: [new CleanWebpackPlugin()]
}
```

webpack4内置了代码分割，chunks: 'async'代表风格异步代码， chunks: 'all' 代表分割所有代码, 默认为async。默认只分割 node_modules中的模块

* chunks: 分割异步代码或者所有代码
* priority： 值越高，优先级越高的会先被打包
* minChunks公用多少此的模块选择分割
* minSize 超过多少大小就进行压缩 默认为30000  30kb
* name 分割后代码快的命名
* test 用于规定缓存组婆培的文件位置

## 懒加载 lazy loading

## CSS处理

## 图片处理

## 字体文件处理

## 第三方js库
