# awesome-flow

flow是JavaScript静态类型检查器

## 资源

* [官网](https://flow.org/)

## Flow工作方式

1. 类型判断

    根据上下文推断类型。不需要修改任何代码

2. 类型注释

    提前注释，需要的类型

## 初始化项目

``` shell
flow init
```

会生成一个.flowconfig文件

### .flowconfig文件

```
[ignore]
// 忽略不要检查的文件
[include]

[libs]

[lints]

[options]

[strict]
```

## 类型注释

### 原始类型

#### 布尔值

* true
* false
* new Boolean(true)
* new Boolean(false)

#### 数字

* 42.3
* NaN
* Infinity
* Number(42.3)
* ParseFloat()
* ParseInt()

#### 字符串

* "string"
* 隐式转化为字符串: "string" + 43

#### Null或者void

#### 也许类型

```javascript
// @flow
function acceptsMaybeString(value: ?string) {
  // ...
}
```

除了可以是string之外，也可以是null或void

#### 可选功能参数

```javascript
function method(param?: string) { /* ... */ }
```

参数可以为string，也可以为void，也可以省略，但是不可能是null

#### 带默认值的参数

```javascript
function method(value: string = "default") { /* ... */ }
```

参数除了他们的集合类型之外，还可以void，省略默认参数，但不能是null

### 任何类型 mixed