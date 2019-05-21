# js模块化

## 常用模块化方案

### commonjs

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

### AMD

### CMD

### ES6

### 教程

* [requirejs官网](https://requirejs.org/docs/start.html)
* [requirejs中文](http://www.requirejs.cn/)
* [sea.js官网](https://seajs.github.io/seajs/docs/) CMD规范，像Node.js一般书写模块代码，兼容所有主流浏览器