# Less

css预处理，扩展css语言，使css更加容易维护和扩展。可用在浏览器和Node

## less资源

* [less官网](http://lesscss.org/)
* [Less中文网](http://lesscss.cn/)
* [bootcss翻译](https://less.bootcss.com/)

## 安装使用

```shell
npm install -g less
lessc styles.less
lessc styles.less styles.css
```

## 变量 Variables

变量是常量，不能多次声明

## 混合 Mixins

将一个规则集放到另一个规则集中

## 嵌套 Nesting

允许嵌套

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

## 运算 Operations

数字number，颜色color，变量 Variables 可以进行 + - * % 运算。 还有Calc()

## 函数 Functions

* 字符串函数
  * escape
  * e
  * % format
  * replace
* 数学函数
* 类型函数
  * isnumber 判断是否为数字
  * isstring 判断是否为字符串
  * iscolor 判断是否为颜色
  * lskeyword
  * isurl 判断是否为url
  * ispixel 判断是否为px
  * isem 判断是否为em
  * ispercentage 判断是否为%
  * isunit 判断两个值是否为一对，匹配
  * isruleset 判断值是否为一个规则集
* 颜色定义函数
  * rgb
  * rgba
  * argb
  * hsl
  * hsla
  * hsv
  * hsva

## 导入 Importing

@import 其他less css文件

## 父选择器 Parent Selectors

&

## 注释

1. css原生注释，会被编译到css文件中

```css
/* css原生注释 */
```

2. less提供的注释，不会被编译在css文件中

```less
// less注释
```
