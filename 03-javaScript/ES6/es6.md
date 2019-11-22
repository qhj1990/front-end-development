# es6

## 在线资源

* [ECMAScript 6 入门  阮一峰](http://es6.ruanyifeng.com/)
* [《Understanding ECMAScript 6》中文版](https://sagittarius-rev.gitbooks.io/understanding-ecmascript-6-zh-ver/content/)
* [ecma262文档](https://tc39.github.io/ecma262/)
* [ecma262](https://github.com/tc39/ecma262) ecma262 状态，进度，文档
  
## 声明

var和function命令声明的全局变量，时顶层对象（window, global）的属性,let和const class声明的全局变量不属于顶层对象的属性

### let

* 声明变量，声明时可以不赋值
* 块作用域
* 不存在变量提升
* 暂时性死锁，块级作用域内，变量声明之前都是暂时性死区TDZ

### const

* 声明常量，声明时必须同时赋值。变量指向的内存地址锁保存的数据不得改动
* 不允许重复赋值
* 块级作用域
* 不存在变量提升
* 暂时性死锁

## 解构赋值

## Set和Map

### Set

不含重复值的有序列表

```javascript
let set = new Set();
set.add(5);
set.add('5');

console.log(set.size);
```

* new Set()
* set.add()
* set.size
* set.delete()
* set.clear()
* set.has()
* set.keys()
* set.values()
* set.entries()
* set.forEach()

### WeakSet

WeakSet的成员只能时对象，不能为其他类型的值

* weakset.add()
* weakset.delete()
* weakset.has()

### Map

键值对的有序集合，键和值都可以时任何类型的

* map.size 键值对数量
* map.has() 潘队指定的键是否存在与Map中
* map.get()
* map.set()
* map.delete() 移除Map中的键和对应的值
* map.clear() 移除所有键值对

### weakMap

所有的键必须是非Null对象，键值对无序, 没有遍历操作

* weakMap.set()
* weakMap.get()
* weakMap.has()
* weakMap.delete()
