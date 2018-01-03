## 参考资料
[官方中文API](http://www.requirejs.org.cn)

[IBM](https://www.ibm.com/developerworks/cn/web/1209_shiwei_requirejs/)

[菜鸟](http://www.runoob.com/w3cnote/requirejs-tutorial-1.html)

[require.js 最佳实践](https://www.cnblogs.com/digdeep/p/4607131.html)


入门：

http://www.cnblogs.com/snandy/archive/2012/05/22/2513652.html

http://www.cnblogs.com/snandy/archive/2012/05/23/2513712.html

http://www.cnblogs.com/snandy/archive/2012/05/24/2514700.html

进阶：

http://www.cnblogs.com/snandy/archive/2012/06/06/2536969.html

http://www.cnblogs.com/snandy/archive/2012/06/07/2537477.html

http://www.cnblogs.com/snandy/archive/2012/06/08/2538001.html
## 尝试使用require.js
### 正常开发方式
html
```html
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="a.js"></script>
    </head>
    <body>
      <span>body</span>
    </body>
</html>
```

a.js:
```javascript
function fun1(){
  alert("it works");
}

fun1();
```

可能你更喜欢这样写

```javascript
(function(){
    function fun1(){
      alert("it works");
    }

    fun1();
})()
```

第二种方法使用了块作用域来申明function防止污染全局变量，本质还是一样的，当运行上面两种例子时不知道你是否注意到，alert执行的时候，html内容是一片空白的，即`<span>body</span>`并未被显示，当点击确定后，才出现，这就是**JS阻塞浏览器渲染**导致的结果。


### requirejs写法
ndex.html:
```html
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="require.js"></script>
        <script type="text/javascript">
            require(["a"]);
        </script>
    </head>
    <body>
      <span>body</span>
    </body>
</html>
```

a.js:
```javascript
define(function(){
    function fun1(){
      alert("it works");
    }

    fun1();
})
```
浏览器提示了"it works"，说明运行正确，但是有一点不一样，这次浏览器并不是一片空白，body已经出现在页面中，目前为止可以知道requirejs具有如下优点：

防止js加载阻塞页面渲染
使用程序调用的方式加载js，防出现如下丑陋的场景
```javascript
<script type="text/javascript" src="a.js"></script>
<script type="text/javascript" src="b.js"></script>
<script type="text/javascript" src="c.js"></script>
<script type="text/javascript" src="d.js"></script>
<script type="text/javascript" src="e.js"></script>
<script type="text/javascript" src="f.js"></script>
<script type="text/javascript" src="g.js"></script>
<script type="text/javascript" src="h.js"></script>
<script type="text/javascript" src="i.js"></script>
<script type="text/javascript" src="j.js"></script>
```

## 基本API
require会定义三个变量：define,require,requirejs，其中require === requirejs，一般使用require更简短


- define 从名字就可以看出这个api是用来定义一个模块
- require 加载依赖模块，并执行加载完后的回调函数

a.js：通过define函数定义了一个模块，
```javascript
define(function(){
    function fun1(){
      alert("it works");
    }

    fun1();
})
```

然后再页面中使用：
```javascript
require(["js/a"]);
```

来加载该模块(注意require中的依赖是一个数组，即使只有一个依赖，你也必须使用数组来定义)，require API的第二个参数是callback，一个function，是用来处理加载完毕后的逻辑，如：
```javascript
require(["js/a"],function(){
    alert("load finished");
})
```

## 加载文件
之前的例子中加载模块都是本地js，但是大部分情况下网页需要加载的JS可能来自本地服务器、其他网站或CDN，这样就不能通过这种方式来加载了，我们以加载一个jquery库为例：

```javascript
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"]   
    }
})
require(["jquery","js/a"],function($){
    $(function(){
        alert("load finished");  
    })
})
```