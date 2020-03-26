# css3

## 选择器

很多javascript类似的选择器

## transition

transtion: property duration timing-function delay;

过渡效果: css属性 持续多长时间 转速曲线， 延迟多少时间

## transform

2D 3D的转换，
rotate旋转
scale 缩放
translate移动
skew倾斜

## animate

动画效果。 可以设置某个%时间点的状态

animation: name duration timing-function delay iteration-count direction fill-mode play-state;

name ：定义的名称

duration ：多长时间完成

delay ：开始前多长的延迟

iteration-count：播放几次

direction ：指定是否应该轮流反向播放动画。

fill-mode：结束的状态

play-state：指定动画是否正在运行或已暂停。

## 渐变gradient

linear-gradient(线性渐变)和radial-gradient(径向渐变)

## 媒体查询media-query

为不同设备和不同尺寸的浏览器提供不同的样式

## 边框border

* border-image边框图片
* border-radius圆角

## flex

弹性布局

父节点设置display: flex

### 父容器

#### 主轴方向flex-direction

决定flex item的排列方向

* row 从左到右
* row-reverse 从右到左
* column 从上到下
* column-reverse 从下到上

#### flex-warp换行

如果一条轴排不下，如何换行

* nowrap 不换行
* wrap 换行, 第一行在上方
* wrap-reverse 换行，第一行在下方

#### flex-flow

是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap

#### justify-content

主轴的对齐方式

* flex-start 左对齐
* flex-end 右对齐
* center 居中
* space-between 两端对齐，item之间间隔相同
* space-around 每个item两侧的间隔相同，项目之间的间隔比边框的间隔大一倍

#### 侧轴align-items

侧轴的对齐方式

* flex-start 起点对齐
* flex-end 终点对齐
* center 中点对齐
* baseline 第一行文字的基线对齐
* stretch 充满整个容器的高度

#### align-content

若flex item有多跟轴

* flex-start：与交叉轴的起点对齐。
* flex-end：与交叉轴的终点对齐。
* center：与交叉轴的中点对齐。
* space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
* space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
* stretch（默认值）：轴线占满整个交叉轴。

### 子容器flex item

#### order顺序

数值越小，排列越靠前，默认为0

#### flex-grow

项目的放大比例，默认为0。容器空间剩余时。

#### flex-shrink

项目缩小比例，默认为1。 容器空间不足时，该项目缩小

#### flex-basis

项目占据的主轴空间（main size

#### flex属性

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。

#### align-self

允许单个项目和其他项目有不一样的对齐方式。
