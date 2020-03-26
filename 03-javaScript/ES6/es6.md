# es6

## 在线资源

* [ECMAScript 6 入门  阮一峰](http://es6.ruanyifeng.com/)
* [《Understanding ECMAScript 6》中文版](https://sagittarius-rev.gitbooks.io/understanding-ecmascript-6-zh-ver/content/)
* [ecma262文档](https://tc39.github.io/ecma262/)
* [ecma262](https://github.com/tc39/ecma262) ecma262 状态，进度，文档

## es6转es5

使用babel编译

## let const声明

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

对象解构赋值

数组解构赋值

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

## 字符串

1. 模板字符串
反引号（`）

## 函数

1. 默认参数
2. rest参数 ...参数名
3. 函数内部可以设定为严格模式
4. 函数的name属性，返回该函数的函数名
5. 箭头函数。箭头函数本身没有this，会一级一级向上找，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象

## Proxy

代理

## promise

Promise 是异步编程的一种解决方案

### promise三种状态

pending、fulfilled、reject，状态改变了就不会再变化，就resolved定型了

## async/await

* async表明该函数内部是异步操作，返回一个Promise 对象
* await表面该函数后面的部分需要等到异步操作完成才会继续执行后面的语句
* async函数可以使用then方法来操作
* await不能用在普通函数中，会报错

## class

定义类，是让对象原型的写法更加清晰、更像面向对象编程的语法

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var mypoint = new Point()
```

类的所有方法都定义在类的prototype属性上面,类的内部所有定义的方法，都是不可枚举的（non-enumerable）。

### 注意

* 不存在变量提升
* name属性为类名
* this指向类的实例

## module模块

```javascript
import { stat, exists, readFile } from 'fs';
```

## Decorator装饰器

第三方模块[core-decorators.js](https://github.com/jayphelps/core-decorators)

1. 类的装饰
2. 方法的装饰
