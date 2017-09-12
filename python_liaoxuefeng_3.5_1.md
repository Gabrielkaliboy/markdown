---
title: 廖雪峰 Python 3读书笔记
date: 2017-09-11 19:17:40
categories: 后端
tags: [Python]
---
<Excerpt in index | 首页摘要> 
学习ES6
<!-- more -->
<The rest of contents | 余下全文>

----

## 1.在Windows上安装Python
[64](https://www.python.org/ftp/python/3.5.2/python-3.5.2-amd64.exe)

[32](https://www.python.org/ftp/python/3.5.2/python-3.5.2.exe)


[国内镜像](https://pan.baidu.com/s/1kU5OCOB#list/path=%2Fpub%2Fpython)

很重要
**特别要注意勾上Add Python 3.5 to PATH，然后点“Install Now”即可完成安装。**


### 安装成功

在cmd里面输入Python，返回如下内容就是安装成功，如下也是进入了Python的运行环境

```
C:\Users\admin>python

Python 3.5.2 (v3.5.2:4def2a2901a5, Jun 25 2016, 22:18:55) [MSC v.1900 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
```


## 2.Python解释器
当我们编写Python代码时，我们得到的是一个包含Python代码的以.py为扩展名的文本文件。要运行代码，就需要Python解释器去执行.py文件。

由于整个Python语言从规范到解释器都是开源的，所以理论上，只要水平够高，任何人都可以编写Python解释器来执行Python代码（当然难度很大）。事实上，确实存在多种Python解释器。

### CPython

当我们从Python[官方网站](https://www.python.org/)下载并安装好Python 3.5后，我们就直接获得了一个官方版本的解释器：CPython。这个解释器是用C语言开发的，所以叫CPython。在命令行下运行python就是启动CPython解释器。

CPython是使用最广的Python解释器。教程的所有代码也都在CPython下执行。


## 3. 第一个Python程序

键入`python`,进入交互环境

输入`100+200`,程序会自动返回`300`

输入`print("hello world")`,print是输出，然后把希望打印的文字用单引号或者双引号括起来，但不能混用单引号和双引号

```
>>> print('hello, world')
hello, world
```


### 命令行模式和Python交互模式

在命令行模式下，可以执行`python`进入Python交互式环境，也可以执行python `hello.py`运行一个.py文件。
如果hello.py里面只写
```
100+200+300
```
不会有任何反应，这是因为没有print(),注意print前面不要有任何空格
### 使用文本编辑器

sublime

notepad++

**绝对不能用Word和Windows自带的记事本**

### python 文件

以py结尾，文件名只能是英文字母、数字和下划线的组合


### 直接运行py文件
能不能像.exe文件那样直接运行.py文件呢？在Windows上是不行的，但是，在Mac和Linux上是可以的，方法是在.py文件的第一行加上一个特殊的注释：

```
#!/usr/bin/env python3

print('hello, world')
```

然后，通过命令给hello.py以执行权限：

```python
$ chmod a+x hello.py
```

### 输入和输出
print()函数也可以接受多个字符串，用逗号“,”隔开，就可以连成一串输出：
```
>>> print('The quick brown fox', 'jumps over', 'the lazy dog')
The quick brown fox jumps over the lazy dog
```
注意这里必须是单引号，双引号会报错