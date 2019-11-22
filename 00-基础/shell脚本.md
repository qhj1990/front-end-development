# shell脚本

shell版本包括sh, Bash; Bash是大多数默认的Shell

## shell变量

* 只能使用改英文字母，数字和下划线（_）
* 使用时需加 $variable_name, ${variable_name}
* 变量用''包围时，直接输出单引号里的内容。
* 变量用""包围时，会先解析里面的变量和命令

### 只读变量

```shell
# 只读变量不允许重新赋值
readonly variable_name
```

### 删除变量

```shell
unset variable_name
```

### 字符串长度

${#variable_name}

### 提取字符串

${variable_name:0:4}
${variable_name:0-4:10}

### 指定字符串开始截取

|  格式   | 说明  |
|  ----  | ----  |
| ${string: start :length}  | 从 string 字符串的左边第 start 个字符开始，向右截取 length 个字符。|
| ${string: start}  | 从 string 字符串的左边第 start 个字符开始截取，直到最后。|
| ${string: 0-start :length}  | 从 string 字符串的右边第 start 个字符开始，向右截取 length 个字符。|
| ${string: 0-start}  | 从 string 字符串的右边第 start 个字符开始截取，直到最后。 |
| ${string#*chars}  | 从 string 字符串第一次出现 *chars 的位置开始，截取 *chars 右边的所有字符。 |
| ${string##*chars}  | 从 string 字符串最后一次出现 *chars 的位置开始，截取 *chars 右边的所有字符。 |
| ${string%*chars}  | 从 string 字符串第一次出现 *chars 的位置开始，截取 *chars 左边的所有字符。 |
| ${string%%*chars}  | 从 string 字符串最后一次出现 *chars 的位置开始，截取 *chars 左边的所有字符 |

## shell数组

```shell
array_name=(arr1 arr2 arr3 arr4)
# 或者
array_name=(
    arr1
    arr2
    arr3
    arr4
)
```

### 数组的长度

```shell
${#array_name[@]}
${#array_name[*]}
```

### 数组的拼接

```shell
array_new = (${array1[@]} ${array2[@]})
array_new = (${array1[*]} ${array2[*]})
```

### 删除数组

```shell
arr=(33 44 55 66)
# 删除某个元素
unset arr[1]
# 删除整个数组，删除后为空数组
unset arr
```

## 注释

### 单行注释

```shell
# 单行注释
```

### 多行注释

```shell
:<<EOF
注释内容...
注释内容...
注释内容...
EOF
```

## shell传参

* $n $0为执行的文件名 $1开始为第一个参数
* $# 参数个数
* $* 字符串形式显示所有参数
* $? 是一个特殊变量，用来获取上一个命令的退出状态，或者上一个函数的返回值。

## 运算符

* 表达式和运算符之间要有空格
* 完整的表达式要被``包围

### 加法

```shell
`expr 1 + 1`
```

## 操作文件和目录

### cp

copy files and directories 拷贝文件和目录

### mv

move/rename files and directories 移动/重命名 文件和目录

### mkdir

create directories 创建文件夹

### rm

remove files and directories 删除文件活文件夹

```shell
rm name.txt
rm directory
rm -i name
```

### rmdir

删除空目录

### cat

查看文件

### tac

最后一行到第一行显示，和cat相反

### tail

查看文档的内容，可以查看最后几行，默认最后10行

### head

查看文件前几行

### ln

创建硬链接和符合链接

## 压缩

### gzip

压缩一个或者多个文件

#### gzip options

### gunzip

把压缩文件复原为没有被压缩的版本

### bzip

### tar

### zip

### rsync

## 流程控制

### if else

### switch

### for

### while

### until
