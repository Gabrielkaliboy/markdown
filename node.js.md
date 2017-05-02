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
- 同步读取数据--->readFileSync("textname","coldForm"),注意这个函数没有回调函数，同步读取文件如下

```javascript
//同步读取文件
"use strict";
var fs=require('fs');

var data=fs.readFileSync("simple.text","utf-8");
console.log(data);
```

- 捕获错误类型

如果同步读取文件出错了，我们用try...catch...来捕获错误，我诚心把要读取的文件名字写错
```javascript
//同步读取文件
"use strict";
var fs=require('fs');

try{
    var data=fs.readFileSync("simfple.text","utf-8");
    console.log(data);
}catch(err){
    console.log("出错了");
    console.log("错误是"+err);
}
```

#### 写入文件
---
- 用writFile()这个函数来实现,接受三个参数，第一个，要把数据写入哪个文件；第二个，被写入的数据，如果传入的数据是String，默认按UTF-8编码写入文本文件，如果传入的参数是Buffer，则写入的是二进制文件。；第三个，回调函数，由于只关心成功与否，所以，只需要只有一个err参数。代码如下

```javascript
"use strict";
var fs=require("fs");
var data="你好啊，哈哈哈哈";
fs.writeFile("output.text",data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("成功");
    }
})
```
这时候可以打开我们的output文件查看一下，是否写入了“你好啊，哈哈哈哈”

- 和readFile类似，writeFile也只有一个同步方法，叫做writFilesync()，没有回调函数，其余两个参数和readFile一样

```
"use strict";
var fs=require("fs");
var data="hello jarry";
fs.writeFileSync("output.text",data);
```
注意，如果你的output文件里面原来就有内容，他会直接被替换掉，里面只有你写入的内容

#### stat 获取文件的大小，创建时间等信息
fs.stat()函数可以获取文件的大小，创建时间等信息，他返回一个stat对象，能告诉我们文件或者目录的详细信息
```javascript
"use strict";
var fs=require("fs");
fs.stat("simple.text",function(err,stat){
    if(err){
        console.log(err);
    }else{
        //是否是文件
        console.log("是文件"+stat.isFile());
        //是否是文件夹
        console.log("是文件夹"+stat.isDirectory());
        if(stat.isFile()){
            console.log("文件大小"+stat.size);
            console.log("创建时间"+stat.birthtime);
            console.log("修改时间"+stat.mtime);
        }
    }
})
```
返回的结果是
```
是文件true
是文件夹false
文件大小15
创建时间Thu Apr 27 2017 19:20:06 GMT+0800 (中国标准时间)
修改时间Thu Apr 27 2017 19:20:14 GMT+0800 (中国标准时间)
```

- stat还有一个同步函数statSycn()


#### 同步还是异步
由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。

服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。

#### stream
是node提供的一个只在服务端使用的模块，用来支持“流”这种数据结构
- data：表示数据已经可以读取了
- end表示这个流已经到末尾了，没有数据可以读取了
- error表示出错了

```javascript
"use strict";
var fs=require("fs");
//打开一个流文件
var rs=fs.createReadStream("simple.text","utf-8");
rs.on("data",function(chunk){
    console.log("开始");
    //这里的参数chunk是我们的文件里面的内容，也就是数据
    console.log(chunk);
});
rs.on("end",function(){
    console.log("结束");
});
rs.on("error",function(){
    console.log("错误"+Error);
})

```

要注意data事件可能会有多次，每次传递truck是流的一部分。所以要想以流的形式写入文件，只需要不断的调用write方法，最后以end（）结束就行
```javascript
"use strict";
var fs=require("fs");
var ws1=fs.createWriteStream("output1.text","utf-8");
ws1.write("使用stream写入文本数据...\n");
ws1.write("End");
ws1.end();

var ws2=fs.createWriteStream("output2.text");
ws2.write(new Buffer("使用stream写入二进制的数据...\n","utf-8"));
ws2.write(new Buffer("End","utf-8"));
ws2.end()
```
可以打开output1与output2文件查看一下。
所有可以读取数据的流都继承自stream.Readable，所有可以写入的流都继承自stream.Writable。
#### pie
就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe。

在Node.js中，Readable流有一个pipe()方法，就是用来干这件事的。

pipe()把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了，所以，这实际上是一个复制文件的程序：
```javascript
"use strict";
var fs=require("fs");
//要读取的文件
var rs=fs.createReadStream("simple.text");
//要写入的文件
var ws=fs. createWriteStream("copied.text");
//执行写入动作
rs.pipe(ws);
```

默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入参数：
```
readable.pipe(writable, { end: false });
```

#### http
开发http服务器程序，使用的是node里面提供的http模块的response和request对象
- request对象封装了HTTP请求，我们调用request对象的属性和方法就可以拿到所有的http请求信息
- response对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器。

一个简单的请求
```
"use strict";
//导入http模块
var http=require("http");
//创建http service，并返回回调函数
var service=http.createServer(function(request,response){
    //回调函数接收request和response对象
    //获得http请求的method和URL
    console.log(request.method+":"+request.url);
    //将http响应200写入response，同时设置Content-Type：text/html
    response.writeHead(200,{'Content-Type':'text/html'})
    //将http响应的HTML内容写入response
    response.end('<h1>hello world</h1>');
});
//让服务器监听8080端口
service.listen(8080);
console.log("service is running at http://127.0.0.1:8080/");
```
在调试界面启动hello.js，此时控制台会输出
```
service is running at http://127.0.0.1:8080/
```
不要中断调试，此时用浏览器打开127.0.0.1:8080窗口，我们可以看到页面输出了hello world
打开页面以后，控制台输出
```
service is running at http://127.0.0.1:8080/
GET:/
GET:/favicon.ico
```

#### 文件服务器
让我们继续扩展一下上面的Web程序。我们可以设定一个目录，然后让Web程序变成一个文件服务器。要实现这一点，我们只需要解析request.url中的路径，然后在本地找到对应的文件，把文件内容发送出去就可以了。
解析URL需要用到Node.js提供的url模块，它使用起来非常简单，通过parse()将一个字符串解析为一个Url对象：
```
"use strict";
//导入http模块
var http=require("http");
//创建http service，并返回回调函数
var service=http.createServer(function(request,response){
    //回调函数接收request和response对象
    //获得http请求的method和URL
    console.log(request.method+":"+request.url);
    //将http响应200写入response，同时设置Content-Type：text/html
    response.writeHead(200,{'Content-Type':'text/html'})
    //将http响应的HTML内容写入response
    response.end('<h1>hello world</h1>');
});
//让服务器监听8080端口
service.listen(8080);
console.log("service is running at http://127.0.0.1:8080/");

var url=require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
console.log(url.parse('www.baidu.com'));
```
控制台返回
```
service is running at http://127.0.0.1:8080/
service is running at http://127.0.0.1:8080/
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/path/to/file',
  path: '/path/to/file?query=string',
  href: 'http://user:pass@host.com:8080/path/to/file?query=string#hash' }
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: 'www.baidu.com',
  path: 'www.baidu.com',
  href: 'www.baidu.com' }

```
处理本地文件目录需要使用Node.js提供的path模块，它可以方便地构造目录：
```
"use strict";
var path=require('path');
//解析当前目录,我现在文件 处于e盘下的hello文件夹
var workDir=path.resolve('.');
console.log(workDir);
//e:\hello


//组合完整的文件路径：当前路径+“pub”+“index.html”
var filePath=path.join(workDir,'pub','index.html');
console.log(filePath);
//e:\hello\pub\index.html
```
使用path模块可以正确处理操作系统相关的文件路径。在Windows系统下，返回的路径类似于C:\Users\michael\static\index.html，这样，我们就不关心怎么拼接路径了。

最后，我们实现一个文件服务器file_server.js：