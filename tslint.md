---
title: TSLint使用以及一些常见错误
date: 2017-08-30 10:49:40
categories: 电脑知识
tags: [cmd]
---
<Excerpt in index | 首页摘要> 
TSLint使用以及一些常见错误
<!-- more -->
<The rest of contents | 余下全文>

-----

### 1.说明
TSLint是用来监控typescript代码质量的工具

[官网](https://palantir.github.io/tslint/)

[github](https://github.com/palantir/tslint)


### 2.常见错误说明

- `[tslint] file should end with a newline (eofline)`:代码应该以换行符结尾。其实意思就是在代码的结尾要有一个回车，把光标定位到下面一行。


![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/TSLint/1.gif?raw=true)


-  trailing whitespace:尾部有多余的空白（空格）

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/TSLint/2.gif?raw=true)

- expected nospace before colon in property-declaration (typedef-whitespace):在属性声明之前不应该有空格

![]()