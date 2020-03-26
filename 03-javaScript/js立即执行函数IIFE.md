# IIFE立即执行函数

IIFE(Immediately Invoked Function Expression) 立即执行函数表达式。可以避免变量污染全局空间

## 常见的立即执行函数表达式

```javascript
(function(){
// 代码
})();

(function(){
// 代码
}());

;(function(){
// 代码
})();

```

## 其他IIFE

```javascript
(function(){
// 代码
}());

!function(){
  // 代码...
}();

+function(){
  // 代码...
}();

~function(){
  // 代码...
}();

var fn = function(){
  // 代码...
}();

```

## IIFE使用场景

jquery 代码主要结构

```javascript
(function( global, factory ) {
    // 代码
}(参数1, 参数2));
```

也是一个IIFE立即执行函数，只向外暴露$ jquery一个变量.

## 形参

IE8的undefined会被修改，形参传undefined能保证undefined不被串改。 代码压缩时，也能压缩一定大小
