# vue组件

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

## 组件之间通信

### 父组件向子组件传值

### 子组件向父组件传值

### 兄弟组件通信

### vuex

### vuex和localstorage

将vuex的state数据存储到localstorage中，刷新后取出数据state仍然保留状态

## 跨级通信