# React

## react和react-dom

react是react的核心代码：createElment、component

react-dom： findDOMNode、render、unmountComponentAtNode

## react渲染

React渲染页面分为两个阶段

* 调度阶段reconciliation: React会更新数据生成新的Virtual DOM，通过Diff算法，快速找出需要更新的元素，放到待更新的队列中
* 渲染阶段commit： 遍历整个更新队列，然后一次性更新到DOM

存在问题

如果更新一个state，有很多组件需要更新，会等待很长时间，此期间用户任何操作得不到反馈

## Fiber

将耗时长的任务分成多个小片，每一个运行时间很短，中间过程可以选择执行优先级比较高的任务。 原来是stact调度，递归。 现在是fiber 循环

## super(props)的目的是什么

super() 被调用之前，子类是不能使用 this 的，在 ES2015 中，子类必须在 constructor 中调用 super()。传递 props 给 super() 的原因则是便于(在子类中)能在 constructor 访问 this.props。

## Fragments

允许根结点有多个，无需向 DOM 添加额外节点

## propTypes

props类型检测，大型应用建议用typescript，代码提示

## 代码分割和懒加载

项目代码进行分割，React.lazy(() => import()); 动态导入，只有被使用的时候才会加载。

```js
<Suspense fallback={<div>Loading...</div>}>
</Suspense>
```

## 状态提升

两个子组件需要利用到对方的状态，需要壮体提升，把子组件的状态写到父组件中，再将状态传递到子组件的props，实现共享state

## key

元素的 key 只有放在就近的数组上下文中才有意义。

key 只是在兄弟节点之间必须唯一

key匹配同个节点

## Portals

Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案

```react
ReactDOM.createPortal(child, container)
```
