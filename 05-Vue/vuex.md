# Vuex

多个视图依赖于同一个状态
来自不同视图的行为需要变更同一个状态
把共享状态抽象出来，变得更加容易维护

## vuex和单纯全局对象直接的区别

vuex的状态是响应式的，vue组件从store读取状态的时候，若store的状态发生变化，组件也会更新

不能直接改变store的值，需要commit mutation是唯一的途径

## vuex资源

* [官网](https://vuex.vuejs.org/zh-cn/)
* [英文](https://vuex.vuejs.org/guide/)

## vuex原理

Vuex.use('Vuex') 调用vuex对象的install 方法将vuex载入

install 方法中会判断是否已经安装了vuex。没有的话会调用applyMixin， vuex2版本以上的是minxin混入，其他版本的是iniit

vuex本身也支持一些插件，例如logger的插件

## vuex核心概念

store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回

### 1.State

#### mapState

当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性

### 2.Getter

需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数

Getter 接受 state 作为其第一个参数：

Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值：

Getter 也可以接受其他 getter 作为第二个参数：

#### 访问getter

通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的。

通过函数，每次都会去进行调用，而不会缓存结果

#### mapGetter

mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性

### 3.Mutation

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。

Mutation 必须是同步函数

#### 调用mutation

组件中使用 this.$store.commit('xxx') 提交 mutation，

使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。

### 4.Action

Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。

组件中使用 this.$store.dispatch('xxx') 分发 action，
使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：

可以调用异步 API 和分发多重 mutation

action返回的是promise

### 5.Module

Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter

```javascript
let Vue;
class Store {
    // 持有state，并使其响应化
    constructor(options){
        this.state = new Vue({
            data:options.state
        })
        this.mutations = options.mutations;// mutations 是对象
        this.actions = options.actions;// mutations 是对象
        // 绑定this
        this.commit=this.commit.bind(this);
        this.dispatch=this.dispatch.bind(this);
    }
    // 实现commit和dispatch方法
    commit(type,arg){
        this.mutations[type](this.state,arg);
    }
    dispatch(type,arg){
        console.log(this.actions[type])
        return this.actions[type](this,arg)
    }
}
function install(_vue){
    Vue = _vue;
    Vue.mixin({// 为什么用混入？use是先执行，而this指向的是vue实例，是在main.js中后创建的，使用混入才能在vue实例的指定周期里拿到store实例并做些事情
        beforeCreate(){
            if (this.$options.store) {
                Vue.prototype.$store=this.$options.store;
            }
        }
    })
}
export default {
    Store,
    install
}
```
