# page-visibility-api

页面可见性API。

## 属性

* document.hidden
  * 页面是否隐藏
* document.visibilityState
  * visible 内容部分可见
  * hidden 用户不可见，文档处于背景标签页或者窗口处于最小化状态，或者操作系统处于锁屏状态
  * prerender
  * unloaded

## 事件

### visibilitychange

最小化窗口或切换选项卡时，会发送visibilitychange事件。常用于修改title，视频暂停、播放
