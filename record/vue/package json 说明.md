# package.js

## 1. package.json是什么？

 什么是Node.js的模块（Module）？在Node.js中，模块是一个库或框架，也是一个Node.js项目。Node.js项目遵循模块化的架构，当我们创建了一个Node.js项目，意味着创建了一个模块，这个模块的描述文件，被称为package.json。
 通常情况下package.json内容出错，会导致项目出现bug，甚至阻止项目的运行。

## 2. 一个package.json文件说明

```json
{
  "name": "secondproject",//模块名称
  "version": "1.0.0",//模块版本
  "description": "A Vue.js project",//对模块的描述
  "author": "datura",//作者是谁
  "private": true,//如果值为true,npm将拒绝发布它
  "scripts": {//值是一个对象，里面指定了项目的生命周期各个环节需要执行的命令
    "dev": "node build/dev-server.js",//这个就是在命令行执行npm run dev,其实是运行dev-server.js文件
    "build": "node build/build.js",//build命令（有一个钩子的概念：比如这个build有prebuild和postbuild
    "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",//babel是一个编译器，可以把ES6编译成ES5.，这句先是设置编译环境为test环境下；karma是一个运行时，它产生一个web服务环境来运行项目代码，并执行测试。..
    "e2e": "node test/e2e/runner.js",//e2e模拟用户行为的测试，端到端测试
    "test": "npm run unit && npm run e2e"//执行单元测试和e2e测试
  },//关于npm钩子：通常程序只能处理来自内部的消息，如果希望对外部发来的消息也能拦截处理，就需要用到Hook技术。比如想在run build之前自动执行点任务,可以将其写在run prebuild标签里；postbuild在build之后自动执行
  "dependencies": {//配置模块依赖的模块列表，key是模块名称，value是版本范围，版本范围是一个字符，可被一个或多个空格分割。
    "router": "^1.3.0",//路由版本
    "vue": "^2.2.1",//vue版本
    "vue-resource": "^1.2.1",//一个插件，通过xmlHttpRequest或jsonp发起请求并处理响应。
    "vue-router": "^2.3.0"//
  },
  "devDependencies": {//这里写的依赖是用于开发环境的，不发布到生产环境。
    "autoprefixer": "^6.7.2",
    "babel-core": "^6.22.1",
    "babel-loader": "^6.2.10",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-preset-latest": "^6.22.0",
    "babel-preset-stage-2": "^6.22.0",
    "babel-register": "^6.22.0",
    "chalk": "^1.1.3",
    "connect-history-api-fallback": "^1.3.0",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.26.1",
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.14.1",
    "extract-text-webpack-plugin": "^2.0.0",
    "file-loader": "^0.10.0",
    "friendly-errors-webpack-plugin": "^1.1.3",
    "function-bind": "^1.1.0",
    "html-webpack-plugin": "^2.28.0",
    "http-proxy-middleware": "^0.17.3",
    "webpack-bundle-analyzer": "^2.2.1",
    "cross-env": "^3.1.4",
    "karma": "^1.4.1",
    "karma-coverage": "^1.1.1",
    "karma-mocha": "^1.3.0",
    "karma-phantomjs-launcher": "^1.0.2",
    "karma-sinon-chai": "^1.2.4",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-spec-reporter": "0.0.26",
    "karma-webpack": "^2.0.2",
    "lolex": "^1.5.2",
    "mocha": "^3.2.0",
    "chai": "^3.5.0",
    "sinon": "^1.17.7",
    "sinon-chai": "^2.8.0",
    "inject-loader": "^2.0.1",
    "babel-plugin-istanbul": "^3.1.2",
    "phantomjs-prebuilt": "^2.1.14",
    "chromedriver": "^2.27.2",
    "cross-spawn": "^5.0.1",
    "nightwatch": "^0.9.12",
    "selenium-server": "^3.0.1",
    "semver": "^5.3.0",
    "opn": "^4.0.2",
    "optimize-css-assets-webpack-plugin": "^1.3.0",
    "ora": "^1.1.0",
    "rimraf": "^2.6.0",
    "url-loader": "^0.5.7",
    "vue-loader": "^11.0.0",
    "vue-style-loader": "^2.0.0",
    "vue-template-compiler": "^2.2.1",
    "webpack": "^2.2.1",
    "webpack-dev-middleware": "^1.10.0",
    "webpack-hot-middleware": "^2.16.1",
    "webpack-merge": "^2.6.1"
  },
  "engines": {//指定项目运行的node或者npm版本范围，有点像安卓的指定开发level哦
    "node": ">= 4.0.0",
    "npm": ">= 3.0.0"
  },
  "browserlist": [//在不同的前端工具之间共享目标浏览器的库，确定哪些支持哪些版本的浏览器
    "> 1%",//全球有超1%的人使用的浏览器
    "last 2 versions",//根据CanIUse.com追踪的最后两个版本的所有浏览器
    "not ie <= 8"//排除先前查询选择的浏览器    天啦噜 英语不好是硬伤 不知怎么翻译好理解
  ]
}
```

## 一篇详细介绍

[转自](https://www.cnblogs.com/tzyy/p/5193811.html#_h1_0)

### 概述

本文档是自己看官方文档的理解+翻译，内容是package.json配置里边的属性含义。package.json必须是一个严格的json文件，而不仅仅是js里边的一个对象。其中很多属性可以通过npm-config来生成。

### name

package.json中最重要的属性是name和version两个属性，这两个属性是必须要有的，否则模块就无法被安装，这两个属性一起形成了一个npm模块的唯一标识符。模块中内容变更的同时，模块版本也应该一起变化。
name属性就是你的模块名称，下面是一些命名规则:

- name必须小于等于214个字节，包括前缀名称在内（如 xxx/xxxmodule）。
- name不能以"_"或"."开头
- 不能含有大写字母
- name会成为url的一部分，不能含有url非法字符

    **下面是官网文档的一些建议：**

- 不要使用和node核心模块一样的名称
- name中不要含有"js"和"node"。
- name属性会成为模块url、命令行中的一个参数或者一个文件夹名称，任何非url安全的字符在name中都不能使用，也不能以"_"或"."开头
- name属性也许会被写在require()的参数中，所以最好取个简短而语义化的值
- 创建一个模块前可以先到后边的网址查查name是否已经被占用. https://www.npmjs.com/

name属性可以有一些前缀如 e.g. @myorg/mypackage.在npm-scope(7)的文档中可以看到详细说明

### version

version必须可以被npm依赖的一个node-semver模块解析。具体规则见下面的dependencies模块

### description

一个描述，方便别人了解你的模块作用，搜索的时候也有用。

### keywords

一个字符串数组，方便别人搜索到本模块

### homepage

项目主页url
**注意:**
这个项目主页url和url属性不同，如果你填写了url属性，npm注册工具会认为你把项目发布到其他地方了，获取模块的时候不会从npm官方仓库获取，而是会重定向到url属性配置的地址。
（原文档中用了 spit(吐)这个单词，作者表示他不是在开玩笑:）

### bugs

填写一个bug提交地址或者一个邮箱，被你的模块坑到的人可以通过这里吐槽，例如：

```json
{ "url" : "https://github.com/owner/project/issues"
, "email" : "project@hostname.com"
}
```

url和email可以任意填或不填，如果只填一个，可以直接写成一个字符串而不是对象。如果填写了url，npm bugs命令会使用这个url。

### license

你应该为你的模块制定一个协议，让用户知道他们有何权限来使用你的模块，以及使用该模块有哪些限制。最简单的，例如你用BSD-3-Clause 或 MIT之类的协议，如下：
{ "license" : "BSD-3-Clause" }
你可以在https://spdx.org/licenses/这个地址查阅协议列表 。

### 和用户相关的属性: author, contributors

"author"是一个码农， "contributors"是一个码农数组。 "person"是一个有一些描述属性的对象，如下 like this:

```json
{ "name" : "Barney Rubble"
, "email" : "b@rubble.com"
, "url" : "http://barnyrubble.tumblr.com/"
}
```

也可以按如下格式缩写，npm会帮着转换:
"Barney Rubble b@rubble.com (http://barnyrubble.tumblr.com/)"
email和url属性实际上都是可以省略的。描述用户信息的还有一个"maintainers"（维护者）属性。


