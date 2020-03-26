# js模块化

## 常用模块化方案

### 1.commonjs

CommonJS是Node.js使用的模块化规范。每一个文件就是一个模块，有单独的作用域。

用require来加载模块，exports和module.exports暴露模块的内容

```javascript
module.exports = {

}
# 或者
exports.add = function(){

}
```

#### module对象

#### exports

exports变量，指向module.exports.

#### require

### 2.AMD

AMD采用异步加载模式，模块的加载不影响后面代码的运行。用require.js实现AMD规范的模块化，支持IE 6+ 以及其他现代浏览器

依赖前置：

#### 资源

* [requirejs官网](https://requirejs.org/docs/start.html)
* [requirejs中文](http://www.requirejs.cn/)
* [github](https://github.com/requirejs/requirejs)

#### requireJs使用

1. 需要引入require.js文件和一个入口文件main.js。
2. main.js中配置require.config()并规定项目中用到的基础模块。
3. 将模块配置到path中
4. 不符合AMD规范(jquery插件等)的利用shim来配置
5. 编写可执行代码

```javascript
/** 网页中引入require.js及main.js **/
<script src="js/require.js" data-main="js/main"></script>

/** main.js 入口文件/主模块 **/
// 首先用config()指定各模块路径和引用名
require.config({
  baseUrl: "js/lib", // 模块的基本路径
  paths: {
    "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
  },
  shim: { // 不遵循amd规范的，采用shim来
    'underscore': {
        exports: '_'
　　 },
    'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    }
　}
});
// 执行基本操作
require(["jquery", "underscore"], function($, _){
  // some code here
});

```

#### 编写模块

* 定义简单变量

```javascript
define({
    color: "black",
    size: "unisize"
});
```

* 定义函数

```javascript
define(function () {
    //Do setup work here
    return {
        color: "black",
        size: "unisize"
    }
});
```

* 定义有依赖的函数

```javascript
define(["./cart", "./inventory"], function(cart, inventory){
    //return an object to define the "my/shirt" module.
    return {
        color: "blue",
        size: "large",
        addToCart: function() {
            inventory.decrement(this);
            cart.add(this);
        }
    }
});
```

### 3.CMD

依赖后置。

#### sea.js

* [sea.js官网](https://seajs.github.io/seajs/docs/) CMD规范，像Node.js一般书写模块代码，兼容所有主流浏览器

Sea.js 遵循 CMD规范, 兼容所有主流浏览器  

### 4.ES6 Modules

浏览器和服务器通用。内部变量，外部无法获取。ES6模块自动为严格模式。编译时就加载，

#### import

部分引入

```javascript
import {firstName, lastName, year} from './profile.js';
```

全部引入

```javascript
import * as circle from './circle';
```

浏览器中使用

``` html
<script type="module">
    import x from './utils.js';
    console.log(x);
    export default x
</script>
```

#### export

一个模块是一个独立的文件

```javascript
function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
```

#### export default

vue 就采用export default。
