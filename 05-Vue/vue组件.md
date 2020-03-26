# vue组件

## 函数式组件

以将组件标记为 functional，这意味它无状态 (没有响应式数据)，也没有实例 (没有 this 上下文)。

使组件无状态 (没有 data) 和无实例 (没有 this 上下文)

## 组件注册

组件名称格式 <my-component-name> 和 <MyComponentName>

### 全局注册

```vue
Vue.component('my-component-name', { /* ... */ })
```

### 局部注册

``` javascript
var ComponentA = { /* ... */ }

var ComponentB = {
  components: {
    'component-a': ComponentA
  },
  // ...
}
```

```javascript
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import BaseInput from './BaseInput.vue'

export default {
  components: {
    BaseButton,
    BaseIcon,
    BaseInput
  }
}
```

## 组件循环应用和递归应用

## 组件之间通信

* props / $emit .sync 适用 父子组件通信
* ref /parent children 适用 父子组件通信
* EventBus（emit/on） 适用于 父子、隔代、兄弟组件通信
* attrs / listeners 适用于 隔代组件通信， 没有设置props的attrs获取
* provide / inject 适用于 隔代组件通信
* Vuex 适用于 父子、隔代、兄弟组件通信

### 兄弟组件通信

### vuex和localstorage

将vuex的state数据存储到localstorage中，刷新后取出数据state仍然保留状态

## 跨级通信
