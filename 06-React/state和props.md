# state和props

## state

* 不能直接修改state，用setState()
* state的更新可能是异步的
* state的更新会被合并

### state的更新可能是异步的

this.setState()更新组件的状态

setState只在合成事件和钩子函数中是“异步”的，在原生事件和setTimeout 中都是同步的。

setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次setState，setState的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时setState多个不同的值，在更新时会对其进行合并批量更新。

## props

任何东西都能用props传递给子组件
