# typescript

* 适用大规模应用的JavaScript开发
* 扩展名 (.ts) .js文件科技直接重命名为.ts文件
* 代码的可读性和可维护性

## 安装typescript

```shell
npm install -g typescript
```

## 使用

```shell
tsc hello.ts
```

## 基础概念

### typescript类型

* boolean 布尔
* number 数字
* string 字符串
* array 数组
* tuple 元组 (数组的一种，)
* enum 枚举
* any 任意值
* null undefined
* void
* never

### typescript中的函数

#### 函数声明法

```javascript
function sum(x: number, y: number): number {
    return x + y;
}
```

#### 函数表达式

```javascript
var sum = function(x: number, y: number): number {
    return x + y;
}
```

#### 对象

interface

1. 可选属性
2. 任意属性
3. 制度属性 readonly

#### 数组

1. [类型 + 方括号]

```typescript
let fibonacci: number[] = [1, 2, 3, 5]
```

2. 数组范型

```typescript
let fibonacci: Array<number> = [1, 2, 3, 5]
```

### 接口interface

## tsconfig.json

* files 要编译的文件列表
* include 要编译的文件或者目录
* exclude 忽略一些文件
* extends 引入其他配置文件
* complierOptions 配置编译选型
  * target 目标语言的版本 es5，es6 esnext
  * module 生成代码的模块标准
  * paths 路径映射
  * strict 开启严格的类型检测
  * sourceMap
