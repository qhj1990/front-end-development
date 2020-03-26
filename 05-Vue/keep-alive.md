# keep-alive

能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。会缓存不活动的组件实例，而不是销毁他们

* include 和 exclude， max
* meta.keepAlive

## 原理

在 created 钩子里定义了 this.cache 和 this.keys，本质上它就是去缓存已经创建过的 vnode。
