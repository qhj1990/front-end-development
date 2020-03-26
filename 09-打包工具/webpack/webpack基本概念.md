# webpack

Webpack 启动后会从 Entry 里配置的 Module 开始递归解析 Entry 依赖的所有 Module。
每找到一个 Module， 就会根据配置的 Loader 去找出对应的转换规则，对 Module 进行转换后，再解析出当前 Module 依赖的 Module。
这些模块会以 Entry 为单位进行分组，一个 Entry 和其所有依赖的 Module 被分到一个组也就是一个 Chunk。
最后 Webpack 会把所有 Chunk 转换成文件输出。
在整个流程中 Webpack 会在恰当的时机执行 Plugin 里定义的逻辑。

## webpack核心概念

### 入口entry

将需要构建的文件的放在该入口

* 字符串：单文件路径
* 数组：多个入口文件
* 对象：配置多入口，每个入口生成一个chunk

### 输出output

输出最后的代码，以及命名这些文件和路径

* 输出单个文件
  filename: 'bundle.js'
* 输出多个文件
  filename: '[name].[hash:8].js'

### loader

webpack本身只能处理js和json文件。loader允许webpack处理其他类型的文件

loader有两个属性

* test: 标示出应该被loader进行转换的某个或某些文件
* use: 使用哪个loader

### loader执行顺序

一组loader执行顺序为从右到左

### 插件plugin

在webpack运行的生命周期中会有很多事件，plugin处理的是这些事件中，处理一些任务、监听事件，执行回调函数

插件可以用于执行范围更广的任务，打包优化，资源管理，注入环境变量。 比loader执行的任务更加广泛一点

#### plugin complier和compliation

Compiler 对象包含了 Webpack 环境所有的的配置信息，包含 options，loaders，plugins 这些信息，这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例；

Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。通过 Compilation 也能读取到 Compiler 对象。

Compiler 和 Compilation 的区别在于：

Compiler 代表了整个 Webpack 从启动到关闭的生命周期，而 Compilation 只是代表了一次新的编译。

### 模式mode

mode有三种development、production（默认）、node，分别启用webpack内置相应环境。不同的变量设置不同的打包行为
