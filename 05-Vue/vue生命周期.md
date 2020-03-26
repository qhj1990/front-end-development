# vue生命周期

## beforeCreate & created

```vue
Vue.prototype._init = function (options?: Object) {
  // ...
  initLifecycle(vm)
  initEvents(vm)
  initRender(vm)
  callHook(vm, 'beforeCreate')
  initInjections(vm) // resolve injections before data/props
  initState(vm)
  initProvide(vm) // resolve provide after data/props
  callHook(vm, 'created')
  // ...
}
```

vue实例化阶段 ._init方法中执行。在initState之前。initState作用是初始化props、 data、 methods、 watch、 computed等属性

### beforeCreate

* 不能访问真实DOM

组件实例初始化后,此时无法访问到 el 属性和 data 属性等

用于：
组件加载时与后台有交互

### created

能读取data，DOM未形成。数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。。$el属性不可见，进行一些异步的操作请求

可以访问props data

## beforeMount & mounted

DOM挂载

### beforeMount

挂载前.render 函数首次被调用

### mounted 挂载

el 被新创建的 vm.$el替换，将$el的内容挂载到了el，将数据渲染到真实dom，可以操作真实的DOM
不保证子组件也一起被挂载

## beforeUpdate & updated

### beforeUpdate 组件更新之前

data改变时，数据更新到dom之前，看到$el对象已经修改，但是页面上dom的数据还没有发生改变

### updated

组件更新之后，真实DOM已经改变

## acivated & deactivated

### acivated

被 keep-alive 缓存的组件激活时调用

### deactivated

被 keep-alive 缓存的组件停用时调用。

## beforeDestroy & destryod

组件销毁阶段。

### beforeDestroy

组件销毁之前，执行一些销毁动作。从parent删除$children中删除自身.删除watcher

### destroyed

实例销毁后虽然 dom 和属性方法都还存在. 实例被完全销毁，包含子实例。但改变他们都将不再生效!

### 注意

1. created阶段的ajax请求与mounted请求的区别：前者页面视图未出现，如果请求信息过多，页面会长时间处于白屏状态
2. mounted不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick

### 单个组件的生命周期

1. 初始化组件时，仅执行了beforeCreate/Created/beforeMount/mounted四个钩子函数
2. 当改变data中定义的变量（响应式变量）时，会执行beforeUpdate/updated钩子函数
3. 当切换组件（当前组件未缓存）时，会执行beforeDestory/destroyed钩子函数
4. 初始化和销毁时的生命钩子函数均只会执行一次，beforeUpdate/updated可多次执行

### 父子组件生命周期

1. 仅当子组件完成挂载后，父组件才会挂载
2. 当子组件完成挂载后，父组件会主动执行一次beforeUpdate/updated钩子函数（仅首次）
3. 父子组件在data变化中是分别监控的，但是在更新props中的数据是关联的（可实践）
4. 销毁父组件时，先将子组件销毁后才会销毁父组件

### 兄弟组件生命周期

1. 组件的初始化（mounted之前）分开进行，挂载是从上到下依次进行
2. 当没有数据关联时，兄弟组件之间的更新和销毁是互不关联的
