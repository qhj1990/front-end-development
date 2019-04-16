# http和https

## http

> HyperText  Transfer Protocol 超文本传输协议

## http请求方法

* get

请求资源

* post

 提交数据

* put

post相接近，指定了资源在服务器的位置

* head
  
获得报文首部

* delete
  
删除服务器上的资源

* options

获取当前url所支持的方法，返回的allow

* trace

追踪路径

* connet
  
要求用隧道协议链接代理

## http状态码

###  2XX 成功

* 200 请求在服务器被正确处理
* 204 No content 请求成功，相应报文不含实体的主体部分
* 206 进行范围请求
  
### 3XX 重定向

* 301 永久重定向
* 302 临时重定向
* 303 资源存在另一个URL
* 304 not modified
* 307

### 4XX 客户端错误

* 400
* 401
* 403 请求被服务器拒绝
* 404  服务器上没有找到请求的资源

### 5XX 服务器错误

* 500 内部服务器错误

## Https

随着App store 上线的app必须要求https，Chrome等浏览器针对http的网站都提示不安全，https应用变得更为广泛，申请https证书也十分必要

### 什么是https

### 如何申请SSL证书

* [阿里云](https://www.aliyun.com/product/cas)
* [腾讯云](https://cloud.tencent.com/product/ssl?from=qcloudHpleftnavSsl)
* [沃通](https://www.wosign.com/)
* [Lets Encrypt](https://letsencrypt.org/)