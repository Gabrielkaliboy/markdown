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
理论上，因为一个实例的constructor指向的是创建该实例的构造函数，理论上我们可以使用该属性加上new关键字来创建新的实例。
```
var apartment=new house.constructor();
apartment installof Accommodation; //true
```
1.1.2.2给我们构造函数（类），添加属性和方法，有两个方式：原型或者作用域。
通过原型添加属性和方法：
每个构造器都有一个prototype属性，这个属性指向一个对象，我们用new关键字来创建一个“类”的实例的时候，实例中所包含的属性和方法都来自prototype所指向的这个对象。

代码1-2使用prototype关键字和点标记法为构造器添加属性和方法
```
//定义一个名为Accommodation的构造函数
function Accommodation(){}

//为这个类添加属性
Accommodation.prototype.floors=0;
Accommodation.prototype.rooms=0;
Accommodation.prototype.sharedEntrance=false;

//为这个类添加方法
Accommodation.prototype.lock=function(){};
Accommodation.prototype.unlock=function(){};

//创建Accommodation这个类的实例
var house=new Accommodation();
var apartment=new Accommodation();

//读取对象实例的属性值
alert(house.floors); //0
alert(house.sharedEntrance); //false

//更改对象实例的属性值
house.floors=2;
Accommodation.sharedEntrance=true;
alert(house.floors);//2
alert(house.sharedEntrance);//false
alert(Accommodation.sharedEntrance);//true

//调用对象实例的方法
house.unlock();
apartment.unlock();
```
代码1-3：通过对象直接量为构造函数添加属性和方法
```
	//定义一个名为Accommodation的构造函数
	function Accommodation(){};
	
	//通过对象直接量为这个构造函数（类）添加属性和方法
	Accommodation.prototype={
		floors:0,
		rooms:0,
		sharedEntrance:false,
		lock:function(){},
		unlock:function(){}
	};
	
	//创建Accommodation “类”的对象实例
	var house=new Accommodation();
	var apartment=new Accommodation();
	
	//读取对象实例的属性值
	alert(house.floors);//0
	alert(house.sharedEntrance);//false
	
	//将对象实例的属性值设为正确值
	house.floors=2;
	apartment.sharedEntrance=true;
	alert(house.floors); //2
	alert(apartment.sharedEntrance); //true
	
	//调用对象实例的方法
	house.unlock();
	apartment.lock();
```

代码清单1-4：prototype这个关键字允许用户在实例创建完成以后，继续添加属性和方法，而这些新添加的属性和方法会自动的添加到所有对象的实例中去，不管是已创建的还是将要创建的。
```
			//定义一个名为Accommodation的构造函数
			function Accommodation(){};
			
			//通过对象直接量为这个“类”添加属性和方法
			Accommodation.prototype={
				floor:0,
				rooms:0,
				sharedEntrance:false,
				lock:function(){},
				unlock:function(){}
			};
			
			//创建一个对象实例
			var house=new Accommodation();
			
			//为类的原型动态添加一个方法
			Accommodation.prototype.alarm=function(){
				alert("新的方法");
			};
			house.alarm();
```
1.1.2.3通过作用域添加属性和方法
函数体内定义的任何变量或方法，其作用域都限于该函数体内，就是在函数体外无法访问这些变量或函数。
如果将一个变量或者函数定义在任何一个函数之外，直接放在javascript或者html文件里，那么这个变量或函数会被添加到全局作用域中，这意味着在代码的任何位置都能够使用该变量或者函数，甚至在其他函数体内也可以。

**根据作用域原则，在所有嵌套函数中都可以访问定义在其父函数中变量。**

代码1-5变量作用域    *不是很懂*
```
			//定义在任何函数之外的变量在全局作用域内可以再任何位置访问到
			var myLibrary={
				myName:"李明"
			};
			function doSomething(){
				//函数体内的变量无法再函数体外访问到
				var innerVariable=909;
				var inner2=100;
				
				//全局变量可以再函数体内访问的到
				myLibrary.myName="Hello";
				function doSomethingElse(){
					//注意加var和不加var的区别
					    inner2=101;
					    innerVariable=888;
					var innerVariable=1234;

					    //不加var，将inner2提升到了doSomething作用域内了，已经试验在全局里面访问不到，报错
				};
				doSomethingElse();
				alert(innerVariable);//909
				alert(inner2);//101
				alert(inner3);//报错
			};
			doSomething();
			
			//该属性在doSomething函数里面已经被覆盖
			alert(myLibrary.myName);//Hello
			
			alert(inner2);
			//在一个函数外部访问其内部定义的变量将导致错误
			alert(innerVariable);//error
```
1.1.2.4上下文和this关键字
- this关键字代表的是一个函数的上下文环境，这个上下文环境大多数情况下指向的是函数运行时封装这个函数的那个对象。**当不通过任何对象单独的调用一个函数的时候，上下文环境指的就是全聚德window对象。**

代码1-6使用this关键字和点标记法
```
	//所有函数之外，this表示的是全局的window对象
	alert(this === window);//true
	
	//因为doSomething函数在外部被调用，this指向的是浏览器的window对象
	function doSomething(){
		alert(this===window);//true
	};
	doSomething();
	var house={
		floors:2,
		isLocked:false,
		lock:function(){
			alert(this===house);//true，因为this
			
			//我们可以把this当做house的替身，可以使用点标记法
			this.isLocked=true;
		},
	};
	house.lock();
	alert(house.isLocked);//true
```