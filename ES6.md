---
title: 学习ES6
date: 2017-08-25 16:17:40
categories: 前端
tags: [前端,ES6]
---
<Excerpt in index | 首页摘要> 
学习ES6
<!-- more -->
<The rest of contents | 余下全文>

-----

## 0.介绍

### 各大浏览器的最新版本对 ES6 的支持
可以查看 kangax.github.io/es5-compat-table/es6/。

### 使用下面的命令，可以查看 Node 已经实现的 ES6 特性。
```
$ node --v8-options | grep harmony
```
上面这个命令我测试的时候不能查看ES6特性

阮一峰写的一个插件，专门用来查看node对于ES6的支持，[ ES-Checker](https://github.com/ruanyf/es-checker)

安装
```
$ npm install -g es-checker
```
测试
```
$ es-checker
```