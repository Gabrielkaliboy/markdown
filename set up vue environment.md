1. 首先确保你的电脑有git，然后安装node，现在node自带npm

2. 安装vue-cli
网址：https://github.com/vuejs/vue-cli
注意，官网写的node版本和npm的版本：Node.js (>=4.x, 6.x preferred), npm version 3+ and Git.

3. 为了保证安装速度，我们安装淘宝的镜像
官网：https://cnpmjs.org/
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
4. 安装vue-cli脚手架
```
$ npm install -g vue-cli
```
5. 查看一下vue是否安装成功
```
$ vue

  Usage: vue <command> [options]


  Commands:

    init        generate a new project from a template
    list        list available official templates
    build       prototype a new project
    help [cmd]  display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```
出现了vue的信息，说明安装成功

6. 查看一下我们可以使用的模板
```
$ vue list

  Available official templates:

  ★  browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
  ★  browserify-simple - A simple Browserify + vueify setup for quick prototyping.
  ★  simple - The simplest possible Vue setup in a single HTML file
  ★  webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
  ★  webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.


```
7. 新建一个文件夹vueTest，并且进入当前文件夹，为了确保不出错，地址里面不有有中文
```
$ cd vueTest
```
8. 像6中提示的一样，我们使用webpack模板来创建我们的东西
官网给我们的方法
```
$ vue init <template-name> <project-name>
<template-name>:模板的名字，我们用的webpack
<project-name>：项目的名字，我们叫vueTest
```

9. 他会给我们返回一系列的恭喜，所以我们输入的命令是
```
$ vue init webpack vueTest

  This will install Vue 2.x version of the template.
  这将会使用这个模板搭建一个vue2.+版本
  For Vue 1.x use: vue init webpack#1.0 vueTest
  如果想使用vue1.+版本，请使用这个命令
? Project name (vueTest)
在我们使用vueTest的时候，它提示我们命名里面不能有大写字母，所以我将它改为了sell
? Project name sell
? Project description (A Vue.js project) sellis my first  vue project
项目描述：这是我的第一个vue项目
? Project description sele is my first vue project
? Author (Gabriel_zhu <Gabriel_wei@qq.comm>)
作者：默认使用的是git设置里面的名字
? Author Gabriel_zhu <Gabriel_wei@qq.comm>
? Vue build standalone
一个独立的vue创建完成
? Install vue-router? (Y/n) Y
是否安装路由
? Install vue-router? Yes
? Use ESLint to lint your code? (Y/n) n
是否使用ESlint来检查你的代码
? Use ESLint to lint your code? No
? Setup unit tests with Karma + Mocha? (Y/n) n
是否安装Mocha测试单元
? Setup unit tests with Karma + Mocha? No
? Setup e2e tests with Nightwatch? (Y/n) n
是否安装端到端（e2e）测试工具Nighwatch
? Setup e2e tests with Nightwatch? No

   vue-cli · Generated "vueTest".
   脚手架生成了vueTest
   To get started:

     cd vueTest
     npm install
     npm run dev

   Documentation can be found at https://vuejs-templates.github.io/webpack

```

10. 看9中的这里
```
   To get started:

     cd vueTest
     npm install
     npm run dev
```
vue -cli真的很好，给出了我们接下来该做什么

11. 切进vueTest文件夹，这时候你可以看看现在文件夹目录
```
$ cd vueTest
切进这个文件夹

$ npm install
执行install命令，安装我们package.json里面的东西，这个过程有点慢，耐心等待
这个过程完事以后，在我们的文件目录里面可以看到多了一个node_modules文件夹，这就是我们执行npm install命令下载下来的东西

$npm run dev
将我们程序跑起来，他会自动唤起我们的浏览器，当然你可以手动输入
http://localhost:8080/#/
```

12. 将程序跑起来的git代码
```
$ npm run dev

> sell@1.0.0 dev E:\vueTest\vueTest
> node build/dev-server.js

> Starting dev server...
 DONE  Compiled successfully in 1874ms09:55:06

> Listening at http://localhost:8080

```

13. 以后退出了这个程序，在想跑起来，只需要在这个文件夹目录里面git bash就行，执行

``` 
$ npm run dev
```