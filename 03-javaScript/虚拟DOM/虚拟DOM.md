# 虚拟DOM

## 什么是虚拟DOM

js对象描述的DOM

## 为什么用虚拟DOM

真实DOM操作很耗性能，js操作更加有效率

## 实现虚拟DOM

1. js对象表示DOM结构 VNode
2. 比较新旧两个虚拟DOM树的差异 diff
3. 差异更新到真实DOM上 patch

## 常见的虚拟DOM框架

* [snabbdom](https://github.com/snabbdom/snabbdom)
* [virtual-dom](https://github.com/Matt-Esch/virtual-dom)

## diff算法

DOM必须更新的节点来更新，其他的不更新
