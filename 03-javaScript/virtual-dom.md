# 虚拟DOM

用js对象描述的DOM

## 为什么用虚拟DOM

真实DOM操作很耗性能，js操作更加有效率

## 实现虚拟DOM

1. js对象表示DOM结构 VNode
2. 比较新旧两个虚拟DOM树的差异 diff
3. 差异更新到真实DOM上 patch

## 常见的虚拟DOM框架

* [snabbdom](https://github.com/snabbdom/snabbdom)
* [virtual-dom](https://github.com/Matt-Esch/virtual-dom)

## Snabbdom

[snabbdom](https://github.com/snabbdom/snabbdom)是专注于性能，强大的功能，简单方便的虚拟DOM库

特点

* h函数很容易创建虚拟DOM节点
* 能处理SVG
* 能处理复杂的CSS动画
* diff算法只比较同层级

### 源码结构

* helpers
  * attachto.ts
* modules 模块
  * attributes.ts
  * class.ts
  * dataset.ts data-属性
  * eventlisteners.ts 事件相关: 创建事件，更新事件，取消事件
  * hero.ts
  * module.ts
  * props.ts
  * style.ts
* test 测试相关
* h.ts 创建vnode函数
* hooks.ts 钩子函数
* htmldomapi.ts 原生DOM操作
* is.ts  判断类型操作
* jsx-global.ts
* jsx.ts
* snabbdom.bundle.ts 入口文件
* snabbdom.ts 初始化函数
* thunk.ts
* tovnode.ts dom转成vnode
* vnode.ts 构造vnode

### 核心API

#### init([])

``` js
import snabbdom from 'snabbdom';

const patch = snabbdom.init([        // 指定模块初始化 patch 方法
  require('snabbdom/modules/class'),   // 切换 class
  require('snabbdom/modules/props'),   // 设置 DOM 元素的属性
  require('snabbdom/modules/style'),   // 处理元素的 style ，支持动画
  require('snabbdom/modules/eventlisteners'), // 事件处理
  require('snabbdom/modules/attributes'), // 属性
  require('snabbdom/modules/dataset'), // data-属性
]);
```

init参数的数组接收modules的各个模块，按需require，返回一个patch函数，用于更新vnode

#### vnode

```typescript
export interface VNode {
  sel: string | undefined // class选择器
  data: VNodeData | undefined // vnode相关属性事件设置
  children: Array<VNode | string> | undefined // 可以是vNode递归渲染，也可以是字符串
  elm: Node | undefined // 指向dom的真实节点
  text: string | undefined // 当前节点的文本节点内容
  key: Key | undefined // 唯一标识用来判断dom是否相同
}

export interface VNodeData {
  props?: Props //
  attrs?: Attrs //
  class?: Classes // 类名
  style?: VNodeStyle // 样式
  dataset?: Dataset //
  on?: On //
  hero?: Hero //
  attachData?: AttachData //
  hook?: Hooks //
  key?: Key
  ns?: string // SVGs
  fn?: () => VNode // for thunks
  args?: any[] // for thunks
  [key: string]: any // 第三方module
}

```

#### h函数

创建 vnodes

#### patch

patch(vnode, newVnode)

1. 调用module的prehook
2. 调用原属insert hook和module的post hook

#### createElm函数

创建真正的DOM

#### patchVnode

比较两个Vnode之间的差异，即diff。如果存在更新，将其反馈到 dom 上

* 如果oldVnode 和vnode相同，则返回
* 不相同
  * 都存在children
    * 如果不相同则updateChildren
  * vnode存在children
  * oldVnode存在children

#### thunk函数

同样返回vnode，参数相同就不再比较

#### hook

[PreHook, InitHook, CreateHook, InsertHook, PrePatchHook, UpdateHook, PostPatchHook, DestroyHook, RemoveHook, PostHook]

```typescript
import { VNode } from './vnode';

export type PreHook = () => any;
export type InitHook = (vNode: VNode) => any;
export type CreateHook = (emptyVNode: VNode, vNode: VNode) => any;
export type InsertHook = (vNode: VNode) => any;
export type PrePatchHook = (oldVNode: VNode, vNode: VNode) => any;
export type UpdateHook = (oldVNode: VNode, vNode: VNode) => any;
export type PostPatchHook = (oldVNode: VNode, vNode: VNode) => any;
export type DestroyHook = (vNode: VNode) => any;
export type RemoveHook = (vNode: VNode, removeCallback: () => void) => any;
export type PostHook = () => any;

export interface Hooks {
  pre?: PreHook
  init?: InitHook
  create?: CreateHook
  insert?: InsertHook
  prepatch?: PrePatchHook
  update?: UpdateHook
  postpatch?: PostPatchHook
  destroy?: DestroyHook
  remove?: RemoveHook
  post?: PostHook
}
```
