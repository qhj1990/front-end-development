# vue3新特性

用proxy替代原来的obj.defineProperty()来进行监听

virtual DOM重构

typescript重写

## virtual DOM重构

vue是模板templte, 2.0 是单个组件进行遍历, 3.0是

react的jsx和render function中一些可优化的信息丢失了,所以做了时间分片,在16ms的会更新一次

## Vue composition API / function-based api

原有的写法，处理同个逻辑的方法分散在data method等各个地方。逻辑多了之后维护比较麻烦。

组件从原本的选项配置变成了函数定义，组建逻辑结构更加灵活，逻辑复用

* 更好的Typescript 类型推导支持
* 逻辑复用, 组件从原本的选项配置变成了函数定义，组建逻辑结构更加灵活
* tree-shaking ? 将 引用的 动态 import 包可以更下
* 更好的压缩, 参数名可以压缩

### setup(props, context)

compostion api 统一入口，setup 函数会在 beforeCreate 之后、created 之前执行。
在 setup() 函数中无法访问到 this， context为上下文对象

### reactive()

reactive() 函数接收一个普通对象，返回一个响应式的数据对象。

watchEffect

### ref()

## Fragments

根节点不需唯一, 类似 React.Fragments()
