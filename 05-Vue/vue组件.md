## 组件

组件名称格式 <my-component-name> 和 <MyComponentName>

### 全局注册

```
Vue.component('my-component-name', { /* ... */ })
```

### 局部注册

```
var ComponentA = { /* ... */ }

var ComponentB = {
  components: {
    'component-a': ComponentA
  },
  // ...
}
```

```
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

## 组件传值


