# vue双向绑定原理

Vue 采用 数据劫持 结合 发布者-订阅者 模式的方式，通过 Object.defineProperty() 来劫持各个属性的 setter 以及 getter，在数据变动时发布消息给订阅者，触发相应的监听回调。