# koa2学习

## koa资源

* [koa官网](https://koajs.com/)
* [koa中文](https://koa.bootcss.com/)
* [github](https://github.com/koajs/koa)

## koa中间件

## 应用app

### app.listen()

将英语程序绑定到具体端口号

### app.callback()

适用于http.createServer()方法的回调函数处理请求

### app.use(function)

将中间件添加到应用程序中

### app.context

编辑app.context为ctx添加其他属性。

### 错误处理

```
app.on('error', err => {
  log.error('server error', err)
});
```

## 上下文Context

### ctx.req

Node的request 对象

### ctx.res

Node的response对象

### ctx.request

Koa 的Request对象

### ctx.response

Koa的Response对象

### ctx.state

推荐的命名空间,存储公共数据。

```
ctx.state.user = '张三';
```

### ctx.app

### ctx.cookies.get(name, [options])

通过options获取cookie

* signed所请求的cookie应该被签名

### ctx.cookies.set(name, value, [options])

通过options设置cookie的name为value。

* maxAge 一个数字表示从 Date.now() 得到的毫秒数
* signed cookie 签名值
* expires cookie 过期的 Date
* path cookie 路径, 默认是'/'
* domain cookie 域名
* secure 安全 cookie
* httpOnly 服务器可访问 cookie, 默认是 true
* overwrite 一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 false). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（不管路径或域）是否在设置此Cookie 时从 Set-Cookie 标头中过滤掉。

### ctx.throw([status], [msg], [properties])

### ctx.assert(value, [status], [msg], [properties])

## Request请求

### request.header

请求标头对象

### request.header =

设置请求标头对象

### request.headers

### request.headers =

### request.method

请求方法

### request.method =

设置请求方法

### request.length

返回以数字返回请求的Content-Length，或undefined

### request.url

获取请求URL

## Response响应

### response.header

响应头对象

### response.headers

### response.socket

### response.status

获取响应状态

### response.message

响应的消息

### response.length

### response.body

获取响应主体

### response.type

获取响应content-type

### response.redirect(url, [alt])

执行[302]重定向到url

## koa路由

[koa-router](https://github.com/ZijianHe/koa-router#readme)

## koa中间件

### 应用级中间件

### 路由级中间件

路由匹配后，继续匹配

### 错误处理中间件

```
app.use(async (ctx, next) => {

    next();

    if(ctx.status == 404) {
        ctx.status = 404;
        ctx.body = '这是一个404 页面';
    } else {
        console.log(ctx.url);
    }
})
```


### 第三方中间件


