# typescript基础

## typescript类型

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

## typescript中的函数

### 函数声明法

```javascript
function sum(x: number, y: number): number {
    return x + y;
}
```

### 函数表达式

```javascript
var sum = function(x: number, y: number): number {
    return x + y;
}
```

### 对象

interface

1. 可选属性
2. 任意属性
3. 制度属性 readonly

### 数组

1. [类型 + 方括号]

```typescript
let fibonacci: number[] = [1, 2, 3, 5]
```

2. 数组范型

```typescript
let fibonacci: Array<number> = [1, 2, 3, 5]
```