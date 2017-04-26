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

### 搭建node开发环境
---
- lauch.json文件内容
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Run hello.js",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/hello.js",
            "stopOnEntry": false,
            "args": [],
            "cwd": "${workspaceRoot}",
            "preLaunchTask": null,
            "runtimeExecutable": null,
            "runtimeArgs": [
                "--nolazy"
            ],
            "env": {
                "NODE_ENV": "development"
            },
            "externalConsole": false,
            "sourceMaps": false,
            "outDir": null
        }
    ]
}
```

- hello.js内容
```javascript
var name='world';

//注意这里的写法，是ES6里面的，${},``是英文状态下的table键上面的东东
var s=`hello,${name}!`;

console.log(s);
```

### 模块
---
- 在Node环境中，一个.js文件就称之为一个模块（module）。
- 使用模块有什么好处？
  - 提高了代码的可维护性
  - 编写代码不必从零开始。当一个模块编写完毕，就可以被其他地方引用
  - 使用模块还可以避免函数名和变量名冲突

- hello.js
```javascript
'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

//把函数greet作为模块的输出暴露出去，这样其他模块就可以使用greet函数了
module.exports = greet;
```

- main.js文件，调用hello模块的greet函数
```javascript
'use strict';

// 引入hello模块:
//变量greet就是在hello.js中我们用module.exports = greet;输出的greet函数
//在使用require()引入模块的时候，请注意模块的相对路径
var greet = require('./hello');//// 不要忘了写相对目录!

//如果只写模块名：
//var greet = require('hello');
//则Node会依次在内置模块、全局模块和当前模块下查找hello.js，你很可能会得到一个错误：

var s = 'Michael';

greet(s); // Hello, Michael!
```
如果只写模块名字，会报错
```
Error: Cannot find module 'hello'
    at Function.Module._resolveFilename (module.js:470:15)
    at Function.Module._load (module.js:418:25)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (E:\hello\main.js:9:13)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)

```
遇到这个错误，你要检查：
- 模块名是否写对了；
- 模块文件是否存在；
- 相对路径是否写对了。

#### Common.js规范*机制没看懂*
这种模块加载机制被称为CommonJS规范。在这个规范下，每个.js文件都是一个模块，它们内部各自使用的变量名和函数名都互不冲突，例如，hello.js和main.js都申明了全局变量var s = 'xxx'，但互不影响。

- 要在模块中对外输出变量，用：

```
module.exports=variable
```
输出的变量可以是任意对象、函数、数组等等。

- 要引入其他模块输出的对象，用：

```
var foo = require('other_module');
```
引入的对象具体是什么，取决于引入模块输出的对象。

#### module.exports vs exports(暴露或者输出模块中变量的方法)

- module.exports
```javascript
function hello(){
    console.log('Hello,world');
};

function greet(name){
    console.log("Hello,"+name+"!");
}


//把函数greet作为模块的输出暴露出去，这样其他模块就可以使用greet函数了
module.exports = {
    hello:hello,
    greet:greet
};
```
- export
```javascript
function hello(){
    console.log('Hello,world');
};

function greet(name){
    console.log("Hello,"+name+"!");
}


//把函数greet作为模块的输出暴露出去，这样其他模块就可以使用greet函数了
exports.hello=hello;
exports.greet=greet;
```
但是不可以这么写
```javascript
exports={
    hello:hello,
    greet:greet
}
```
我们建议这么写
```
module.exports={
    foo:function(){return "foo"}
};
或者
module.exports=function(){
    return "foo"
```

### 基本模块
---

#### fs
- 异步读取一个文本文件,注意需要simple.text文件
  - fs是nodee.js内置的文件系统模块，负责读写文件
  - simple.text必须在当前目录下面，并且编码格式是uft-8
  - fs.readFile第一个参数是要读取的文件名称，第二个参数是文件的编码格式，第三个是我们的回调函数，回调函数包含两个参数，当正常读取的时候，err参数为null，data参数读取到的是string。当读取发生错误的时候，err参数代表一个错误对象，data为undefined。这也是node.js标准的回调函数：第一个参数代表错误信息，第二个参数代表结果。
```javascript
'use strict';
var fs=require('fs');
fs.readFile('simple.text','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
```

- 如果读取的文件不是文本，而是二进制文件，比如图片。我们本地放置一个1.jpg
```javascript
'use strict';
const fs=require('fs');
fs.readFile('1.jpg',function(err,data){
    if(err){
        console.log(err);
    }else{
        //输出数据
        console.log(data);
        //输出数据的大小
        console.log(data.length+'bytes');
    }
})
```
当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。二者可以相互转换
  - String与Buffer互转

```javascript
'use strict';
const fs=require('fs');
fs.readFile('simple.text','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        //输出数据
        console.log(data);
        //输出数据的大小
        console.log(data.length+'bytes');
    }
    //String->Buffer
    const text1=data;
    const buf=new Buffer(text1,'utf-8');
    console.log(buf);
    //Buffer->String
    const text2=buf.toString ('utf-8');
    console.log(text2);
})
```
控制台输出为
```
hello jarry
11bytes
<Buffer 68 65 6c 6c 6f 20 6a 61 72 72 79>
hello jarry
```	
