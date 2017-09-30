---
title: python学习笔记
date: 2017-09-13 09:27:40
categories: 后端
tags: [Python]
---
<Excerpt in index | 首页摘要> 
python学习笔记
<!-- more -->
<The rest of contents | 余下全文>

----

## 1.基础知识

### 下载和安装Python
[官网](https://www.python.org/) 找到download菜单，

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/python_study/1.png?raw=true)
根据你的Windows版本（64位还是32位）从Python的官方网站下载Python 3.x对应的64位安装程序或32位安装程序，然后，运行下载的EXE安装包：


切记一定要勾选这个选项
![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/python_study/2.png?raw=true)
### python包管理工具-->pip
python3是装好就有pip

- 查看是否安装好pip
```
pip -v
```

- 查看安装了哪些包
```
pip list
```

- pip升级
```
python -m pip install --upgrade pip 
```

### python代码质量监控工具-->pylint
- [安装](https://www.pylint.org/#install)
- [关于window使用的说明](https://pylint.readthedocs.io/en/latest/#note-for-windows-user)
- [错误信息的详细说明](http://pylint-messages.wikidot.com/)，直接搜索代号


## 2. 一些python错误

### 2.1
说明：我电脑先安装的python 2.7的版本，然后将它卸了（python自带的卸载），然后利用vs code安装pylint,然后就报错

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/python_study/3.png?raw=true)

按照提示升级到9.0.1还是报同样的错误

解决方法是：
按照他说的升级到的版本，pip升级：升级pip只要切换到easy_install-3.5目录下： 若建立了软链接只要直接以下命令即可：
```
easy_install-3.5 pip==9.0.1
```