---
title: php相关
date: 2017-10-25 15:49:40
categories: 后端
tags: [php]
---
<Excerpt in index | 首页摘要> 
php相关
<!-- more -->
<The rest of contents | 余下全文>

-----

## 关于阿里云服务器问题

### 数据库链接失败
出现下面的报错行为
```
Warning: mysqli_connect(): (HY000/2000): mysqlnd cannot connect to MySQL 4.1+ using the old insecure authentication. Please use an administration tool to reset your password with the command SET PASSWORD 
```

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/1.png?raw=true)


问题分析：

该问题原因是由于出于安全考虑PHP5.3版本之后连接MySQL都统一使用41位加密方式，如果在虚拟主机控制面板修改PHP版本，比如5.2改成5.3，并且没有修改数据库加密方式还是用16位加密方式，连接数据库会报错误

解决方法：

登陆 虚拟主机管理控制台，找到 数据库信息 > 重置密码（建议重置为原数据库密码），加密模式选择41位加密。同理如果是PHP5.3改成5.2版本，也要修改数据库密码加密模式从41位改成16位。

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/2.png?raw=true)


### 新建数据库的时候报错
```
MySQL Access denied for user 'root'@'%' to database 'xxx'  
```
这是由于我们根本没有权限新建数据库，只能在给定的数据库里面新建表，你可以在官网数据库上操作试试。