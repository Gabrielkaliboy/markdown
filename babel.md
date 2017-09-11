---
title: babel学习
date: 2017-09-09 16:43:40
categories: 前端
tags: [前端,ES6]
---
<Excerpt in index | 首页摘要> 
babel学习
<!-- more -->
<The rest of contents | 余下全文>

-----
## 1.babel
资料来自 http://es6.ruanyifeng.com/#docs/intro

## 2.配置文件.babelrc   
Babel 的配置文件是.babelrc，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。

该文件用来设置转码规则和插件，基本格式如下。
```json
{
  "presets": [],
  "plugins": []
}
```
presets字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。
```
# 最新转码规则
$ npm install --save-dev babel-preset-latest

# react 转码规则
$ npm install --save-dev babel-preset-react

# 不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
```

然后，将这些规则加入.babelrc。
```
  {
    "presets": [
      "latest",
      "react",
      "stage-2"
    ],
    "plugins": []
  }
```
注意，以下所有 Babel工具和模块的使用，都必须先写好.babelrc。

## 3.命令行转码babel-cli 
Babel提供babel-cli工具，用于命令行转码。

它的安装命令如下。

```
$ npm install --global babel-cli
```

基本用法如下。

```
# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```

上面代码是在全局环境下，进行 Babel 转码。这意味着，如果项目要运行，全局环境必须有 Babel，也就是说项目产生了对环境的依赖。另一方面，这样做也无法支持不同项目使用不同版本的 Babel。


一个解决办法是将babel-cli安装在项目之中。

```
# 安装
$ npm install --save-dev babel-cli
```

然后，改写package.json。
```
{
  // ...
  "devDependencies": {
    "babel-cli": "^6.0.0"
  },
  "scripts": {
    "build": "babel src -d lib"
  },
}
```

转码的时候，就执行下面的命令。
```
$ npm run build
```
