# css-animation

css 动画

W3C 建议，任何闪烁、滚动或自动更新时间超过5秒的内容都应该有暂停或删除动画的方法。使用 animation-play-state 是一种暂停动画的方法，

## css动画库

* [animate.css](https://daneden.github.io/animate.css/) [官网](https://daneden.github.io/animate.css/) 跨浏览器 css动画库
* [Hover.css](http://ianlunn.github.io/Hover/) [github](https://github.com/IanLunn/Hover) 链接、按钮、logo、SVG、图片中添加hover效果

## css动画的不同方式

### transitions 过渡

css中的transitions指从一个状态到另一个状态的动画模拟。通过改变不同的属性，不同动画的属性，以及持续时间。通常由某种动作触发，如鼠标悬停

transition: [property] [duration] [delay] [timing-function];
    * transition-property 设置过渡的属性
    * transition-duration 过渡的时间
    * transiton-delay 延迟过渡的时间, 单位ms或者s
    * transition-timing-function 过渡的类型
      * liner 线性过渡
      * ease 平滑过渡
      * ease-in 由慢到快
      * ease-out 由快倒慢
      * ease-in-out 由慢到快再到慢
      * cubic-bezier(number, number, number, number) 自定义贝塞尔曲线

可过渡的属性
    * position
    * size
    * color
    * border
    * background-position

不能变更的属性
    * font-family

### animation动画

animations动画完成后，会回到初始状态。可以自动触发。添加keyframes来创建动画

animation: change-background 4s linear infinite;
    * animation-name 动画名称
    * animation-duration 动画持续时间
    * animation-timing-funciton 动画的过渡类型
    * animation-delay 动画延迟开始的时间
    * animation-iteration-count 动画循环次数，可设置一直循环
    * animation-direction 正向，或者正反交替
    * animation-play-state 运动或暂停
    * animation-fill-mode 动画时间之外的状态

keyFrames 定义不同的%时css的属性

### transform 变形

元素旋转 缩放，移动 倾斜

* matrix 变换矩阵
* translate() 平移
  * translateX() X轴平移
  * translateY() Y轴平移
* rotate() 2D旋转
* scale() 缩放，
  * scaleX() x轴缩放
  * scaleY() Y轴缩放
* skew() 扭曲
  * skewX() X轴扭曲
  * skewY() Y轴扭曲
