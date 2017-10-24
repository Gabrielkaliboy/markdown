---
title: 基于vue-cli快速构建
date: 2017-10-24 15:49:40
categories: 前端
tags: [vue]
---
<Excerpt in index | 首页摘要> 
基于vue-cli快速构建
<!-- more -->
<The rest of contents | 余下全文>

-----
原文：http://www.jianshu.com/p/2769efeaa10a

## 使用npm全局安装vue-cli，在cmd中输入一下命令

```
npm install --global vue-cli
```
安装完了以后，同时在C:\Users\Andminster\AppData\Roaming\npm目录下为会生成几个文件


## 初始化项目
安装完成后，创建自己的工作空间，在cmd切换至刚刚创建好的工作空间，如果已经有工作空间，直接切换到工作空间即可。使用命令创建项目
```
vue init webpack vuetest
```
vuetest改成自己的。
命令输入后，会进入安装阶段，需要用户输入一些信息

Project name (vuetest)                    项目名称，可以自己指定，也可直接回车，按照括号中默认名字（注意这里的名字不能有大写字母，如果有会报错Sorry, name can no longer contain capital letters），阮一峰老师博客[为什么文件名要小写](http://www.ruanyifeng.com/blog/2017/02/filename-should-be-lowercase.html) ，可以参考一下。


Project description (A Vue.js project)  项目描述，也可直接点击回车，使用默认名字


Author (........)       作者，不用说了，你想输什么就输什么吧


接下来会让用户选择

Runtime + Compiler: recommended for most users    运行加编译，既然已经说了推荐，就选它了

Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specificHTML) are ONLY allowed in .vue files - render functions are required elsewhere   仅运行时，已经有推荐了就选择第一个了


Install vue-router? (Y/n)    是否安装vue-router，这是官方的路由，大多数情况下都使用，[vue-router官网](https://router.vuejs.org/zh-cn/) 。这里就输入“y”后回车即可。


Use ESLint to lint your code? (Y/n)      是否使用ESLint管理代码，ESLint是个代码风格管理工具，是用来统一代码风格的，并不会影响整体的运行，这也是为了多人协作，新手就不用了，一般项目中都会使用。[ESLint官网 ](https://eslint.org/)

接下来也是选择题Pick an ESLint preset (Use arrow keys)            选择一个ESLint预设，编写vue项目时的代码风格，因为我选择了使用ESLint

Standard (https://github.com/feross/standard)    标准，有些看不明白，什么标准呢，去给提示的[standard  github](https://github.com/standard/standard)地址看一下， 原来时js的标准风格

AirBNB (https://github.com/airbnb/javascript)    JavaScript最合理的方法，这个github地址说的是JavaScript最合理的方法

具体选择哪个因人而异吧  ，我选择标准风格

Setup unit tests with Karma + Mocha? (Y/n)  是否安装单元测试，我选择安装

Setup e2e tests with Nightwatch(Y/n)?     是否安装e2e测试 ，我选择安装

至此，项目初始化完成

## 项目结构说明
先看一下，项目的目录
![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/vue/1.png?raw=true)

bulid   里面是一些操作文件，使用npm run *    时其实执行的就是这里的文件

config 配置文件，执行文件需要的配置信息

src   资源文件，所有的组件以及所用的图片都是在这个放着的简单看一下这个文件夹下都放了那些东西

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/vue/2.png?raw=true)


assets  资源文件夹，放图片之类的资源

components  组件文件夹，写的所有组件都放在这个文件夹下，现在有一个写好的组件已经放到里面了

router  路由文件夹，这个决定了也面的跳转规则

App.vue应用组件，所有自己写的组件，都是在这个组件之上运行了

main.js    webpack入口文件，webpack四大特性entry入口、output输出，loader加载器，plugins插件，可以再项目中build\webpack.base.conf.js第12行看到这个入口文件是哪个。


## 安装模块
切换到项目目录

cd vuetest

安装一来模块
```
npm install
```

这里只用了install是安装所有的模块，如果是安装具体的那个模块install 后面输入模块的名字即可，只输入install就按照项目的根目录下的package.json文件中依赖的模块安装，这个文件里面是不允许有任何注释的，每个使用npm管理的项目都有这个文件，是npm操作的入口文件。因为是初始项目，还没有任何模块，需要安装所有的模块，这就是为什么我们刚下载下来别人的项目时都需要先运行 npm install 命令，因为模块较多，文件比较大，所以没有上传模块，这个不需要上传那些文件的配置是在根目录下.gitignore配置的，这是git操作的配置文件，涉及到的git操作都要操作这个文件，可以没有，也可以什么都不写。这个安装时间比较长，再加上npm是国外的服务器，就更慢了，也可以再开始之前就讲npm切换到taobao镜像上，就相对会快一些，这里可以看一下阮一峰老师的[npm 模块安装机制简介](http://www.ruanyifeng.com/blog/2016/01/npm-install.html)


安装完成后，目录中会多出来一个node_modules文件夹，这里放的就是所有依赖的模块,这里文件比较多，也比较大，现在就明白为什么大家都不上传这个文件了


## 执行流程
项目构建完成，现在我们输入npm run dev运行项目吧，看看有什么效果

自动打开默认浏览器显示页面

执行npm run dev命令，程序会先找到根目录下的package.json文件，找到文件中的scripts项，找到对应的dev命令，执行dev对应的命令，这里我们也可以不用npm run dev 直接输入dev后面的命令效果是一样的，这样做的目的是因为有时命令会很长有很难记住，这种方式会非常的方便，具体只用可以参考阮一峰老师的npm script使用指南 

执行dev命令，按照dev命令中的路径找到对应的build下dev-server.js文件，之后按照脚本的程序执行，首先引入版本检测文件check-versions，使用的机制可学习一下阮一峰老师的require() 源码解读 ，接下来引入配置文件，process.env.NODE_ENV获取环境变量，也就是判断当前运行的是测试环视开发环境，可是使用console.log(process.env.NODE_ENV)将获取到的值打印到cmd中，可以看到是值是config\dev.env.js第五行定义的值“development”，很显然是开发模式，接下来就是引入一些模块，在第13行中，根据环境变量来判断我们要引入哪个执行文件，显然是当前目录下的webpack.dev.conf文件，先不看这个文件，下来是端口号，这个比较关心一些，毕竟端口号不能一直是8080端口吧，要经常修改这个端口号的。端口号又是判断的，并且也用到了换将变量了，这一次我门将process.env、process.env.PORT、config.dev.port都打印出来，看看里面都什么，（这里要说明一下，当我们直接将打印代码写到获取端口号下面是，刚运行时有，自动打开页面时被刷新了，还没来得及看呢，不过仔细一点，就会发现它自己也打印了一句话“Listening at http://localhost:8080”，我在文件中71行找到了打印这句话的代码，好的，那我就把打印写到这了），看看输出什么呢，内容相当的多，我就不贴代码了，主要看一下，判断的两个端口号是多少

process.env.PORT >>> undefined

config.dev.port >>> 8080

很显然，当前所用的端口号是配置文件中的端口号了，但是看一下配置文件中，并没有dev或dev.port文件啊，可一下将config中的所有文件都看一遍，看哪里有8080的代码，文件不多，代码不成，很快就能找见的。很快就在index.js文件下找到了，原来这块的dev只的并不是文件，而是index.js中的dev对象，并且port取得是的dev对象中port的值，端口号就在这里修改，这里牵扯的内容较多，就不多说了（这里说个小技巧，当找不见某个变量时，优先从index、main之类频繁使用字样的文件中查找，因为这是一种习惯吧）。好了，这个文件的内容较多，不全部说了，看一下注释大概知道是什么意思，后续另写篇博客对这些文件和代码统一说明。

下面简单看一下webpack.dev.conf文件，主要看到var baseConfig = require('./webpack.base.conf')，除了webpack.base.conf本身以外，其余三个webpack配置文件都引入了这个文件，从字面就可以看出，这是webpack的基础配置，这些文件就不过多说明了。

接下来就看一下webpack.base.conf文件，这是核心文件，必须执行的文件，这里可以看到entry和output，这就是入口和输出路径，在入口处看到了./src/main.js，这就找到了界面的入口处了。

在main.js中可以看到创建了一个vue实例，并加载了模板组件App.vue，在再App.vue组件中看到模板加入来了一个图片和一个自定义的router-view标签，这个标签是在vue-router模块中定义的，因为在main.js创建vue实例时已经添加了router，这里可以直接使用，router-view标签里的内容可以通过src\router\index.js中查看，在第三行看到import Hello from 'components/Hello'，引入了components下的Hello文件，并且在routes使用到了这个组件，这就是router-view标签加载（渲染）的内容，在Hello.vue文件中看到了浏览器显示的出logo一外的算有元素，界面上显示的所有内容都找到了，在通过output输出到界面上整个过程就执行完了。

在说一下打包，因为不可能将这个项目就这样部署上去，需要将页面打包，打包命令为

```
npm run build
```

打包完成后，会在根目录下生成一个dist文件夹，这就是最后的成品页面，在打包好的最底下为们会看到一个黄色的警告


它提示提示：建立文件是放在一个HTTP服务器。打开index.html文件：/ /不工作。当直接使用浏览器打开文件时，浏览器控制台会报错


很多资源都加载失败，仔细看一下路径，绝对路径，F盘下哪有static文件夹，那就要将打包的路径改为相对路径，这个根据build命令一路跟踪，到config\index.js文件中的build对象，将assetsPublicPath中的“/”，改为“./”即可，就在前面加个点就可以了，并在build\build.js将这两句的提示信息删掉或注释掉，再打包直接用浏览器直接运行就好了。

index.html就是单页应用的页面，static文件夹下的两个文件夹是什么，都知道，就不多说。这里的文件名和文件路径都是可以通过配置文件修改的，具体可以按照命令的执行看一下。