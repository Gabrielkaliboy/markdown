说明：精通javascript开发，图灵程序设计丛书，中国工信出版集团。
---


第一章：面向对象的javascript
---
1.1
- 对象：包含一个或多个相关的变量和函数，分别叫做属性和方法

1.1.1
- 对象直接量：由一对花括号和其中的名值对组成。
- 标记法：用圆点（.）将对象名和其属性或者方法分割开来。

eg1:使用对象直接量标记法来创建一个对象
```
	var house={
		rooms:7,
		sharedEntrance:false,
		lock:function(){},
		unlock:function(){},
	};
	//读取两个属性的值
	alert(house.rooms);
	alert(house.sharedEntrance);
	//调用方法
	house.lock();
	//更新rooms的属性值
	house.rooms=10;
	//动态添加一个全新属性
	house.floors=2;
	//再次读取rooms属性的值，注意值发生了变化
	alert(house.rooms);
```
eg2:我们创建另外一种公寓，和房子很像，属性和方法也很像
```
	var apartment={
		floors:1,
		rooms:4,
		sharedEntrance:true,
		lock:function(){},
		unlock:function(){},
	};
```
eg1和eg2很像，如果弄很多这个，就很麻烦，我们想弄个模板。

- 我们希望创建一个模板来表示这些对象所共有的属性和方法。javascript允许使用**构造器**来创建一个对象模板，而传统语言中，这种构造器或者模板被称为**类**。

1.1.2
- 类：是对象的模板，用于创建共享一系列属性和方法的类似对象。javascript中只要定义一个普通函数，就能获得与其他语言中类一样的功能。javascript中所有函数的定义方式都是相同的，不同之处就是如何通过这些函数创建出来。

eg:创建一个构造函数用作房子和公寓对象的模板。然后在添加属性和方法。
```
function Accommodation(){};
```
用这个函数来创建对象，只需使用new 关键字
```
var house=new Accommodation();
var apartment=new Accommodation();
```
用关键字new创建的所有对象被称为这个函数所示的结构的对象实例，创建对象的过程就是这个模板实例化的过程。

1.1.2.1找出对象的构造器:用模板创建的对象还有一个额外自带属性，叫做constructor,这个属性指向创建该对象时所用的javascript构造函数。
```
house.constructor === Accommodation;//true
apartment.constructor === Accommodation;//true
```
也可以使用instanceof,这个关键字的作用就是检查对象是否是某个构造函数的实例。
```
house instanceof Accommodation; //true
apartment instanceof Accommodation;//true
```