# Path 路径

path模块用于处理文件和目录的路径。不同的操作系统上运行会获得不同格式的路径。

## 不同平台的差别

### path.posix

path方法的POSIX特定实现的访问

### path.win32

windows的path方法实现

### path.sep

分隔符 windows 上是 \, POSIX上是 /

### path.delimiter

方法将返回平台的真实路径，多个用 “:” 或 “;” 隔开。

### path.basename(path)

返回path的文件名

### path.dirname(path)

返回path的路径名

### path.extname(path)

返回path的扩展名

### path.join([...paths])

路径片段生成规范的路径

### path.isAbsolute(path)

判断path是否为绝对路径

### path.normalize(path)

规范化path，解析'..'和'.'等

### path.parse(path)

返回一个对象，包含path的dir root base name ext等属性

### path.relative(from, to)

返回from到to的相对路径

### path.resolve([...paths])

方法将路径或路径片段的序列解析为绝对路径。
