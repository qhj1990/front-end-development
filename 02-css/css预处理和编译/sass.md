# sass

sass是基于ruby语言开发而成. bootstrap4基于sass来构建

## 资源

* [sass官网](https://sass-lang.com/)
* [sass中文网](https://www.sasscss.com/)
* [sass中文网](https://www.sass.hk/)

## 安装编译

sass input.sass output.css

## 特色

* 兼容css3
* css基础上增加变量，嵌套，混合等功能
* 颜色值和属性值可以通过函数进行计算
* 自定义输出格式
  
## 变量variables

```sass
// 变量声明
$highlight-color: #F90;
.selected {
  border: 1px solid $highlight-color; // 变量引用
}

```

## 嵌套规则nested rules

### 父选择器的标识符&;

### 子组合选择器和同层组合选择器：>、+和~;

## 混合mixin

实现大段样式的重用. @mixin声明，在需要复用的地方@include

```sass
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}
```

## 导入import

* 导入sass
* 导入原生css

## 注释

多行注释/* */，编译时会保留。 单行注释//不会被保留
