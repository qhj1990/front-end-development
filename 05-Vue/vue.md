# vue

## 单向数据流

## 双向绑定

model更新会处罚view的更新，view更新会model

双向绑定时语法糖

## 响应式原理

Vue 采用 数据劫持 结合 发布者-订阅者 模式的方式，通过 Object.defineProperty() 来劫持各个属性的 setter 以及 getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。

Vue 无法检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，所以属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的

## 虚拟DOM

本质上是一个js对象，同层遍历

## vue中key的作用

## v-show v-if

v-show 及时是false，还是会渲染，DOM也会存在，只是display:none

v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。

因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

## v-model

v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑

## 逻辑复用

### mixins

### 高阶组件higher-order components

### slot作用域插槽

额外的组件实例性能消耗

## this.$nextTick()

this.$nextTick()会等到DOM更新之后再进行操作
