# zlib压缩

zlib模块提供了用Gzip，Deflate/Inflate和Brotli实现的压缩功能.

## 压缩HTTP请求和响应

zlib模块可以对HTTP中定义的gzip和deflate内容编码进行处理

## 内存使用

压缩和解压对内存要求比较高，可以配置选项调整内存大小

## Flushing

调用.flush会使zlib返回尽可能多的输出，会损耗一定的压缩质量。

## 常量

### zlib常量

## Options

* flush
* finishFlush
* chunkSize
* windowBits
* level 只用于压缩
* memLevel 只用于压缩
* strategy 只用于压缩
* dictionary
* info

## BrotliOptions

* flush
* finishFlush
* chunkSize
* params

