---
title: vue 2.0+mint UI仿写17对标平台
date: 2017-10-24 13:49:40
categories: 前端
tags: [vue]
---
<Excerpt in index | 首页摘要> 
vue 2.0+mint UI仿写17对标平台
<!-- more -->
<The rest of contents | 余下全文>

-----

## 1. mvvm

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/vue_fang_element/1.png?raw=true)

## 2.vue-cli
https://www.npmjs.com/package/vue-cli

安装：`npm install -g vue-cli`


使用webpack初始化一个名为mint的项目，并初始化他：
```
$ vue init webpack mint

? Project name mint
? Project description 使用vue和mintUI仿写17对标手机端
? Author Gabriel_zhu <Gabriel_wei@qq.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? No
? Setup e2e tests with Nightwatch? No

   vue-cli · Generated "mint".

   To get started:

     cd mint
     npm install
     npm run dev

   Documentation can be found at https://vuejs-templates.github.io/webpack
```

进入mint文件夹`cd mint`