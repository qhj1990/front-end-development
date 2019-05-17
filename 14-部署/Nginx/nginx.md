## Nginx 优点

- 支持高并发
- 内存消耗少
- 免费使用可以商业化
- 配置文件简单
- 反向代理，负载均衡

## Nginx 版本

- Mainline version： 开发版本
- Stable version： 稳定版本
- legacy version： 历史版本

## Nginx安装

1. 安装必要程序

```shell
yum -y install gcc gcc-c++ autoconf pcre-devel make automake
yum -y install wget httpd-tools vim

```

## 查看nginx版本

```shell
yum list | grep nginx

```

## Nginx 下载网站

http://nginx.org/en/download.html

## 配置yum源

```shell
vim /etc/yum.repos.d/nginx.repo
```

```shell
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/OS/OSRELEASE/$basearch/
gpgcheck=0
enabled=1
```

把 baseurl改为操作系统和版本
baseurl=http://nginx.org/packages/centos/7/$basearch/

## 安装

```shell
yum install nginx
```

## yum源更改后

会出现以前nginx modules 和现在官方的modules 不匹配需要我们先将旧的modules 卸载安装新版官方的modules

```shell
yum remove nginx-mod*

yum install nginx-module-*

systemctl restart nginx
```

## 版本号

```shell
nginx -v
```

## 查看Nginx的安装目录

```shell
rpm -ql nginx
```

rpm 是linux的rpm包管理工具，-q 代表询问模式，-l 代表返回列表

## 配置文件 nginx.conf

## 子配置项 conf.d/default.conf

## nginx 启动 停止 重启

### 启动

1. 直接启动

```shell
nginx
```

2. systemctl

```shell
systemctl start nginx.service
```

### 停止

1. 从容停止

```shell
nginx -s quit
```

2. 立即停止

```shell
nginx -s stop
```

3. 暴力停止进程

```shell
killall nginx
```

4. systemctl

```shell
systemctl start nginx.service
```

### 重启nginx 服务

```shell
systemctl restart nginx.service
```

### 重新载入配置文件

```shell
nginx -s reload
```

## 查看端口号占用

```shell
netstat -tlnp
```

## 自定义错误页面

配置 /nginx/conf.d/default.conf

- 多错误指向一个页面

```
error_page   500 502 503 504  /50x.html;
```

- 单独为错误

```
error_page 404  /404_error.html;
```

- 错误码换成一个地址

```
error_page  404 http://www.baidu.com
```

## 访问控制

允许特定主机访问，控制一些ip访问

default.conf里进行配置

```
location / {
    deny   123.9.51.42;
    allow  45.76.202.231;
}
```

## 访问权限

### 指令优先级

谁先触发，谁先起作用

### 复杂访问控制权限配置

```
location =/img{
    allow all;
}
location =/admin{
    deny all;
}
```

### 正则表达式设置访问权限

不允许访问所有php代码

```
 location ~\.php$ {
    deny all;
}
```

## 设置虚拟主机

- 基于端口号配置虚拟主机

```
server{
    listen 8001;
    server_name localhost;
    root /usr/share/nginx/html/html8001;
    index index.html;
}
```

- 基于IP的虚拟主机

```
server{
    listen 80;
    server_name 112.74.164.244;
    root /usr/share/nginx/html/html8001;
    index index.html;
}
```

## 使用域名设置虚拟主机

修改etc/nginx/conf.d目录下的default.conf 文件

## 反向代理的设置

etc/nginx/con.d/8001.conf进行修改。

```
server{
    listen 80;
    server_name nginx2.jspang.com;
    location / {
       proxy_pass http://jspang.com;
    }
}
```

### 其它反向代理指令

- proxy_set_header :在将客户端请求发送给后端服务器之前，更改来自客户端的请求头信息。

- proxy_connect_timeout:配置Nginx与后端代理服务器尝试建立连接的超时时间。

- proxy_read_timeout : 配置Nginx向后端服务器组发出read请求后，等待相应的超时时间。
- proxy_send_timeout：配置Nginx向后端服务器组发出write请求后，等待相应的超时时间。
- proxy_redirect :用于修改后端服务器返回的响应头中的Location和Refresh。

## 适配PC或移动设备

1. 在/usr/share/nginx/目录下新建两个文件夹，分别为：pc和mobile目录

```shell
cd /usr/share/nginx
mkdir pc mobile
```

2. 在pc和miblic目录下，新建两个index.html文件，文件里下面内容

3. 进入etc/nginx/conf.d目录下，修改8001.conf文件，改为下面的形式

```
server{
     listen 80;
     server_name nginx2.jspang.com;
     location / {
      root /usr/share/nginx/pc;
      if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
         root /usr/share/nginx/mobile;
      }
      index index.html;
     }
}
```

## Gzip压缩配置

Nginx提供了专门的gzip模块，并且模块中的指令非常丰富。

- gzip : 该指令用于开启或 关闭gzip模块。
- gzip_buffers : 设置系统获取几个单位的缓存用于存储gzip的压缩结果数据流。
- gzip_comp_level : gzip压缩比，压缩级别是1-9，1的压缩级别最低，9的压缩级别最高。压缩级别越高压缩率越大，压缩时间越长。
- gzip_disable : 可以通过该指令对一些特定的User-Agent不使用压缩功能。
- gzip_min_length:设置允许压缩的页面最小字节数，页面字节数从相应消息头的Content-length中进行获取。
- gzip_http_version：识别HTTP协议版本，其值可以是1.1.或1.0.
- gzip_proxied : 用于设置启用或禁用从代理服务器上收到相应内容gzip压缩。
- gzip_vary : 用于在响应消息头中添加Vary：Accept-Encoding,使代理服务器根据请求头中的Accept-Encoding识别是否启用gzip压缩。

```
http {
   .....
    gzip on;
    gzip_types text/plain application/javascript text/css;
   .....
}
```

## 合并请求

```
# js资源http-concat
# nginx-http-concat模块的参数远不止下面三个，剩下的请查阅文档
    location /static/js/ {
        concat on; # 是否打开资源合并开关
        concat_types application/javascript; # 允许合并的资源类型
        concat_unique off; # 是否允许合并不同类型的资源
        concat_max_files 5; # 允许合并的最大资源数目
    }
```

## 图片处理
