# jQuery

jQuery作为曾经一统江湖的框架有以下优势

* 良好的兼容性
* 简单快捷的选择器
* DOM操作
* ajax请求

## jQuery参考资料和文档

* [官网API](https://api.jquery.com/)

### 不同版本浏览器兼容性

浏览器| jQuery 1.12.4  | jquery 3
---|---|---
Chrome | row 1 col 1 | row 1 col 2
Edge | row 2 col 1 | row 2 col 2
Firefox | |
Internet Explorer |  |
Safari |  | 
Opera | current |
Android | |
iOS | |

## jQuery代码架构

立即执行函数

* sizzle选择器
* callbacks
* DOM操作
* ajax()
* css()
* data
* 元素属性的操作attr() prop() val()
* animate()
* event事件on()
* 位置和尺寸offset()
* 工具
* Query 变量冲突处理 window.jQuery=window.$ = jQuery

## jQuery插件

* 代码全部放在闭包里面
* 提供插件的默认选型
* 使用返回一个元素，方便链式调用
* 一次性代码放在主循环外

## jQuery.extend(object)

为jQuery类添加类方法，可以理解为添加静态方法

```javascript
jQuery.extend({
    min: function(a, b) { return a < b ? a : b; },
    max: function(a, b) { return a > b ? a : b; }
});
jQuery.min(2,3); //  2
jQuery.max(4,5); //  5
```

## jQuery.fn.extend(object)

jQuery.fn = jQuery.prototype

把对象挂载在jQuery的prototype属性上，jQuery对象添加方法

```javascript
jQuery.fn.extend({
    'highLight': function(){

    }
});
```
