# mobx

## mobx资源

* [Mobx官方文档](https://cn.mobx.js.org)
* [Mobx github](https://github.com/mobxjs/mobx)
* [Mobx中文文档](https://cn.mobx.js.org)
* [awesome-mobx](https://github.com/mobxjs/awesome-mobx)

## redux和mobx的区别

* redux将数据保存在单一的store中，mobx将数据保存在分散的多个store中
* redux使用不可变状态，这意味着状态是只读的，不能直接去修改它，而是应该返回一个新的状态，同时使用纯函数；mobx中的状态是可变的，可以直接对其进行修改
* 异步处理，mobx不需要额外再加redux-thunk、redux-saga
* mobx中有更多的抽象和封装，调试会比较困难，同时结果也难以预测；而redux提供能够进行时间回溯的开发工具，同时其纯函数以及更少的抽象，让调试变得更加的容易
