# JavaScript设计模式

Single Responsibility Principle 单一职责原则

## 单例模式

用对象字面量的方法，包含属性和一些方法

```javascript
var mySingleton = {
    property1: "something",
    property2: "something else",
    method1: function () {
        console.log('hello world')
    }
}
```

```javascript
var mySingleton = {
    var privateVariable = 'something private';
    function showPrivate () {
        console.log(privateVariable);
    }
    return {
        publicMethod: function () {
            showPrivate();
        },
        publicVar: 'the public can see this'
    }
}

var single = mySingleton();
single.publicMethod()
sinlge.publicVar;
```

## 工厂模式

工厂模式为了创建对象。设置公共构造函数

## 代理模式

为一个对象提供一个替身去控制对这个对象的访问

优势：

* 可以保护对象
* 优化性能，减少开销很大的对象
* 缓存结果

## 策略模式

定义一系列的算法，把它们一个个封装起来。将不变的部分和变化的部分隔开是每个设计模式的主题

变的是策略，不变的是环境context。 context接受委托给某一个策略

## 迭代器模式

提供一个方法顺序访问一个聚合对象的各个元素，不需要暴露该对象的内部表示

jquery.each方法就是一个迭代器，可以迭代对象object，一个迭代数组

## 发布订阅模式

一对多的关系。多个订阅者订阅一个事件。用处（电商app的货到提醒）

* 发布者
* 订阅者
* 订阅事件
* 取消订阅
* 触发事件
