# 用CSS画常见图形

1. 圆circle

```html
<div class="circle"></div>
```

```css
.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #333;
}
```

2. 三角形traingle

```html
<div class="traingle"></div>
```

```css
.traingle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid yellowgreen;
}
```

等腰三角形，顶角朝向哪边，即哪边border设为0，对边的border设置颜色，其他两边的border设为透明transparent