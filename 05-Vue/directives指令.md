# Directives

## 钩子函数

* bind 指令第一次绑定到元素时调用
* inserted 被绑定元素插入到父节点时调用
* update 组件的Vnode更新时调用

## 钩子函数参数

* el
* binding
  * name 指令名
  * value 指令绑定值
  * oldValue
  * expression 指令表达式
  * arg 传给指令的参数
  * modifiers 包含修饰符的对象
* vnode Vue 编译生成的虚拟节点
* oldVnode 上一个虚拟节点

## 应用

* 输入框聚焦

  ```javacript
  // 注册一个全局自定义指令 `v-focus`
    Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
    })

    <input v-focus>
  ```

* 图片懒加载
* 固定位置
* 埋点
