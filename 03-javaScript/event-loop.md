# Event Loop事件循环

js是单线程的，为了防止主线程的阻塞，有同步和异步的操作。Event-Loop事件循环是解决javaScript单线程运行时不会阻塞的一种机制。

## 单线程

只有一个线程，做一件事。js作为浏览器脚本语言，避免DOM渲染的冲突

## 同步和异步

* 同步
  一个执行完以后才能继续执行下一个任务
* 异步

## 执行栈与任务队列

## 宏任务和微任务

异步任务分为 宏任务(macrotask) 与 微任务 (microtask)。宏任务会进入一个队列，而微任务会进入到另一个不同的队列，且微任务要优于宏任务执行。

* 宏任务

  script、 setTimeout、setInterval、I/O、事件、postMessage、MessageChannel、setImmediate(Node.js)
* 微任务

  promise.then()、MutationObserver、process.nextTick (Node.js)

## Event Loop

事件循环中，每一次循环成为tick
