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
# 常见错误收集

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

## 代码性错误

Notice: Undefined index
原因:
```
$logout=$_GET['action'];
```

我们经常接收表单POST过来的数据时报Undefined index错误,如下: $act=$_POST['action']; 
用以上代码总是提示 
Notice: Undefined index: act in D:\test\post.php on line 20 
另外，有时还会出现 
Notice: Undefined variable: Submit ...... 等一些这样的提示 

出现上面这些是 PHP 的提示而非报错，PHP 本身不需要事先声明变量即可直接使用，但是对未声明变量会有提示。一般作为正式的网站会把提示关掉的，甚至连错误信息也被关掉。 

解决方法： 
方法1：服务器配置修改 
修改 php.ini 中的 error配置下错误显示方式：将`error_reporting = E_ALL` 修改为 `error_reporting = E_ALL & ~E_NOTICE `

修改后重启下APCHE服务器，方可生效。 

方法2：对变量进行初始化。 

方法3：做判断isset($_post['']),empty($_post['']) if --else 

方法4：在出现notice代码之前加上@，@表示这行有错误或是警告不要输出，`@$username=$_post['username']; `
在变量前面 加上一个 @ ，如 `if (@$_GET['action']=='save') { ... `

方法5：最后一种很实用，是别人写的一个函数，通过这个函数进行传递值。 

定义一个函数： 

```php
function _get($str){ 
$val = !empty($_GET[$str]) ? $_GET[$str] : null; 
return $val; 
} 
```
然后在用的时候，直接用 _get('str') 代替 $_GET['str'] 就行啦~

只有第四种方法有效，其余方法我改的不成。

# 工具

## PHP Storm

### 配置php解释器
如果刚安装的phpstorm,没有设置PHP解释器的位置，直接打开PHP文件，就会出现下面的错误。

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/3.png?raw=true)

这时候需要去配置一下PHP解释器

文件-->设置--->语言和框架--->php，如图所示

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/4.png?raw=true)


点击CLI interpreters,如图所示

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/5.png?raw=true)


配置完成后，再打开PHP文件就可以解析了。


### 配置debug
参考：
http://www.cnblogs.com/jsn521/p/3399997.html

老外：
https://blog.jetbrains.com/webide/2011/02/zero-configuration-debugging-with-xdebug-and-phpstorm-2-0/

https://blog.jetbrains.com/phpstorm/2011/03/configure-php-debugging-in-phpstorm-2-0/

0.下载xdebug
在xampp里面打开readme文档，查看当前的php的版本，根据版本去下载对应的xdebug文件。

地址：https://xdebug.org/download.php

 每一个文件分为TS版本和非TS版本 起初我还不能明白这时什么意思 后来了解到TS代表的应该是thread safe(线程安全) 不知道理解的对不对 对于php的了解不是很深入 这里我也不是很明白两者之间的关系 开始配置的时候 我下载的是非TS版本 结果证明我错了 搞了很久 向php.ini添加配置信息的之后 使用命令行转到php的解压缩文件目录之下 运行php.exe -m之后 始终不能看到Xdebug模块的加载  后来尝试了5.2 VC9 TS (32 bit 我的电脑是32位的)这个版本之后 终于成功了 所以建议大家下载第二个版本 如果不行的话 可以尝试第一个版本 鉴于每台电脑的不同 大家可以多尝试一下

把下载的dll拷贝到php里面的ext文件夹里


****
如果不能确定到底下载哪个版本的xdebug文件，可以将上面配置好的PHP环境运行
```php
<?php
phpinfo()
?>
```
将页面上所有输出的文字copy一下，粘到这个https://xdebug.org/wizard.php里面，让他给你判断一下到底安装哪个版本，怎么按，如图所示
![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/14.png?raw=true)

1.修改配置文件php.ini，按下面修改（位置在最后）

```
//这里是上一步下载的动态链接库的存放路径 建议使用绝对路径
zend_extension=D:\xampp\php\php_xdebug-2.5.5-7.0-vc14.dll
[XDebug]
//是否允许远程终端 这里标示开启
xdebug.remote_enable = on
xdebug.remote_host="127.0.0.1"
//这里表示服务器的监听端口
xdebug.port=9000
xdebug.profiler_enable = on
xdebug.profiler_enable_trigger = off
xdebug.profiler_output_name = cachegrind.out.%t.%p
xdebug.remote_autostart=on
xdebug.profiler_output_dir = "D:/wamp/tmp"
xdebug.show_local_vars=0
//这里是调试器的关键字 在Chrome以及FireFox中插件配置的时候要用到
xdebug.idekey = PHPSTORM
```
修改完后重启服务

用phpinfo查看，出现如下配置，则代表修改成功![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/6.png?raw=true)

2.phpstorm设置

File->Settings->语言和框架-->php--->service，如下图：
这里要填写服务器端的相关信息: 
name: localhost， 
host: localhost， 
port: 80， 
debugger: XDebug

如果是自定域名则host设置自定域名, 如laravel5.io

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/7.png?raw=true)


 PHP->Debug页面 Debug Port设置为9000

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/8.png?raw=true)


 PHP标签下Debug->DBGp Proxy 配置如下
进入File>Settings>PHP>Debug>DBGp Proxy 填写： 
IDE key: phpStorm 
host: localhost （如果是你自己自定义的域名，改成你自己的）
port: 80

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/9.png?raw=true)

 设置完毕，点OK退出。



3.配置PHP Web Application
点菜单栏的Run>Edit Configurations… 在弹出的窗口中添加一个调试配置：

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/10.png?raw=true)


点击左上角加号，选择PHP Web Application

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/11.png?raw=true)

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/12.png?raw=true)


![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/13.png?raw=true)

填写完毕后，在代码里设置断点,设置调试模式， 再开启电话icno监听, 点小甲壳虫启动调试

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/13.png?raw=true)

这样就能用了


小插曲，有的时候并不能打开我们当前调试的页面，而是哪个默认的，他会弹出这个，然后同意就好了
![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/php/15.png?raw=true)

4.浏览器插件

再下个浏览器插件, xdebug helper, 下载好之后点选项, IDE选PHPSTORM, 不想让所以网页显示小甲虫, 可以设置domain filter

JetBrains IDE Support扩展，安装