# 廖雪峰的读书笔记 
---
1. 安装node和npm
- 从官网下载最新的node并安装，自带npm
- 查看node是否安装成功，打开cmd,输入
```
node -v
```
如果返回版本号，则说明安装成功

2. 在命令行直接输入node,将直接进入node.js交互环境。在交互环境下，可以输入任意的javascript语句，回车就可以得到结果
3. 跳出node.js环境，只需要按两次Ctrl+C
4. 查看npm的版本
```
npm -v
```

5. 运行一个实例
- 使用sublime编写一个名字为1.js的文件，内容为

```
"use strict";
console.log("hello world");
```
- 使用git 直接进入当前文件夹，直接输入命令行

```
node 1.js
他会给我们输出hello world
```
我们当前目录下面没有2.js,此时我们如果运行，node 2.js，就会报错，如下
```
node 2.js
Error: Cannot find module 'E:\朱宏伟\代码\node\2.js'
    at Function.Module._resolveFilename (module.js:470:15)
    at Function.Module._load (module.js:418:25)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:422:7)
    at startup (bootstrap_node.js:143:9)
    at bootstrap_node.js:537:3

```

6. 补充一些cmd命令
- 进入E盘
E:

- 返回上级目录
cd ..

- 查看当前文件夹下面的文件目录
tree

- 切入node文件夹
cd:node
- 运行1.js
node 1.js

7. 注意区分node交互模式和命令行模式

- 命令行模式下面，你输入1+“33”会报错
- node模式下面，你输入1+“33“会返回字符串”133“
- node交互模式就相当于Chrome的控制台

8. 使用严格模式

- 为所有的js文件都是用严格模式（这个是在命令行模式下面）
node --use_strict