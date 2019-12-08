# mac使用环境

<details>

<summary>目录</summary>

* [`mac备份恢复`](##mac备份恢复)
* [`通用设置`](##通用设置)
* [`软件推荐`](##软件推荐)

</details>

## mac备份恢复

为防止意外，需要对电脑进行定期的备份。

### 时间机器 备份

https://support.apple.com/zh-cn/HT201250

### 恢复

https://support.apple.com/zh-cn/HT203981

## 通用设置

### App Store 访问加速

为网络添加DNS （偏好设置 > 网络 > Wi-Fi> 高级 > DNS ）

* 208.67.222.222
* 208.67.220.220
* 114.114.114.114

### .DS_store

Mac下面压缩的时候总会自动生成 .DS_store 文件，用户可以自行选择是否需要生成，执行下面命令之后需要重启Mac生效。

* 禁止 .DS_store生成：

```shell
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE
```

* 恢复 .DS_store生成：

```shell
defaults delete com.apple.desktopservices DSDontWriteNetworkStores
```

## 软件推荐

### 安装软件可能遇到的问题

* 系统偏好设置-安全性与隐私-Mac允许从任何来源-通用-允许从以下位置下载的应用，"任何来源"这个选项默认已经不显示了需要打开终端app,然后输入以下内容，按回车键执行

```shell
sudo spctl --master-disable
```

### 输入法

* [搜狗输入法](https://pinyin.sogou.com/mac/)
* [百度输入法](https://srf.baidu.com/input/mac.html)

### 邮箱

* [Foxmail](https://www.foxmail.com/)
* [Airmail](https://airmailapp.com/)

### 通讯

* [微信](https://weixin.qq.com/cgi-bin/readtemplate?t=mac)
* [钉钉](https://tms.dingtalk.com/markets/dingtalk/download)
* [QQ](https://im.qq.com/macqq/)
* [Telegram](https://telegram.org/) 电报，私密安全的聊天工具，类似微信

### 办公软件，笔记, 思维导图、团队协作

* Microsoft office for Mac 2019
* pages文稿
* Numbers表格
* keyNode讲演
* [WPS Office](https://www.wps.cn/product/wpsmac/)
* [腾讯文档](https://docs.qq.com/download.html) 在线文档
* [有道云笔记](http://note.youdao.com/) 写笔记，markdown
* [印象笔记](https://www.yinxiang.com/)
* [Xmind](https://www.xmind.cn/download/xmind8/) 思维导图
* [MindNote Pro](https://mindnode.com/) 思维导图
* [EdrawMax](https://www.edrawsoft.com/macdiagram/) 绘图
* [幕布](https://mubu.com/) 笔记，思维导图
* [Teambition](https://www.teambition.com/) 团队协作
* [MWeb](https://zh.mweb.im/) Markdown编辑器
* [Mou](http://25.io/mou/) Markdown编辑器
* [语雀](https://www.yuque.com) 蚂蚁金服下文档编写，只是沉淀工具

### PDF

* [PDF Expert](https://pdfexpert.com/) PDF阅读器
* [Adobe Acrobat Pro](https://acrobat.adobe.com/cn/zh-Hans/acrobat.html) PDF阅读器

### 下载工具

* [迅雷](http://mac.xunlei.com/)
* [proxyee down](https://github.com/proxyee-down-org/proxyee-down) 下载百度云
* [Folx](https://mac.eltima.com/download-manager.html) BT下载工具
* [Downie 3](https://software.charliemonroe.net/downie.php) 下载网络上的视频
* [Free Download Manager](https://www.freedownloadmanager.org/) HTTP/HTTPS/FTP/BitTorrent
* [motrix](https://motrix.app/) 支持下载 HTTP、FTP、BT、磁力链、百度网盘等资源

### 网盘

* [百度网盘](https://pan.baidu.com/download#pan)
* [腾讯微云](https://www.weiyun.com/download.html)

### 解压

* [The Unarchiver](https://theunarchiver.com/)
* [better zip](https://www.betterzip.net/)

### 截图,图片管理

* [jietu截图](https://jietu.qq.com/) 腾讯出品的截图软件
* [智图](https://zhitu.isux.us/index.php/preview/download)  png jpg图片压缩
* [看图](https://kantu.qq.com/) 腾讯出品优质图片查找工具

### 音乐、视频

* [网易云音乐](https://music.163.com/)
* [虾米音乐](https://www.xiami.com/apps/mobile)
* [QQ音乐](https://y.qq.com/download/mac.html?part=1&ADTAG=YQQ)
* [iina](https://iina.io/) 视频播放器
* [Final Cut Pro X](https://www.apple.com/cn/final-cut-pro/) 视频剪辑
* [VOX](https://vox.rocks/mac-music-player) 能播放无损音乐的音频播放器
* [腾讯视频](https://v.qq.com/download.html)
* [优酷视频](http://pd.youku.com/pc?spm=a2hpd.20022520.sort.1!5~3!2~P~A)
* [爱奇艺](http://app.iqiyi.com/mac/player/index.html)

### 移动硬盘读取

* [NTFS For Mac](http://www.ntfsformac.cn/xiazai.html)
* [Mountry for NTFS](https://mounty.app/)

### 系统清理

* [Clean My Mac](https://macpaw.com/cleanmymac) 文件清理，卸载软件
* [腾讯柠檬清理](https://mac.gj.qq.com/)
* [MacBooster](https://www.macbooster.net/)
* [ccleaner](https://www.ccleaner.com/ccleaner/download?mac)

### 词典

* [欧路词典](https://www.eudic.net/v4/en/app/eudic)
* [有道词典](http://cidian.youdao.com/index-mac.html)

### 密码管理

* [1password](https://1password.com/tour/) 密码管理

### 浏览器

* [Chrome](https://www.google.cn/chrome/)
* [Chrome Canary](https://www.google.cn/intl/zh-CN/chrome/canary/) 金丝雀版本 每日构建版，能够尝试Chrome最新的特性
* [Firefox](http://www.firefox.com.cn/)
* [Safari](https://www.apple.com/cn/safari/)
* [Opera](https://www.opera.com/zh-cn)
* [QQ浏览器](https://browser.qq.com/mac/)
* [Blisk](https://blisk.io/)

### 管理iPhone

* [imazing](https://imazing.com/)
* [iTools Pro](https://pro.itools.cn/pro_mac/)
* itunes
* [AirServer](https://www.airserver.com/) iPhone 投屏到mac电脑上

### 管理Android手机

* [Android File Transfer](http://www.android.com/filetransfer/)

### 远程连接

* [jump desktop](https://jumpdesktop.com/) iOS Androud MacOS Windows
* [TeamViewer](https://www.teamviewer.com/cn/) 远程协助，在线会议
* [向日葵](https://sunlogin.oray.com/zh_CN/) 远程控制电脑，Android手机。只需安装同个软件

### 虚拟机

* [VMware Fusion](https://www.vmware.com/cn/products/fusion/fusion-evaluation.html)
* [Parallels desktop](https://www.parallels.com/cn/)
* [CrossOver](https://www.codeweavers.com/products) Mac安装windows应用，支持部分软件

### 系统其他

* [Alfred3](https://www.alfredapp.com/powerpack/) 提高效率，装机必备
* [Paste](https://pasteapp.me/) 剪贴板历史
* [Cheatsheet](https://www.mediaatelier.com/CheatSheet/) 快捷键查看
* [OmniFocus](https://www.omnigroup.com/omnifocus/) 任务管理软件
* [OmniGraffle](https://www.omnigroup.com/omnigraffle/) 图表制作
* [OmniOutliner](https://www.omnigroup.com/omnioutliner)
* [OmniPlan](https://www.omnigroup.com/omniplan/)  项目管理软件
* [Fantastical 2](https://flexibits.com/fantastical) 日历
* [Qbserve](https://qotoqot.com/qbserve/) 查看Mac各个app使用的时间
* [Room Arranger](http://www.roomarranger.com/)  3D 房间/公寓/楼 室内设计

## 设计

* [Axure RP](https://www.axure.com/)
* [墨刀](https://modao.cc/)
* [sketch](https://www.sketchapp.com/)
* [Adobe Photoshop](https://www.adobe.com/cn/products/photoshop.html)
* [Adobe Illustrator](https://www.adobe.com/cn/products/illustrator.html)
* [principle](http://principleformac.com/)
* [zeplin](https://www.zeplin.io/)
* [PxCook](http://www.fancynode.com.cn/pxcook) 高效易用的自动标注工具, 生成前端代码, 设计研发协作利器

## 开发必备

### 包管理器

* [Homebrew](https://brew.sh/index_zh-cn)
* [Cakebrew](https://www.cakebrew.com/) Homebrew客户端

### 终端

* [iTerm2](https://www.iterm2.com/) 命令行工具
* [Oh My zsh](https://ohmyz.sh/)

### FTP

* [Transmit](https://www.panic.com/transmit/)
* [FileZilla](https://note.youdao.com/)
* [cyberduck](https://cyberduck.io/)
* [ExpanDrive](https://www.expandrive.com/)

### SVN Git

* [Github Desktop](https://desktop.github.com/)
* [Tower](https://www.git-tower.com/) git client
* [Fork](https://git-fork.com/) git client
* [SourceTree](https://www.sourcetreeapp.com/)
* [Cornerstone](https://cornerstone.assembla.com/) SVN client
* [Versions](https://versionsapp.com/)

### 网络、调试

* [postman](https://www.getpostman.com/)接口调试
* [Charles](https://www.charlesproxy.com/)
* [CocoaRestClient](http://macappstore.org/cocoarestclient/)
* [Bagel](https://github.com/yagiz/Bagel) iOS设备,连接mac网络调试工具 

### 数据库

* [Navicat Premium](https://www.navicat.com.cn/download/navicat-premium)
* [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) MySQL官方数据库管理软件
* [Redis Desktop Manager](https://redisdesktop.com/) redis操作
* [medis](https://github.com/luin/medis) Redis管理
* [Postico](https://eggerapps.at/postico/) PostgreSQL 客户端
* [SQL Pro Studio](http://www.sqlprostudio.com/)
* [Robo 3T](https://robomongo.org/) MongoDB 数据库管理

### Docker

* [Docker](https://www.docker.com/)

### 编辑器、IDE、开发工具

* [VS code](https://code.visualstudio.com/) 微软开发的编辑器
* [Sublime text3](http://www.sublimetext.com/)
* [Atom](https://atom.io/) Github开发
* [StackBlitz](https://stackblitz.com/) 网页在线vscode编辑器
* [webstorm](http://www.jetbrains.com/webstorm/)
* [Xcode](https://developer.apple.com/xcode/)
* [Andriod Studio](http://www.android-studio.org/)
* [HBuilderX](http://www.dcloud.io/hbuilderx.html)
* [MAMP PRO](https://www.mamp.info/en/) php开发环境，Apache 服务器、PHP 安装套件以及MySQL安装套件
* [Intellij IDEA](https://www.jetbrains.com/idea/) java开发
* [Deco](https://www.decoide.org/) React Native开发工具
* [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
* [支付宝小程序开发工具](https://docs.alipay.com/mini/ide/overview)
* [百度小程序开发者工具](https://smartprogram.baidu.com/docs/develop/devtools/show_sur/)
* [字节跳动小程序开发者工具](https://microapp.bytedance.com/docs/devtool/versionUpdate.html)
* [SnippetsLab](http://www.renfei.org/snippets-lab/) 代码片段管理

### 在线编辑器

* [gitpod](gitpod.io)

### 其他

* [Dash](https://kapeli.com/dash) api聚合