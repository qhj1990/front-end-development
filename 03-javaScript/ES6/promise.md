# Promise

[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 是异步编程的一种解决方案，比传统的异步解决方案【回调函数】和【事件】更合理. 链式调用

* Promise.length === 1

## 使用

new Promise(executor) 函数传入两个参数，resole、reject.Promise构造函数执行时立即调用executor 函数

```js

new Promise(function(resolve, reject) {

});


const promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
```

## Promise三种状态

pending、fulfilled、reject，状态改变了就不会再变化，就resolved定型了

## Promise方法

* Promise.all()

  多个Promise任务同时执行

* Promise.allSettled
* Promise.prototype.catch()

  实例方法

* Promise.prototype.finally()
  
  实例方法

* Promise.prototype.then()

  实例方法

* Promise.race()

  多个 Promise 任务同时执行，返回最先执行结束的 Promise 任务的结果，不管这个 Promise 结果是成功还是失败

* Promise.reject()

  返回的 promise 对象的状态为 rejected

* Promise.resolve()
  返回一个状态已变成 resolved 的 Promise 对象。
