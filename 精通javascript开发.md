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
```javascript
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
```javascript
function Accommodation(){};
```
用这个函数来创建对象，只需使用new 关键字
```javascript
var house=new Accommodation();
var apartment=new Accommodation();
```
用关键字new创建的所有对象被称为这个函数所示的结构的对象实例，创建对象的过程就是这个模板实例化的过程。

1.1.2.1找出对象的构造器:用模板创建的对象还有一个额外自带属性，叫做constructor,这个属性指向创建该对象时所用的javascript构造函数。
```javascript
house.constructor === Accommodation;//true
apartment.constructor === Accommodation;//true
```
也可以使用instanceof,这个关键字的作用就是检查对象是否是某个构造函数的实例。
```javascript
house instanceof Accommodation; //true
apartment instanceof Accommodation;//true
```
理论上，因为一个实例的constructor指向的是创建该实例的构造函数，理论上我们可以使用该属性加上new关键字来创建新的实例。
```javascript
var apartment=new house.constructor();
apartment installof Accommodation; //true
```
1.1.2.2给我们构造函数（类），添加属性和方法，有两个方式：原型或者作用域。
通过原型添加属性和方法：
每个构造器都有一个prototype属性，这个属性指向一个对象，我们用new关键字来创建一个“类”的实例的时候，实例中所包含的属性和方法都来自prototype所指向的这个对象。

代码1-2使用prototype关键字和点标记法为构造器添加属性和方法
```javascript
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
```javascript
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
```javascript
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
```javascript
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
```javascript
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

代码1-7将this关键字的值保存在变量中,注意第一个弹出false
**对象中嵌套的函数其上下文环境是全局的window对象，而不是包含他的那个对象**
```javascript
			var apartment={
				isLocked:false,
				lock:function(){
					var that=this;
					
					//设置isLocked属性
					this.isLocked =true;
					function doSomething(){
						alert(this === apartment);//false
						alert(this === window);//true
						alert(that === apartment);//true
						
						//通过that变量来修改apartment对象的isLocked属性
						that.isLocked = false;
					}
					doSomething();
				},
			};
			apartment.lock();
			alert(apartment.isLocked);//false
```
**在使用new关键字创建对象的时候，this指向的值和一般情况下有区别，这种情况下，this指向的是通过构造函数所创建的那个对象实例。**

代码1-8

```javascript
	//定义一个新的构造函数来表示一种住宅
	function Accommnodation(){
		
		//this关键字指向的是通过这个类所创建的对象实例
		this.floors = 0;
		this.rooms = 0;
		this.sharedEntrance = false;
		this.isLocked = false;
		this.lock =function(){
			
			//函数中的this，一般指向包含函数的那个对象，本例中，this指向的是创建对象的实例。
			//因为这个函数是通过这个被创建对象的实例来调用的
			this.isLocked = true;
		};
		this.unlock=function(){
			this.isLocked = false;
		};
	};
	
	//通过构造函数来创建对象实例
	var house = new Accommnodation();
	var apartment = new Accommnodation();
	
	//读取和修改属性值，调用方法等操作都和普通对象一样
	alert(house.floors);//0
	house.floors=2;
	apartment.lock();
```
结合使用prototype和this关键字来定义对象实例的属性和方法，this写属性，prototype写方法
代码1-9组合使用this和prototype关键字来编写高效的构造函数
```javascript
	//通过一个构造函数来表示各种类型的住宅
	function Accommodation(){
		//利用this关键字来设置实例对象的属性
		this.floors = 0;
		this.islocked = false;
	};
	
	//利用prototype关键字来定义实例对象的方法
	Accommodation.prototype.lock=function(){
		//通过原型定义的方法可以通过this关键字访问在构造函数中定义的属性
		this.islocked = true;
	};
	Accommodation.prototype.unlock=function(){
		this.islocked = false;
	};
	
	//实例化一个Accommodation类型的对象
	var house = new Accommodation();
	
	//执行lock的方法
	house.lock();
	
	//检查isLocked的属性是否设置正确
	alert(house.islocked);//true
```
在构造函数使用this可以给构造函数传递参数
代码1-10在构造函数中通过this关键字初始化属性
```javascript
	//定义一个带有三个参数的构造函数，这些参数的值用于初始化实例对象的属性
	function Accommodation(floors,rooms,sharedEntrance){
		//当该类的一个对象呗实例化的时，用传进来的三个值初始化该对象的三个属性
		//逻辑或操作的作用是在传入值为空的是偶指定一个默认值
		this.floors = floors || 0;
		this.rooms = rooms || 0;
		this.sharedEntrance = sharedEntrance || false;
	};
	
	//不需要再实例化的时候赋值的属性应该通过prototype来进行设置，因为这样就只需要定义和执行一次
	Accommodation.prototype.isLocked = false;
	
	Accommodation.prototype.lock=function(){
		this.isLocked = true;
	};
	Accommodation.prototype.unlock = function(){
		this.isLocked = false;
	};
	
	//实例化类的一个对象，传递参数中的两个值用于初始化
	//参数值是按照构造函数的参数定义顺序进行传递的
	var house=new Accommodation(2,7);
	alert(house.floors);//2
	alert(house.rooms);//7
	
	//参数sharedEntrance的值没有被传入构造函数，所以他的值被通过逻辑或操作设置为默认值false
	//注意查看上面构造函数的代码
	alert(house.sharedEntrance);//false
```
如果类的规模特别大，给对象实例的属性设置初始值的时候，当有多个层参数需要传递得时候，像上面那么多就会变得困难且容易出错。这时候我们采用对象直接量。

代码1-11用对象直接量作为构造函数的参数
```javascript
	function Accommodation(defaults){
		//如果没有传入值，默认为空的对象直接量
		defaults = defaults ||{};
		
		//如果defaults对象含有某个属性，就将实例对象中同名属性的值设为defaults提供的值，否则设为默认值
		this.floors = defaults.floors || 0;
		this.rooms = defaults.rooms || 0;
		this.sharedEntrance = defaults.sharedEntrance || false;
	};
	
	Accommodation.prototype.isLocked = false;
	Accommodation.prototype.lock = function(){
		this.isLocked = true;
	};
	
	Accommodation.prototype.unlock = function(){
		this.isLocked = false;
	};
	
	//实例化两个Accommodation“类”的对象，通过对象直接量传递命名的参数
	var house= new Accommodation({
		floors:2,
		rooms:7
	});
	
	var apartment=new Accommodation({
		floors:1,
		rooms:4,
		sharedEntrance:true
	});
	alert(house.floors);//2
```

1.1.2.5方法的链式调用
**要实现链式调用，只需要“类”中的每个方法最后通过this关键字返回对象实例的引用即可**

代码1-12通过this关键字实现方法的链式调用
```javascript
	function Accommodation(){};
	Accommodation.prototype.isLocked = false;
	Accommodation.prototype.lock=function(){
		this.isLocked = true;
		alert("调用了lock");
		
		//通过返回上下文，我们实际上返回了调用这个函数的那个实例对象，因为这个对象包含了所有方法
		//所以我们可以在本方法调用结束后马上调用其他方法
		return this;
	};
	
	Accommodation.prototype.unlock=function(){
		this.isLocked = false;
		alert("调用了unlock");
		return this;
	};
	
	Accommodation.prototype.alarm = function(){
		alert("sounding alerm");
		return this;
	};
	
	//创建一个对象实例
	var house = new Accommodation();
	//因为每个方法都返回其执行的上下文（在本例中就是包含这些方法的对象实例），
	//我们得以将这些方法调用一个接一个的连接在一起。
	house.lock().alarm().unlock();
```

1.1.2.6继承
创建一些新的类，来继承或者扩展某个父类的属性和方法。JavaScript是原型继承，通过原型链实现

代码1-13:**通过原型继承创建一个子类**
```javascript
		//定义一个有两个方法的类
		function Accommodation(){};
		
		Accommodation.prototype.lock=function(){
			alert("调用了lock方法");
		};
		Accommodation.prototype.unlock=function(){
			alert("调用了unlock方法");
		};
		
		//定义一个构造函数，将他成为我们子类
		function House(defaults){
			defaults = defaults ||{};
			
			//将本类所有市里的floors属性初始化为“2”
			this.floors=2;
			
			//如果构造函数的对象直接量参数包含rooms属性，则使用传进来的值，否则默认设置为7
			this.rooms = defaults.rooms || 7;
		};
		
		//将House类的原型设为Accommodation类的一个实例
		//使用关键字new来调用Accommodation的构造函数，这样就能创建并返回一个包含其所有属性和方法的对象
		//这个对象被传递给House“类”的原型，这样House“类”就得以继承Accommodation的所有内容
		//还记得这句话否：构造函数有一个属性叫做prototype，这个属性指向一个对象，所有通过new关键字创建出来的新实例
		//里面的方法和属性都指向prototype指向的那个对象
		House.prototype = new Accommodation();
		
		//对象实例的constructor属性指向创建该对象的那个构造函数。然而，由于House继承了Accommodation的所有内容，
		//constructor的值也被复制了，所以我们现在需要重设constructor的值，使其指向新的子类
		//如果没有这一步，通过House“类”创建的对象就会报告说他们是通过Accommodation“类”创建的
		House.prototype.constructor = House;
		
		//创建House的一个实例，继承Accommodation的属性和方法
		var myHouse=new House();
		
		//传入rooms的值从而在对象实例化时对rooms进行赋值
		var myNeighborsHouse = new House({
			rooms:8
		});
		
		alert(myHouse.rooms); //7,House构造函数中的默认值
		alert(myNeighborsHouse.rooms);//8
		
		//Accommodation的方法对House对象也可用
		myHouse.lock();
		myNeighborsHouse.unlock();
		
		
		//由于我们之前修改了constructor的值，所以由House创建的对象能如实的报告这一点
		alert(myHouse.constructor === House);//true
		alert(myHouse.constructor === Accommodation); //false，因为我们把constructor指向了House
		
		//instanceof关键字会沿着原型链进行查询，所以可以用于检测一个对象实例是不是某个父类的子类
		alert(myNeighborsHouse instanceof House);//true
		alert(myNeighborsHouse instanceof Accommodation);//true 因为House继承自Accommodation
```

**JavaScript中原型链可以一直向上追溯到内奸的Object类型，因为JavaScript中的所有变量最终都是继承自该类型，接着上面的代码**
```javascript
alert(myHouse instanceof House);//true
alert(myHouse instanceof Accommodation);//true,因为House继承自Accommodation
alert(myHouse instanceof Object);//true,因为所有对象都继承自JavaScript内置类型Object
```
1.1.2.6封装
定义：当通过继承对已有的类进行改变或者特殊化时，父类的所有的属性和方法对子类嗾使可用的，在子类中不需要额外声明或者定义任何东西就能够使用父类的属性和方法。

1.1.2.6多态
在构造一个新的子类来继承并扩展一个“类”的时候，你可能需要将某个方法替换为一个同名的新方法，新方法和原有功能相似，但对子类做了针对性的改变。这就是多态。

JavaScript多态实现：重写一个函数并给他一个和原方法相同的方法名即可。

代码1-14多态
```javascript
	//定义父类Accommodation
	function Accommodation(){
		this.isLocked=false;
		this.isAlarmed=false;
	};
	
	//为所有的Accommodation添加方法，执行一些常见动作
	Accommodation.prototype.lock=function(){
		this.isLocked=true;
	};
	Accommodation.prototype.unlock=function(){
		this.isLocked=false;
	};
	Accommodation.prototype.alarm=function(){
		this.isAlarmed = true;
		alert("Alarm activated");
	};
	Accommodation.prototype.deactivateAlarm=function(){
		this.isAlarmed = false;
		alert("Alarm deactivated");
	};
	
	//为House定义一个子类
	function House(){
		
	};
	//继承自Accommodation
	House.prototype=new Accommodation();
	
	//针对House“类”重定义lock方法，即多态
	House.prototype.lock=function(){
		//执行父类Accommodation的lock方法。可以通过“类”的原型直接访问这个方法。我们通过函数的call
		//方法将上下文传递给该方法，从而确保在lock方法中任何对this的引用都指向当前这个House的对象实例
		Accommodation.prototype.lock.call(this);
		
		alert(this.isLocked);//true,说明上卖弄对lock方法的调用时正确的
		
		//调用继承自Accommodation的alarm方法
		this.alarm();
	};
	House.prototype.lock();
	//以同样的方式重新定义unlock的方法
	House.prototype.unlock=function(){
		Accommodation.prototype.unlock.call(this);
		this.deactivateAlarm();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	};
```
如何在重写的新方法里面访问正在进行的多态化的原方法：只需要通过“父类”定义中的prototype属性直接访问这个方法就行。

- call和apply：改变我们的this指向
**二者的区别：**
call和apply的区别在于，使用apply时，所有的参数都应该放在单独的数组参数中，而使用call的时候，参数应该依次列出并用逗号隔开
```javascript
			//定义一个简单的类
			function Accommodation(){
				this.isAlarmed= false;
			};
			
			//创建一个对象，其方法可以被代码中的其他对象所使用，该对象被称为“mixin”（混入）
			var AlarmSystem={
				arm:function(message){
					this.isAlarmed= true;
					alert(message);
				},
				disarm:function(message){
					this.isAlarmed = false;
					alert(message);
				}
			};
			var myHouse = new Accommodation();
			//通过call将对象上下文函数传入arm函数
			AlarmSystem.arm.call(myHouse,"Alarm Activate");
			
			//arm函数中this的值指向通过call传入的对象实例，所以myHouse对象的isAlarmed属性被修改了
			alert(myHouse.isAlarmed); //true
			
			//通过apply也能达到同样的效果，只不过参数是通过数组来进行传递的
			AlarmSystem.disarm.apply(myHouse,["Alarm dectivated"]);
			alert(myHouse.isAlarmed);//false
```
- arguments对象:函数中所有传入的参数都放在了arguments里面，我们可以读取他。
代码1-16
```javascript
			//创建一个函数，对传入函数的所有参数进行加和
			var add=function(){
				//创建一个变量来保存总和
				var total=0;
				
				//arguments这个伪数组包含所有传入该函数的参数，遍历每个参数将其加入总和汇总
				for(var index=0,length=arguments.length;index<length;index++){
					total=total+arguments[index];
				}
				return total;
			};
			
			//传入不同参数
			alert(add(1,2,3));
			alert(10,10,10);
```
加一个：弹出我们传入的参数
```javascript
			var parm=function(){
				var index=0;
				for(var i=arguments.length;index<i;index++){
					
					alert(arguments[index]);
				};
			};
			parm(1,2,3);
```
argrument和apply一起使用
代码1-17
```javascript
			//定义父类
			function Accommodation(){
				this.isAlarmed = false;
			};
			Accommodation.prototype.alarm=function(note,time){
				var message="Alarm activated at"+time+"with the note:"+note;
				this.isAlarmed=true;
				alert(message);
			};
			
			//定义一个子类House
			function House(){
				this.isLocked = false;
				
			};
			
			//继承Accommodation
			House.prototype=new Accommodation();
			//为House子类重新定义alarm方法。方法定义中没有列出参数，因为我们会把所有的参数直接传递给父类中的同名方法
			House.prototype.alarm = function(){
				//将对象实例的isLocked属性设置为true
				this.isLocked=true;
				
				//调用父类Accommodation的alarm方法，将当前函数的所有参数传递给父类方法--无需将他们一一列出
				Accommodation.prototype.alarm.apply(this,arguments)
			};
			
			//创建子类的一个方法实例进行测试
			var myHouse=new House();
			myHouse.alarm("该起床了",new Date());
			alert(myHouse.isLocked);//true
```

- 共有私有以及受保护的属性和方法
限制某些属性和方法的暴露程度。
要想通过共有的方法来访问私有的变量，我们需要创建一个同时包含两个作用域的新作用域，为此我们可以创建一个自我执行的函数，称为闭包。
对所有私有变量或者函数加一个下划线"_",作为前缀，以标识他们是私有的。

代码1-18
```javascript
			//我们将类的定义包含在一个自我执行的函数里，这个函数返回我们所创建的类，并将其保存在变量
			//中，以方便我们在以的代码中使用
			var Accommodation=(function(){
				//定义类的构造函数，因为处在一个新的函数内，我们也切换到一个新的作用域中，我们可以使用
				//与保存函数返回值的那个变量相同的名字。
				function Accommodation(){};
				
				//此处定义所有的变量都是私有的，这些变量在当前作用域外不可用，可以给变量添加下划线前缀来标识这一点
				var _isLocked=false,
				_isAlarmed = false,
				_alarmMessage = "Alarm activated";
				
				//仅在当前作用域中定义的函数（而未在构造函数的原型上定义），也都是私有的
				function _alarm(){
					_isAlarmed=true;
					alert(_alarmMessage);
				};
				
				function _disableAlarm(){
					_isAlarmed=false;
				};
				
				//所有定义在原型上的方法都是公有的，当我们在此处创建类，在闭包结束处被返回后，就可以在当前作用域之外访问到
				//这些方法
				Accommodation.prototype.lock=function(){
					_isLocked = true;
					_alarm();
				};
				
				Accommodation.prototype.unlock=function(){
					_isLocked = false;
					_disableAlarm();
				};
				
				//定义一个getter函数来对私有变量_isLocked的值进行只读访问——相当于把改变量定义为"受保护的"
				Accommodation.prototype.getIsLocked = function(){
					return _isLocked;
				};
				
				//定义一个setter函数来对私有变量_alarmMessage进行只写访问--相当于将其定义为“受保护的”
				Accommodation.prototype.setAlarmMessage = function(message){
					_alarmMessage = message;
				};
				
				//返回这个作用域中创建的类，使之在外层作用域中即后面代码的所有位置都可用。只有公有的属性和方法是可用的
				return Accommodation;
			}());
			
			//创建一个对象实例
			var house= new Accommodation();
			house.lock();//弹出警告消息"Alarm activated"
			//house._alarm();//错误_alarm函数从未被公开暴露，所以无法直接通过类的对象实例进行访问
			alert(house._isLocked);//undefined,_isLocked是私有的，在闭包外面访问不到
			house.getIsLocked();//true,返回_isLocked的值，但不允许对其进行直接访问，所以该变量是只读的
			
			house.setAlarmMessage("The alarm is now activated!");
			house.lock();//弹出警告"the alarm is now activated"
```

1.2代码规范
变量和函数命名，名字的开头必须是下面这些字符之一
- a-z，A-Z中的一个字母；
- 下划线_
- 美元符号$

第一个字符之后，除了以上符号之外还可以使用0-9

1.2.1使用描述性的名字

1.2.2以小写字母开头
- 将Dom元素保存在变量中以免对其进行重复查找，变量前面加一个$符号作为前缀
```javascript
var $body=$(document.body);
```
- 所有的构造函数的首字母都应该大写
```javascript
function MyType(){};
var myTypeInstance=new MyType();
```
- 构造函数里面的私有函数和变量应该在名字前面加一个下划线"_"作为前缀，用来区别共有的变量和方法

```javascript
function myType(){
	var _myPrivateVariable;
};
var myTypeInstance = new MyType();
```
1.2.3用驼峰命名法来分割单词

1.2.4全局常量使用大写的名字

1.2.5集中在一个语句中声明函数体的所有的变量，并将其置于函数体的顶部
- 使用var关键字用简写的方式在一个语句中同时定义多个变量，具体是用逗号隔开每个变量声明，为了保证可读性，我们将变量名首字母对齐。

```javascript
			var myString="Hello,world",
				allStrongTags=/<strong>(.*?)</strong>/g,
				tagContents="&1",
				outputString;
				outputString = myString.replace(allStrongTags,tagContents);

```

- 变量和函数名的提升*是不是函数的执行流程*
代码1-21：代码块和作用域
```javascript
	function myFunction(){
		var myArray=['January','February','March','April','May'],
			myArrayLength=myArray.length,
			counter=0;
			for(var index=0;index<myArrayLength;index++){
				//每循环一次，counter的值加一
				counter=index+1;
			};
			
			//这些变量的值应该是符合期望的
			alert(counter);//5
			alert(index);//5,因为在判定循环条件之前循环递进了一步
			alert(myArrayLength);//5
			
			if(myArrayLength>0){
				//在很多语言中，这样一个代码块中定义的变量其作用域也局限于改代码块中
				//但是在javascript中不是，所以在代码块中定义变量要注意
				var counter,
					index=0,
					//myArrayLength=10,尼玛比你这么写他也会改变，智障
					myArrayLength,
					counter=0;
			};
			
			//即使在代码块中使用var来进行了定义，counter和index的值还是在if语句中被改变了
			alert(counter);//0
			alert(index);//0
			
			//注意虽然在代码块中用var对myArrayLength进行了重定义，但其值并未发生改变
			//这是因为javascript在函数执行之前就把变量名提升到了函数的顶部
			alert(myArrayLength);//5
	};
	//执行上面的函数
	myFunction();
```

代码1-22在函数开头处对函数中用到的所有变量进行定义
```javascript
	function myFunction(){
		//为了防止变量提升引起的错误，我们在函数顶部对所有的变量进行定义
		var myArray=['January','February','March','April','May'],
		    myArrayLength=myArray.length,
			counter=0,
			index=0;
			
			//for循环的第一部分通常是用来定义循环变量的，现在由于我们将变量定义都放在了函数体顶部了
			//所以可以省略这一部分
			for(;index<myArrayLength;index++){
				counter = index+1;
			}
			//变量的值应该不出所料
			alert(counter);//5
			alert(index);//5
			alert(myArrayLength);//5
	};
	//执行函数
	myFunction();
```
代码1-23：函数的提升
```javascript
	function myFunction(){
		//因为javascript的提升，在函数定义之前执行一个函数是可行的
		doSomething();//下面的函数被执行了
		function doSomething(){
			alert("Doing something");
		};
	};
	myFunction();
```

1.3ECMAScript5
1.3.1JSON数据格式解析
- json格式的数据结构：
```json
{
	"success":false,
	"error_message":"The wrong parameters were passed to this web service"
			}
```
- JSON.parse()用法:用于从一个字符串中解析出json 对象
```html
<html>
	<head>
		<title></title>
		<meta charset="UTF-8"/>
	</head>
	<body>
		<div id="div1"></div>
	</body>
	<script>
		//单引号写在{}外，每个属性都必须双引号，否则会抛出异常
		var str='{"name":"李明","age":21}';
		//parse用于从一个字符串中解析出json对象
		var x=JSON.parse(str);
		console.log(x);
		var div1=document.getElementById("div1");
		div1.innerHTML="名字"+x.name+"年龄"+x.age;
	</script>

</html>
```
- eval:用于在一个字符串中解析出json对象的时候，注意写法
```html
<html>
    <head>
        <title></title>
        <meta charset="UTF-8"/>
    </head>
    <body>
        <div id="div1"></div>
    </body>
    <script>
        var str='{"name":"李明","age":21}';
        //注意用eval解析的时候的写法
        var x=eval("("+str+")");
        console.log(x); 
        var div1=document.getElementById("div1");
        div1.innerHTML="名字"+x.name+"年龄"+x.age;
    </script>

</html>
```
eval的其他用法
```javascript
<script type="text/javascript">

eval("x=10;y=20;document.write(x*y)")

document.write(eval("2+2"))

var x=10
document.write(eval(x+17))

</script>
```
- 为什么不推荐使用eval？
	- eval不容易调试。用chromeDev等调试工具无法打断点调试
	- 说到性能问题，在旧的浏览器中如果你使用了eval，性能会下降10倍。在现代浏览器中有两种编译模式：fast path和slow path。fast path是编译那些稳定和可预测（stable and predictable）的代码。而明显的，eval不可预测，所以将会使用slow path ，所以会慢。还有一个是，在使用类似于Closure Compiler等压缩（混淆）代码时，使用eval会报错。（又慢又报错，我还推荐吗？）
	- 关于安全性，我们经常听到eval是魔鬼，他会引起XSS攻击，实际上，如果我们对信息源有足够的把握时，eval并不会引起很大的安全问题。而且不光是eval，其他方式也可能引起安全问题。

附上几篇文章：
JavaScript探秘：eval()是“魔鬼” -- 简明现代魔法 eval是魔鬼：http://www.nowamagic.net/librarys/veda/detail/1627
eval不是魔鬼：https://www.nczonline.net/blog/2013/06/25/eval-isnt-evil-just-misunderstood/
哦，看到一些说json.parse内部是用eval的，再附上几个链接供大家参考：http://stackoverflow.com/questions/17024136/does-json-parse-use-eval-internally
这是json.parse 源码：https://code.google.com/p/v8/source/browse/trunk/src/json-parser.h

- JSON.stringify:用于从一个对象解析出字符串
```html
<html>
    <head>
        <title></title>
        <meta charset="UTF-8"/>
    </head>
    <body>
        <div id="div1"></div>
    </body>
    <script>
        var str={"name":"李明","age":21};
        //JSON.stringify用于将Json对象解析为Json字符串
        var x=JSON.stringify(str);
        console.log(x); //{"name":"李明","age":21}
        console.log(typeof x);//在输出里面看不出来是字符串，我们用typeof测试一遍，返回string
        var div1=document.getElementById("div1");
        div1.innerHTML=x;
    </script>

</html>
```

1.3.2严格模式
ECMAScript5中可以将一个函数或整个javascript文件置于一个新的严格模式，只需要将下面的字符串放在该文件或函数中就可以
```
"use strict";
```
- 严格模式下，使用了未定义的变量，javascript会报错
- delete关键字本应该用在对象的属性上，如果你将其用在变量或者函数身上，javascript也会报错
- 严格模式禁止使用eval来执行包含javascript代码的字符串

代码1-24未使用严格模式
```javascript
    <script>
    //点一个一个函数
    function myFunction(){
        //使用一个之前未定义的变量，隐式的将其创建为全局变量
        counter=1;
        //用eval来执行包含javascript代码的字符串不会报错
        eval("alert(counter)");//弹出1
        //delete关键字的作用是移除对象的属性和方法，但是将其作用在变量身上不会报错
        delete counter;
    };
    myFunction();
    </script>
```
代码1-24使用严格模式
```javascript
    <script>
    //点一个一个函数
    function myFunction(){
        "use strict";
        //执行这条语句会报错，因为counter变量未定义
        counter=1;
        //eval由于安全原因应该避免使用，所以这里会报错
        eval("alert(counter)");//弹出1
        //delete关键字只应该被用于移除对象直接量的属性和方法，所以这里会报错
        delete counter;
    };
    myFunction();
    </script>
```

1.3.3函数绑定
除了call与apply以外的另一个方法。bind,他不会直接执行函数，而是会返回一个新的函数。**这个新的函数的上下文被设定为在调用bind的方法的时候，作为第一个参数传入的任意对象。**
代码1-25*没看懂*
```javascript
    <script>
    var header= document.createElement('header');
        mouseState="up",

        //定义一个包含三个方法的对象
        eventHandlers={
            onClick:function(){
                //如果onClick函数被调用的时候执行上下文是错误的，一下两个调用将失败
                this.onMouseDown();
                this.onMouseUp();
            },
            onMouseDown:function(){
                mouseState="down";
            },
            onMouseUp:function(){
                mouseState="up";
            }
        };
        //强制eventHandlers.onClick使用正确的上下文，为此我们通过bind方法返回一个新的函数。
        //该函数就会根据我们的要求绑定了相应的上下文
        header.addEventListener("click",eventHandlers.onClick.bind(eventHandlers),false);
        //将header元素添加到页面
        document.body.appendChild(header);
    </script>
```
1.3.4数组的方法
- 判断一个变量是否包含数组数据--->Array.isArray
代码1-26
```javascript
    <script>
        var months=["january","February","March","April","May"],
            items={
                "0":"january",
                "1":"February",
                "2":"March",
                "3":"April",
                "4":"May"
            };
            myItems=[
                {
                "0":"january",
                "1":"February",
                "2":"March",
                "3":"April",
                "4":"May"
            },
            {
                "5":"June",
                "6":"July",
                "7":"August",
                "8":"September",
                "9":"October"
            }
            ]
            alert(Array.isArray(months)); //true
            alert(Array.isArray(items));//false
            alert(Array.isArray(myItems));//true
    </script>
```
- 遍历一个数组--->forEach，只需要给该方法传递一个函数，他就会对数组中的每个函数调用一次该函数，同时将当前遍历的值，数据索引以及对整个数据的引用传递给这个函数。
代码1-27
```javascript
    <script>
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    //通过forEarch方法我们可以遍历数组的每一个元素，同时每次执行一个函数
    months.forEach(function(value,index,fullArray){
        //这里的value是他的值，index是他的索引，fullArray是months整个数组
        alert(value+"月份" +(index+1)+"of"+fullArray.length);
    });
    </script>
```
- 判断数组中每个元素是否满足由某个函数所定义的特定的条件，用every（），与之相似的还有一个some方法，该方法会在数组中至少有一个元素满足给定的条件的时候返回true。
```
    <script type="text/javascript">
        var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        //every方法遍历数组中的每一个元素，将每一个元素和一个条件进行比较
        //如果数组中每一个元素都满足整个条件，则every返回true，否则返回false
        everyItemContainsR=months.every(function(value,index,fullArray){
            //根据当前遍历到的元素是否满足你指定的条件来返回true或者false，这里的条件就是判断value是否包含字母r
            return value.indexOf("r")>=0;
        });

        //some方法遍历数组中的每个元素并将其和某个条件对比，如果数组中的任意一个元素满足这个条件，则some返回true，否则返回false
        someItmeContainsR=months.some(function(value,index,fullArray){
            return value.indexOf("r")>=0;
        });

        //不是所有元素包含字母r
        alert(everyItemContainsR);//false

        //但是某些元素包含
        alert(someItmeContainsR);//true
    </script>
```
- map方法可以根据一个已有的数组来创建一个新的数组，他会在创建新的数组的过程中，每生成一个元素都执行一个函数
代码1-29
注意：
indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
注释：indexOf() 方法对大小写敏感！
注释：如果要检索的字符串值没有出现，则该方法返回 -1。
```javascript
    <script type="text/javascript">
        var daysOfTheWeek = ['Monday','Tuesday','wednesday'],
        //map方法通过遍历一个已有的数组来生成一个全新的数组，他会在遍历每个元素的时候执行一个函数
        //并通过该函数来生成新数组中的对应元素
            daysFirstLetters=daysOfTheWeek.map(function(value,index,fullArray){
                return value + "starts with" + value.charAt(0);
            });
            console.log(daysFirstLetters);//返回了一个新的数组
            alert(daysFirstLetters.join(","));//“Monday starts with M,Tuesday starts with T.
    </script>
```

- filter方法根据原有的数组创建一个削减版的数组，该数组值包含哪些满足某个特定条件的元素
```javascript
    <script type="text/javascript">
        var months=["january","february","march","april","may"],
            monthsContainingR=months.filter(function(value,index,fullArray){
                //返回true或者false来指示当前数组元素是否应该包含在过滤中的数组中，这里的判断条件是看元素值是否包含字母r
                return value.indexOf("r")>=0;
            });
            //唯一不包含字母r的月份是五月
            console.log(monthsContainingR);
            alert(monthsContainingR.join(","));
    </script>
```

1.3.5对象的方法
- 将一个对象进行锁定，这样在代码中的某个点之后，就不嗯能够向该对象添加新的属性或者方法。用的是Object.preventExtensions,以及一个Object.isExtensible.
```javascript
    <script type="text/javascript">
        //定义一个包含两个属性的简单对象
        var personalDetails={
            name:"李明",
            email:"liming@qq.com"
        };
        alert(Object.isExtensible(personalDetails));//true,因为默认所有的对象都是可以扩展的

        //阻止personalDetails对象进行扩展
        Object.preventExtensions(personalDetails);
        alert(Object.isExtensible(personalDetails));//false,因为该对象现在被锁定了

        //尝试为personalDetails对象添加一个新的属性
        personalDetails.age=35;
        //如果使用严格模式的话会抛出错误，因为对象现在被锁定了
    </script>
```
- 如果想进一步锁定一个对象，使其已有的属性值也无法被改变，可以用Object.freeze
代码1-32
```javascript
    <script type="text/javascript">
        //定义一个有两个属性的简单对象
        var personalDetials={
            name:"李明",
            email:"liming@qq.com"
        };

        //锁定期对象，使其已有的属性也无法改变
        Object.freeze(personalDetials);
        alert(Object.isFrozen(personalDetials));//true
        personalDetials.name="小红";//如果在严格模式下回报错，因为一旦对象呗冻住，就无法更改期属性值
    </script>
```
- 属性描述符是一个有四个属性的对象直接量，如果想读取某个属性的属性描述符号，可以使用Object.getOwnPropertyDescriptor,除了value属性之外，默认值都是true。
代码：1-33
```javascript
    <script type="text/javascript">
        //定义包含两个属性的简单对象
        var personalDetails={
            name:"李明",
            email:"adf@qq.com"
        };

        var x=Object.getOwnPropertyDescriptor(personalDetails,"name");
        //返回代表name属性的如下对象直接量
        // configurable:true
        // enumerable:true
        // value:"李明"
        // writable:true
        console.log(x);
    </script>
```

- 可以在创建属性的同时，定义期属性描述符*有错误*

1-34
```javascript
    <script type="text/javascript">
        //定义有两个属性的简单对象
        var personalDetails={
            name:"李明",
            email:"fdaskf@aa.com"
        };

        //为该对象单独定义一个新的属性
        Object.defineProperty(personalDetails,"age",{
            value:34,
            writable:false,
            enumerable:true,
            configurable:true
        });

        //同时定义多个属性
        Object.defineProperty(personalDetails,{
            age:{
                value:23,
                writable:false,
                enumerable:true,
                configurable:true
            },
            town:{
                value:'London',
                writable:true
            }
        });
    </script>
```
- 得到一个包含某个对象所有属性名的数组，用Object.keys

```javascript
    <script type="text/javascript">
        //定义有两个属性的简单对象
        var personalDetails={
            name:"李明",
            email:"adf@ww.com"
        },
        keys=Object.keys(personalDetails);

        alert(keys.join(","));//"name,email"
    </script>
```
- **Object.create方法,根据某个已有的对象的属性来创建一个新的对象，多用来创建一个已有对象的副本**用来做继承

```
    <script type="text/javascript">
        //定义有两个属性的简单对象
        var personalDetails={
            firstName:"李明",
            lastName:"李伟"
        },
        fathersDetails=Object.create(personalDetails);

        //定制这个副本对象
        fathersDetails.firstName="Jhon";

        //通过原有对象所设置的属性值未改变
        alert(fathersDetails.lastName);//李伟
    </script>
```