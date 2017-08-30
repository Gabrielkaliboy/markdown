---
title: 使用ionic开发文档记录
date: 2017-08-25 1:17:40
categories: 前端
tags: [前端,hybird,App]
---
<Excerpt in index | 首页摘要> 
使用ionic开发文档记录
<!-- more -->
<The rest of contents | 余下全文>

-----

### 1.资料库
[ionic中文社区](http://www.ionic-china.com/)

[Ionic_中国ionic与ionicframework中文视频教程分享网](http://www.ionic.wang/)

[Ionic3 教程](http://www.jianshu.com/p/1baf40713c1c)

[菜鸟教程](http://www.runoob.com/ionic/ionic-tutorial.html)

[ionic2 精典入门教程](http://www.360doc.com/content/17/0226/15/16002580_632156317.shtml)

### 2.知识储备
- 前端基本知识（HTML5、JavaScript、CSS）
- [TypeScript](https://www.tslang.cn/docs/handbook/generics.html)

- [Angular](https://angularjs.org/)
- TypeScript的话至少需要了解基本语法，可以看看[TS 中文官方文档](https://www.tslang.cn/docs/home.html)

对 Angular 不太熟悉的可以点这里：
- [Angular 4.0 架构详解 ](http://www.jianshu.com/p/3c06260e6015)

- [Angular 4.0 内置指令全攻略](http://www.jianshu.com/p/4cc3a04ca83a)


### 3.一些概念
#### 什么是 ionic？他和 Cordova、Angular2 有什么联系？
`ionic = Cordova + Angular + ionic CSS `

Cordova 提供了使用 JavaScript 调用 Native 功能，ionic CSS 是一套 UI 框架，ionic 对 Angular 进行了封装。

#### ionic3

ionic 基于 AngularJS 开发。由于 AngularJS1.x 版本在性能上已经很难有较大提升，Google 推出了全新设计的 Angular 2，ionic 也对应着出了2。

ionic2 与一代相比有较大的变化，基于最新的 Angular 2 ，使用 TypeScript 进行开发，如果您没有接触过 AngularJS 或 Ionic1.x，完全不用担心，直接从 ionic2 开始学习即可。

ionic3 是 Angular4.0 推出之后的跟进版本，变化幅度不大。


### 4.快速开始

#### 4.1 安装node
如果没有安装过 Node.js，先去[官网](https://nodejs.org/en/)下载一下。

这部分内容查看[官网快速起步](http://ionicframework.com/docs/intro/installation/)

#### 4.2 全局安装ionic

我安装的时候是3.9.2

```
// 安装
$ npm install -g cordova ionic
// 安装后可以验证一下版本
$ ionic -version
3.9.2
```

#### 4.3新建一个目录
新建一个文件夹，命名为 test，在这文件夹执行下面的命令,下面的意思是新建一个名字为cutePuppyPics的文件夹，

```
ionic start cutePuppyPics
```

他会询问你要新建一个什么样的ionic模板，如图所示

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/1.png?raw=true)

我们输入 `tabs` 然后回车，如图所示

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/2.png?raw=true)

当然我们可以直接将上面两步写成一步

```
// ionic3Demo是项目名，tabs是模板（默认是tabs,其他还有tutorial等）
$ ionic start ionic3Demo tabs
```

#### 4.4 切换到cutePuppyPics目录（或者直接打开这个目录运行git）
```
// 在浏览器中运行项目

//切换到cutePuppyPics目录
$ cd cutePuppyPics/

//运行项目
$ ionic serve
```

如图所示

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/tabs.gif?raw=true)

#### 4.5 在web上运行 iOS、Android、WindowsPhone 项目

把浏览器中的地址改为：
http://localhost:8100/ionic-lab

效果如图

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/1.gif?raw=true)

#### 4.6 如果4.3中选择的不是tabs，而是其他的

- blank(一个空白启动项目):这个会报错，如下图所示，因为是空白模板,看提示应该是少不少东西

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/3.png?raw=true)

- sidemenu(一个带有导航菜单的启动项)

感觉和上面那个没什么区别

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/2.gif?raw=true)

- super:看着和上面这个也没啥区别

a starting project complete with pre-built pages,providers   and best practices for ionic development



### 4.7如果在手机上运行，需要执行以下命令
执行这个命令之前需要配置好jdk和Android SDK,详情请看[win系统搭建ionic环境]()

```
// 如果需要在手机运行，则执行以下命令
// 添加iOS项目
$ ionic cordova platform add ios
// 把src里的内容同步到ios项目中(src后面会讲到)
$ ionic cordova build ios
// 运行iOS项目,相当于在Xcode里面按Command+R
$ ionic cordova emulate ios

//安卓的话同理，把ios替换为android即可
$ ionic cordova platform add android
$ ionic cordova build android
$ ionic cordova emulate android

//如果移除某个ios或者Android
$ ionic cordova platform rm android 
```
























## 搭建ionic环境
上面搭建的只能在web浏览器里面跑起来，我们现在搭建一个Android的


### 5.
