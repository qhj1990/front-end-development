# react生命周期

React16后生命周期发生改变

## 命周期

### Mounting(挂载阶段)

#### 1.constructor()

* 通过给 this.state 赋值对象来初始化内部 state。只能在这里使用this.state
* 为事件处理函数绑定实例

#### 2.static getDerivedStateFromPorps(props, state)

它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。

#### render()

#### 3.componentDidMount()

组件挂载后，插入DOM树中调用，发起ajax请求，添加一些订阅。

在此调用setState会触发额外渲染，但会发送在浏览器更新屏幕之前，用户不会看到中间状态

### Updating(更新阶段)

#### 1.static getDerivedStateFromProps(props, state)

它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。

每次页面render之前调用，state已更新
典型场景：获取render之前的DOM状态
很少使用：将props复制到state

#### 2.shouldComponentUpdate(nextPorps, nextState)

两个参数nextProps和nextState，表示新的属性和变化之后的state，返回一个布尔值，true表示会触发重新渲染，false表示不会触发重新渲染，默认返回true,我们通常利用此生命周期来优化React程序性能

#### 3.render()

#### 4.getSnapshotBeforeUpdate(prevProps, prevState)

#### 5.componentDidUpdate(prevProps)

组件更新后调用，这里调用setState()需包裹条件语句，
在组件已经重新渲染之后调用
用于渲染后的任何DOM更新

### Unmounting(卸载阶段)

#### componentWillUnmount()

组件卸载销毁之前调用，清除定时器，取消网络请求，清除订阅

### 错误处理

#### componentDidCatch(error, info)

## 组件基本写法

```javascript
import React, { Component } from 'react'

export default class NewReactComponent extends Component {
    constructor(props) {
        super(props)
        // getDefaultProps：接收初始props
        // getInitialState：初始化state
    }
    state = {

    }
    static getDerivedStateFromProps(props, state) { // 组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；;每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state
        return state
    }
    componentDidCatch(error, info) { // 获取到javascript错误

    }
    render() {
        return (
            <h2>New React.Component</h2>
        )
    }
    componentDidMount() { // 挂载后

    }
    shouldComponentUpdate(nextProps, nextState) { // 组件Props或者state改变时触发，true：更新，false：不更新
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) { // 组件更新前触发

    }
    componentDidUpdate() { // 组件更新后触发

    }
    componentWillUnmount() { // 组件卸载时触发

    }
}

```