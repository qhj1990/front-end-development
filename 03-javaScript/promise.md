# promise

链式调用.then().then().then();

## 资源

* [Javascript Promise迷你书](http://liubin.org/promises-book/) 中文版
  
## polyfill

Chrome、Firefox都已经内置了Promise对象，E8及以下可以使用[es6-promise](https://github.com/stefanpenner/es6-promise)，

## promise状态

* pending 等待
* fulfilled 已完成
* rejected 已拒绝

## promise 方法

### Promise.resolve()

### Promise.reject()

### Promise.then()

### Promise.catch()

### Promise.race()

接收一个 promise对象的数组作为参数，当这个数组里的其中一个promise对象变为resolve或reject状态的时候，然后调用.then方法

### promise.all()

接收一个 promise对象的数组作为参数，当这个数组里的所有promise对象全部变为resolve或reject状态的时候，然后调用.then方法
