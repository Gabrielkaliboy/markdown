---
title: 关于npm的一些常用命令
date: 2017--12 21:23:40
categories: 前端
tags: [node]
---
<Excerpt in index | 首页摘要> 
关于npm的一些常用命令
<!-- more -->
<The rest of contents | 余下全文>

----

## 1. 初始化一个项目的时候，生成package.json文件

```
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (node_modules) runoob                   # 模块名
version: (1.0.0) 
description: Node.js 测试模块(www.runoob.com)  # 描述
entry point: (index.js) 
test command: make test
git repository: https://github.com/runoob/runoob.git  # Github 地址
keywords: 
author: 
license: (ISC) 
About to write to ……/node_modules/package.json:      # 生成地址

{
  "name": "runoob",
  "version": "1.0.0",
  "description": "Node.js 测试模块(www.runoob.com)",
  ……
}


Is this ok? (yes) yes
```

执行完段以后，在我们的项目下面就会看到package.json这个文件,下面就是第一次安装的时候，package.json里面的内容,完全是根据咱们初始化的时候填写来的：

```json
{
  "name": "shopping",
  "version": "1.0.0",
  "description": "vue练手项目",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "vue"
  ],
  "author": "Gabriel_wei",
  "license": "MIT"
}
```

`cnpm install vue --save`这种--save会安装到dependencies这一项里面，执行完这个命令，package.json变为
```json
{
  "name": "shopping",
  "version": "1.0.0",
  "description": "vue练手项目",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "vue"
  ],
  "author": "Gabriel_wei",
  "license": "MIT",
  "dependencies": {
    "vue": "^2.4.4"
  }
}
```
注：我们的一般的插件库默认会放到dependencies里面，所以一般安装的时候就--save


`cnpm install vue-resource --save-dev`,这种命令，会把我们安装的东西放到devDependencies里面。执行完这个命令，package.json变为：
```json
{
  "name": "shopping",
  "version": "1.0.0",
  "description": "vue练手项目",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "vue"
  ],
  "author": "Gabriel_wei",
  "license": "MIT",
  "dependencies": {
    "vue": "^2.4.4"
  },
  "devDependencies": {
    "vue-resource": "^1.3.4"
  }
}

```

不管哪种安装命令，只要安装了，就可以在node_modules里面看到
## 2.npm自身升级
```
npm i -g npm to update
```