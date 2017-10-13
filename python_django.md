---
title: Django
date: 2017-10-09 18:30:40
categories: 后端
tags: [Python,Django]
---
<Excerpt in index | 首页摘要> 
Django基础
<!-- more -->
<The rest of contents | 余下全文>

----

## 1.安装
### 1.1简单的pip3命令安装方式
先检查一下是否安装pip3,`pip3 -V`,大写的v

然后安装，运行命令：pip3 install django，自动安装Pypi提供的最新版本。

测试是否安好
进入python交互环境
```
>>> import django
>>> django.VERSION
(1, 11, 6, 'final', 0)
>>> 
>>> django.get_version()
'1.11.6'
```


成功安装Django后，在下面的路径可找到django-admin.exe文件，将它加入操作系统环境变量中。这样在以后的调用会比较方便。

`C:\Users\admin\AppData\Local\Programs\Python\Python35\Scripts`

测试是否加入环境变量，在cmd执行`django-admin -help`,会返回一堆东西就是成功了。