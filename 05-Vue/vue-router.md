
# vue-router

构建单页面应用时，切换路由

* 嵌套的路由/视图表
* 模块化、基于组件的路由配置
* history 和 hash模式

## 路由模式

* history模式
  原理 history.pushState/repaceState
  不能直接访问，需要配置nginx
* hash模式

## 用法

* router-link
* 动态路由（权限）
* 重定向
* beforeEach 导航守卫
  * 拦截判断到登录页面
  * 进度条开启
* afterEach
  * 进度条关闭

### 嵌套路由

VueRouter 中配置children

## 导航守卫

### beforeEach 前置守卫

```Vue
router.beforeEach((to, from, next) => {
  // ...
})
```

### beforeEnter 组件的守卫

完整的导航解析流程

1. 导航被触发。
2. 在失活的组件里调用离开守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

## 路由懒加载

打包后应用非常大，影响页面加载。

结合 Vue 的异步组件和 Webpack 的代码分割功能，轻松实现路由组件的懒加载

### 组件按组分开

设置相同的webpackChunkName
