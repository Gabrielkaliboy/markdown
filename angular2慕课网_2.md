---
title: angular2快速入门(2)
date: 2017-09-05 16:17:40
categories: 前端
tags: [前端,angular]
---
<Excerpt in index | 首页摘要> 
angular2快速入门
<!-- more -->
<The rest of contents | 余下全文>

-----

慕课网课程地址：http://www.imooc.com/video/14300


---

 ### 2-4. 模块
 模块有两层含义：
 - 框架代码以模块形的式组织(文件模块)
 - 功能单元以模块的形式组织(应用模块)


 #### 2.4.1文件层面的模块
  ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/21.png?raw=true)

  - 核心模块：包含变化检测，依赖注入,渲染等核心功能代码.

  - 通用模块：包含一些常用的内置指令等.

  - 表单模块：表单相关的组件和指令等

  - 网络模块：处理网络相关的请求和服务。


  **模块的使用**
  比如http服务。只需要
  ```
  import { Http } from "@angular/http"
  ```
  指令的装饰器都是需要先导入才能使用的

   ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/22.png?raw=true)


#### 2.4.2 应用模块
关注功能层面。大型的应用有大量的组件、指令以及服务构成.这些构建有的是没有交集的,而有些则是协同工作来完成某些特定的功能.我们希望把这些有关联的构建包装到一块，形成一个独立的单元.这样的单元在实际意义上就称作应用模块.应用模块就是对应用类零散的组件,指令，服务等按功能进行归类包装.除此之外，应用模块还有一个比较重要的实际意义.因为在默认情况下,一个组件是不能引用其他组件的,也不能使用其他指令的功能,要想使用就必须先导入,其实前面的父子组件已经提到过,这个导入的过程就是应用模块所实现的.总结来说一个组件可以任意的使用同模块的其他指令和组件等.但是夸模块里面组件指令则不能直接的相互使用。比如下面图中，模块A的组件是不能直接使用模块C的指令的。要想实现跨模块的访问，则需要结合模块的导入导出功能。

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/23.png?raw=true)

一个简单的模块例子
![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/24.png?raw=true)

- @NgModule:声明模块使用的是@NgModule,我们看一下装饰器里面的元数据。
    - declarations:引入组件或指令。
    - providers:是依赖注入的属性。可以看出，依赖注入除了可以作用在组件里，同样可以作用在某个模块上。二者的使用方法大致相同，区别在于作用域。作用到模块里的服务。可以再应用全局使用。而注入到组件里面的，仅能在该组件以及他的子组件里面使用，这个需要注意。

    - import：导入其他模块，导入之后就能继承其他模块暴露出来的一些组件和指令等
    - bootstrap：用来指定整个ng2应用组件树的根组件，这个属性只在根模块里面使用。什么是跟模块？
    -exports:用来设置该模块对外暴露组件和指令等，这个是对应import属性配合使用的。所以可以看出import和export就是模块的导入导出属性。




关于模块之间访问关系？

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/25.png?raw=true)

如图所示。模块A导入了模块C，模块C通过exports属性暴露了一个组件，而相应的指令并没有被暴露出去，而且模块C里面暴露出去的组件能够被模块A使用，而没有被暴露出去的指令并不能够被使用，所以可以看出ng2的模块既可以对外暴露一些构建，同时又有一定的封装性，能够隐藏内部的一些实现，**再次提示**服务并不在导入导出的范畴内。前面已经提到模块里面注入的服务作用范围是全局的，所以只要在其中一个模块里注入某个服务，那么该服务就能够使用在应用类的所有组件里


![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/26.png?raw=true)


模块应用开发的实际意义？

ng2要想成功的运行，至少需要定义一个模块，因为需要有一个模块作为应用启动的入口，这样的模块就称为根模块，接下来我们的应用会不断的添加新的功能，这些新增加的功能可以封装到一个新的模块里然后导入到根模块里面即可，这些新增加的模块在ng2里面就称为特性模块，有了特性模块以后，根模块原来承载的功能和逻辑就可以抽离出来放到某个特性模块里，这样就可以使得根模块保持简洁。下图中第二个特性模块是虚线，虚线表示的是懒加载，ng2支持吧一个模块延后加载，这个特性很有用，即使我们的应用变得在庞大，让初始加载的包体依然控制在一个可以控制的范围内，大大减少首屏加载的时间。加下来我们添加的特性模块越来越多，他们之间也许可以抽出一些相似的功能和组件，这些相似的东西也可以封装成一个独立的模块，这样的模块在逻辑意义上不能成为特性模块，ng2把它成为共享模块。还有一种模块类型称为核心模块，一个应用总有一些全局的组件和服务，他们只需要在应用启动的时候初始化一次即可，例如维护登录信息得服务，又或者公共的头部和尾部组件等，这样我们可以把它放在根模块里面，但更好的设计是把这些逻辑也抽离出来放到一个独立的模块，这个模块就是核心模块，核心模块要求只导入到根模块里，而尽量不要导入特性模块和共享模块里，这是为了在协同工作的时候，避免出现一些不可预料的结果。这就是ng2的最佳实践。应用的功能和特性被切割为大大小小的模块，逻辑结果非常的清晰，处于总指挥的根模块非常简洁，没有繁琐的业务细节。

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/27.png?raw=true)


核心概念总览图
如下图，与用户直接交互的是模板，模板接收来自用户的操作，通过数据绑定与对应的组件类进行交互，组件类完成处理之后，更新模板视图来反馈给用户。从下面的图中就可以比较直观的看出，组件处于ng2一个比较核心的地位，而指令和服务都是作为组件的一个扩展。

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/28.png?raw=true)

### 3.ng2快速上手


### 3.1 Typescript自述

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/29.png?raw=true)

typescript在定义变量的时候会声明他的类型。

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/30.png?raw=true)

类与接口

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/31.png?raw=true)


装饰器

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/32.png?raw=true)


ng2里面的装饰器

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/33.png?raw=true)


### 3.2 开发环境准备
node.js:v6.0以上版本

webpack:打包工具，可以使用`npm install -g webpack`
webpack把项目中用到的静态资源都视为模块，模块之间会相互依赖,所以的那个我们指定一个入口模块以后，webpack会挖掘出以这个入口模块为根节点的整个依赖模块，从而把整个依赖链打包到一个文件里。然后不同的模块会调用不同的解释器,这样的解释器在wepack里面称为loader.例如一个模块如果是typescript代码，那他就会调用typescript的loader来处理，不过这些loader需要手动去配置,配置文件放在了项目路径下面的叫wepack.config.js文件里,这也是webpack的主要配置文件,其他所有的配置项也都是定义在这个配置文件里

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/35.png?raw=true)

一个webpack的简单的配置文件

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/36.png?raw=true)

开发工具：vs code

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/34.png?raw=true)