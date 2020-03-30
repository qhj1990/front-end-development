# mysql基础

## 开始使用msyql

### 创建数据库

```msql
create database name;
```

### 显示数据库

```mysql
show databse;
```

### 使用数据库

```mysql
use name；
```

## mysql password

mac下安装Mysql5.7会产生一个默认密码，既不是root也不是空，是一个随机的字符串，在安装过程中会有提醒，若忘记了密码，可以按照以下的方法来重置默认密码。#8wdbjnfzq.H

```shell
1.  sudo /usr/local/mysql/bin/mysqld_safe —skip-grant-tables
2.  update mysql.user set authentication_string=PASSWORD('123456') where user='root'
3.  flush privileges
```

mysql 指令

```shell
sudo /usr/local/mysql/support-files/mysql.server start
sudo /usr/local/mysql/support-files/mysql.server stop
sudo /usr/local/mysql/support-files/mysql.server restart
```
