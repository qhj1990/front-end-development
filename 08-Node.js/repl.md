# repl

交互式解释器（REPL）, 既可以作为独立程序，也可以集成到其他程序

* Read 读取
* Eval 执行
* Print 打印
* Loop 循环

## 命令与特殊键

### .break

ctrl c 组合件，终止表达式的继续输入

### .clear

重置REPL的context为空对象，并清除当前输入的所有多行表达式

### .exit

关闭输入输入出流, 退出REPL

### .help

显示所有的帮助命令列表

### .save

保存当前REPL会话到文件

### .load

加载一个文件到当前REPL会话中

### .editor

进入编辑模式， ctrl + D 完成或者 ctrl + C 取消

### -

认的解释器会把最近一次解释的表达式的结果赋值给变量 _ （下划线）

### await

## 全局变量

* Buffer（缓冲）
* clearImmediate
* clearInterval
* clearTimeout
* console
* exports
* global
* process
* setImmediate
* setInterval
* setTimeout
* URL
* URLSearchParams
