# react生命周期

React16后生命周期发生改变

## 新生命周期

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

## 旧生命周期

### Mounting（加载阶段：涉及6个钩子函数）

#### 1. constructor()

加载的时候调用一次，可以初始化state

#### 2. getDefaultProps()

设置默认的props，也可以用dufaultProps设置组件的默认属性。

#### 3. getInitialState()

初始化state，可以直接在constructor中定义this.state

#### 4. componentWillMount()

组件加载时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state

#### 5. render()

react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行

#### 6. componentDidMount()

组件渲染之后调用，只调用一次

### Updating（更新阶段：涉及5个钩子函数)

#### 1. componentWillReceivePorps(nextProps)

组件加载时不调用，组件接受新的props时调用

#### 2. shouldComponentUpdate(nextProps, nextState)

组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false能阻止更新（不调用render）

#### 3. componentWillUpdata(nextProps, nextState)

组件加载时不调用，只有在组件将要更新时才调用，此时可以修改state
render()

react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行

#### 4. componentDidUpdate()

组件加载时不调用，组件更新完成后调用

### Unmounting（卸载阶段：涉及1个钩子函数）

componentWillUnmount()

组件渲染之后调用，只调用一次


可以释放资源, 比如清除定时器

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