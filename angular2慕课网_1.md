---
title: angular2快速入门(1)
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
## 1. Angular2的新特性
- 移除controller+$scope设计，改用组件式开发，更容易上手

- 性能更好，渲染更快，变化检测效率更高
- 优先为移动应用设计，专门开发了一个套件，叫Angular Mobile Toolkit
- 更加贴合未来的标准（如ES6/7  webComponent ）


## 2. ng2核心概念详解

### 2.1 组件及组件树

- 模块（modules）
- 组件（Components）----最重要，其他的都是为组件提供服务的
- 依赖注入（Dependency Injection）
- 元数据（metadata）
- 指令（Directives）
- 模板（Templates）
- 服务（Services）
- 数据绑定（Data binding） 

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/1.png?raw=true)

每个组件都能独立的完成各自的功能

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/2.png?raw=true)

组件之间有一套完善的通讯机制，每个组件都可以编译自己的输入输出属性，这些属性称为组件的对外接口，会在与上下游的组件进行交互

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/3.png?raw=true)

#### 2.1.1 组件都有着完整的生命周期钩子，这些钩子可以让我们清楚的知道组件的生命变化，下图只是一些比较重要的钩子
 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/4.png?raw=true)

- Constructor(构造函数): 可以做一些组件类的初始化工作，例如变量的初始赋值等等。
- OnChanges:第一次触发，主要是用来接受父组件的传入数据，为接下来的组件初始化工作提供数据支持
- OnInit:这个才是实际意义的组件初始化阶段，ng2不推荐在构造函数初始化阶段处理一些与业务逻辑相关的一些工作，而更好的方式是放到init阶段去处理。接下来组件就进入了稳定期。这个时期OnChanges事件会再次触发

- OnChanges:运行期间触发数据变化钩子。只要从输入属性上获得的数据发生变化，OnChanges钩子就会触发一次。
- OnDestroy:组件销毁之前触发。这个阶段可以用来做一些清理的工作。例如数据解绑，取消数据订阅等(?????)。


#### 2.1.2组件示例

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/5.png?raw=true)

```typescript
@Component({
  selector: 'hello',
  templateUrl: '<p>{{greeting}}</p>',
})
export class HelloComponent{
  private greeting: string;
  constructor() {
	this.greeting="Hello,Angular2!";
  }
}
```

两部分：
### 一：@Component：我们称为装饰器，这里面会有一些参数，这个参数就是ng2里面的8大核心之一的元数据！装饰器是Typescript提供的一种语法特性，用来修饰一个类，那么这个装饰器到底起一个什么样的作用？里面的元素又是做什么的？

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/6.png?raw=true)

如果我们仅仅是定义了一个类，ng2是不知道如何去解释这个类的，如果在这个类上面加上`@Component`装饰器,这个装饰器会在运行的时候把他的元数据参数通过某一种方式注入到这个类里面，这样ng2就能识别出来---原来这个类是一个组件类。所以装饰器的作用就是赋予一个类更丰富的信息，而这些信息就是元数据，如果想了解元数据注入到类里面的细节，可以深入的了解`reflect-metadata`这个库

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/7.png?raw=true)


- 模板。我们在@Component元数据里面可以看到template属性，这个属性就是用来定义属性的模板。这个例子定义的是一个内联模板，如果想使用外联的模板，可以使用`templateUrl`属性，如下图。但是需要注意的是，一个组件里面，只能选择其中一种来指定模板。

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/8.png?raw=true)


- 数据绑定：模板里面有一个双大括号的语法`{{greeting}}`,这就是最常见的数据绑定方式，称为插值（interpolation）。数据绑定语法可以直接使用组件内成员变量，比如这个例子里面的`greeting`
 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/9.png?raw=true)

除了插值，还有一些其他的绑定方法。
1.属性绑定：[value],他的作用是把组件类的数据传递到组件模板中，比如`<input [value]="myData">`，myData的值就会显示在input上面。
2.事件绑定：[keyup],他的作用和属性绑定相反，他是把模板里面产生的数据通过函数调用的方式传递到组件类，比如`<input (keyup)="handle($event)"/>`,当keyup事件触发的时候，会调用组件类的实例方法handle，同时把event对象作为函数的参数传递过去。

属性绑定和时间绑定都属于单项绑定！

3.双向绑定：[ngModel],实现的是数据的双向流动，例如`<input [(ngModel)]="myData"/>`,这里的myData和input元素，他们二者的数据会实时的双向传递。ngModel是一个辅助实现双向绑定的一个指令。关于指令的概念，后面会有。



`selector: 'hello'`:是一个css3的选择器，当程序运行的时候，他能够匹配到html里面的hello标签，当组件逻辑执行完了以后，输出到视图，内容就会填充到hello标签里面，如下图所示
 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/10.png?raw=true)

上面就是组件渲染的大致原理。所有的ng2组件都以类似的方式渲染出来，构成完整的界面。
### 二： class类：我们称为组件类，组件的业务逻辑都是在这个类里面进行编写的






多个组件是如何关联到一个组件树里面的？
 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/11.png?raw=true)

ContactList（父）---->Contact(子)

首先定义Contact组件
```
@Component({
  selector:'contact',
  template:'..'
})
export class ContactComponent{
  @Input() data:IContact;
}
```
这里定义的组件的标签名为`contact`。组件contact就成为了组件contact-list的子组件，所以contact与contact-list就是这样形成了父子组件的关系。说要说明的是父组件contact-list要想使用子组件定义的一些元素标签，还需要有一个导入的过程，这个导入的过程需要借助模块来实现，关于模块后面会说。 

子组件contact还定义了一个`@Input() data:IContact;`,data变量，并且使用@Input装饰器来修饰，这就是子组件的输入接口！用来接受来自父组件的数据。我们看contact-list里面的元素，`<contact [data]="item"></contact>`,data被当做元素的属性来使用，并且使用`[]`来扩住，这就是前面说到的属性绑定！显然属性绑定，他既负责组件类与模板之间的数据传递，同时也担负着组件之间的数据通信重任。如下图：
 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/12.png?raw=true)

子组件往父组件里面传递数据就必须定义一个输出接口，比如export。

特别说明：在数据流动属性上，ng2并没有提供原生的双向数据绑定，前面说的双向绑定其实是把属性绑定和事件绑定结合到了一起。间接实现了双向数据流动的效果，所以与react一样，单项数据流动也是ng2所推崇的。这样的设计即使在面对一个庞大的应用，也能使得数据流动保持一个比较清晰的路径。


```
@Component({
  selector:'contact-list',
  template:`
  <ul>
	<li *ngFor="let item of datas">
	  <contact [data]="item"></contact>
	</li>
  </ul>
  `
})

export class ContactListComponent{
  private datas:IContact[];
}
```

### 2-2.指令
组件宽泛的讲也是指令的一种，因为组件式继承与指令。二者的区别在于组件式自身带有模板的，而指令没有。指令是起作用于组件上的模板。

指令分为两种：

1.属性指令：用来改变模板的外观，行为，例如改变样式等

2.结构指令：改变组件模板的Dom结构，如ngIf用来插入或者移除dom节点，这是ng2的一个内置指令，用来插入或者移除dom节点

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/13.png?raw=true)

如下面的实例，指令在某种情况下，增强了组件模板的特性，是模板的一种扩展，ng2提供了很多内置指令，这些指令使得模板元素的操作变得非常便利。除此之外，指令也是支持自定义的，以此来满足更多的业务场景需求


 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/14.png?raw=true)

一个简单的自定义指令示例：

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/15.png?raw=true)

这是一个属性指令，作用是把目标元素的背景色变成黄色，我们使用了`@Directive`装饰器来定义指令，他的作用原理和@component类似，这里`selector: '[highlight]'`。我们知道中括号是用来匹配元素属性的，所以这个指令将会当做元素属性来使用 

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/16.png?raw=true)

当p标签渲染出来以后，背景色会变成黄色。注意指令里面的`el:ElementRef`和`renderer:Renderer`两个参数类型。这是ng2里面内置的两个很重要的对象。`ElementRef`在这里用来获取模板元素的引用，`Renderer`起到辅助渲染的作用。这两个对象在这里都是和dom相关的。为什么ng2不直接暴露dom元素的引用，把对dom在进行一次封装这么麻烦。实际上ng2有自己的考虑。做一层封装，主要是为了跟dom解耦，让ng2可以用于非浏览器的场景，如服务器端渲染。




### 2-3.服务与依赖注入：

服务：
 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/17.png?raw=true)
从上面的代码中可以看出，服务就是一个普通的类，类里面定义了一些实例函数。服务他提供了一些特定的功能，通常是使用在组件内部作为组件功能的一个扩展。那么服务怎么才能够被组件所使用？这时候就需要引入依赖注入机制

依赖注入：
 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/18.png?raw=true)
依赖注入是组件引入外部构建的一个机制，最常用的就是引入服务。组件引入服务实际上是引入这个类的实例，所以服务在被引入之前会有一个实例化的过程，并且这个实例通常被缓存起来以被其他组件使用，所以管理实例化以及实例缓存的过程正是依赖注入机制所实现的。服务的实例存储在依赖注入机制建立的注入器对象里，当组件需要依赖某个服务的时候，依赖注入机制会从注入器对象里查找匹配的实例，找到后变执行注入操作。

一个简单的依赖注入的例子：
 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/19.png?raw=true)

可以看到在元数据里面多了一个providers属性，这是依赖注入的关键步骤。首先依赖注入机制会根据providers提供的LoggerService类型，预先实例化这个对象，并缓存到注入器里，然后我们发现组件构造函数里面也有一个LoggerService类型参数，这种指定类型的语法是TypeScript提供的。依赖注入机制会根据构造函数里面的参数需求，从注入器对象里尝试查找LoggerService这个实例，找到时候变回传入组件的构造函数里，最终组件内部就会获得LoggerService的实例引用了，这就是依赖注入的基本工作流程，ng2的依赖注入和ts很好的结合到了一起。


还有一个重要的分层注入？
每个ng2应用对应着一个组件树应用，要理解分层注入，首先了解一下依赖注入跟组件树的关系？大家是不是有一个疑问，是不是每个组件都需要注入LoggerService才能使用到这个服务呢？不是的。当我们在某个组件里注入某个服务的时候，它以及所有他的子组件都能够复用到这个服务，举个例子，如图：当根组件注入LoggerService的时候，整个组件树都能够使用到根组件注入的这个日志服务实例。而且是保持单例的形态。所以我们在根组件设置日志服务节点为warn的时候，整个组件树使用的这个日志服务也都是warn级别的。这样的设计非常好，LoggerService只需要实例化而且配置一次就可以使用在整个应用里。但是开发一段时间以后，我们的程序变得越来越复杂，加入我们希望在子组件B这个分支上，能够打印出更多的日志，那咋办？如果我在子组件B初始化的时候修改LoggerService的级别能否达到我们想要的效果？很显然是不行的记住这个LoggerService是单例，无论在哪里修改的配置，影响的都是同一个实例。n那么怎么办呢？这时候就用到了分层注入，分层注入可以使得我们在适当的位置里面从新创建一个新的实例，那如何操作呢？只需要在对象的组件里面重新注入即可，所以我们在子组件里B里面重新注入了LoggerService，并且设置该服务的日志服务级别为debug，重新注入之后，子组件B以及所有的他的子组件都会使用全新的这个LoggerService(debug)这个实例，这就是分层注入的概念。分层的概念源于组件树里面不同的层级，最后，分层注入不会影响组件树里面的其他分支，所以根组件以及子组件A依然还是使用原来的级别warn服务。可以看出，ng2的依赖注入机制非常强大。能够很优雅的解决我们处理依赖时候的各种痛点

 ![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/angular_mukewang/20.png?raw=true)


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
关注功能层面。大型的应用有大量的组件、指令以及服务构成.这些构建有的是没有交集的,而有些则是协同工作来完成某些特定的功能.我们希望把这些有关联的构建包装到一块，形成一个独立的单元.这样的单元在实际意义上就称作应用模块.应用模块就是对应用类零散的组件,指令，服务等按功能进行归类包装.除此之外，应用模块还有一个比较重要的实际意义.因为在默认情况下,一个组件是不能引用其他组件的,也不能使用其他指令的功能,要想使用就必须先导入,其实前面的父子组件已经提到过,这个导入的过程就是应用模块所实现的.总结来说一个组件可以任意的使用同模块的其他指令和组件等