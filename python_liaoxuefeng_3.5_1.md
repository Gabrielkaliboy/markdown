---
title: 廖雪峰 Python 3读书笔记(1)
date: 2017-09-11 19:17:40
categories: 后端
tags: [Python]
---
<Excerpt in index | 首页摘要> 
廖雪峰 Python 3读书笔记
<!-- more -->
<The rest of contents | 余下全文>

----

## 1.在Windows上安装Python
[64](https://www.python.org/ftp/python/3.5.2/python-3.5.2-amd64.exe)

[32](https://www.python.org/ftp/python/3.5.2/python-3.5.2.exe)


[国内镜像](https://pan.baidu.com/s/1kU5OCOB#list/path=%2Fpub%2Fpython)

很重要
**特别要注意勾上Add Python 3.5 to PATH，然后点“Install Now”即可完成安装。**


### 安装成功

在cmd里面输入Python，返回如下内容就是安装成功，如下也是进入了Python的运行环境

```
C:\Users\admin>python

Python 3.5.2 (v3.5.2:4def2a2901a5, Jun 25 2016, 22:18:55) [MSC v.1900 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
```


## 2.Python解释器
当我们编写Python代码时，我们得到的是一个包含Python代码的以.py为扩展名的文本文件。要运行代码，就需要Python解释器去执行.py文件。

由于整个Python语言从规范到解释器都是开源的，所以理论上，只要水平够高，任何人都可以编写Python解释器来执行Python代码（当然难度很大）。事实上，确实存在多种Python解释器。

### CPython

当我们从Python[官方网站](https://www.python.org/)下载并安装好Python 3.5后，我们就直接获得了一个官方版本的解释器：CPython。这个解释器是用C语言开发的，所以叫CPython。在命令行下运行python就是启动CPython解释器。

CPython是使用最广的Python解释器。教程的所有代码也都在CPython下执行。


## 3. 第一个Python程序

键入`python`,进入交互环境

输入`100+200`,程序会自动返回`300`

输入`print("hello world")`,print是输出，然后把希望打印的文字用单引号或者双引号括起来，但不能混用单引号和双引号

```
>>> print('hello, world')
hello, world
```


### 命令行模式和Python交互模式

在命令行模式下，可以执行`python`进入Python交互式环境，也可以执行python `hello.py`运行一个.py文件。
如果hello.py里面只写
```
100+200+300
```
不会有任何反应，这是因为没有print(),注意print前面不要有任何空格
### 使用文本编辑器

sublime

notepad++

**绝对不能用Word和Windows自带的记事本**

### python 文件

以py结尾，文件名只能是英文字母、数字和下划线的组合


### 直接运行py文件
能不能像.exe文件那样直接运行.py文件呢？在Windows上是不行的，但是，在Mac和Linux上是可以的，方法是在.py文件的第一行加上一个特殊的注释：

```
#!/usr/bin/env python3

print('hello, world')
```

然后，通过命令给hello.py以执行权限：

```python
$ chmod a+x hello.py
```

### 输入和输出
print()函数也可以接受多个字符串，用逗号“,”隔开，就可以连成一串输出：
```
>>> print('The quick brown fox', 'jumps over', 'the lazy dog')
The quick brown fox jumps over the lazy dog
```
注意这里必须是单引号，双引号会报错

```
>>> print('100 + 200 =', 100 + 200)
100 + 200 = 300
```

#### 输入
现在，你已经可以用print()输出你想要的结果了。但是，如果要让用户从电脑输入一些字符怎么办？Python提供了一个input()，可以让用户输入字符串，并存放到一个变量里。比如输入用户的名字：

```
>>> name = input()
Michael
```

当你输入name = input()并按下回车后，Python交互式命令行就在等待你的输入了。这时，你可以输入任意字符，然后按回车后完成输入。

输入完成后，不会有任何提示，Python交互式命令行又回到>>>状态了。那我们刚才输入的内容到哪去了？答案是存放到name变量里了。可以直接输入name查看变量内容：

```
>>> name
'Michael'
```

要打印出name变量的内容，除了直接写name然后按回车外，还可以用print()函数：


```
>>> print(name)
Michael
```
第一行代码会让用户输入任意字符作为自己的名字，然后存入name变量中；第二行代码会根据用户的名字向用户说hello,input()可以让你显示一个字符串来提示用户
```
name = input('please enter your name: ')
print('hello,', name)
```

## 4.python基础

### 代码格式化
4.1.py
```py
# print absolute value of an integer:
a = 100
if a >= 0:
    print(a)
else:
    print(-a)
```
以#开头的语句是注释，注释是给人看的，可以是任意内容，解释器会忽略掉注释。其他每一行都是一个语句，当语句以冒号:结尾时，缩进的语句视为代码块。

缩进有利有弊。好处是强迫你写出格式化的代码，但没有规定缩进是几个空格还是Tab。按照约定俗成的管理，应该始终坚持使用4个空格的缩进。

缩进的另一个好处是强迫你写出缩进较少的代码，你会倾向于把一段很长的代码拆分成若干函数，从而得到缩进较少的代码。

缩进的坏处就是“复制－粘贴”功能失效了，这是最坑爹的地方。当你重构代码时，粘贴过去的代码必须重新检查缩进是否正确。此外，IDE很难像格式化Java代码那样格式化Python代码。

最后，请务必注意，Python程序是大小写敏感的，如果写错了大小写，程序会报错。

### 数据类型

#### 字符串
字符串内部既包含'又包含"怎么办？可以用转义字符\来标识，比如：
```
'I\'m \"OK\"!'
```
表示的字符串内容是：
```
I'm "OK"!
```
转义字符\可以转义很多字符，比如\n表示换行，\t表示制表符，字符\本身也要转义，所以\\表示的字符就是\，可以在Python的交互式命令行用print()打印字符串看看：

```py
>>> print('I\'m ok.')
I'm ok.
>>> print('I\'m learning\nPython.')
I'm learning
Python.
>>> print('\\\n\\')
\
\
```
如果字符串里面有很多字符都需要转义，就需要加很多\，为了简化，Python还允许用r''表示''内部的字符串默认不转义，可以自己试试：

```py
>>> print('\\\t\\')
\       \
>>> print(r'\\\t\\')
\\\t\\
```

如果字符串内部有很多换行，用\n写在一行里不好阅读，为了简化，Python允许用'''...'''的格式表示多行内容，可以自己试试：

```py
>>> print('''line1
... line2
... line3''')
line1
line2
line3
```

#### 布尔值
True、False表示布尔值（请注意大小写）

布尔值可以用and、or和not运算。

#### 空值
空值是Python里一个特殊的值，用None表示。None不能理解为0，因为0是有意义的，而None是一个特殊的空值。

此外，Python还提供了列表、字典等多种数据类型，还允许创建自定义数据类型，我们后面会继续讲到。


#### 变量
变量名必须是大小写英文、数字和_的组合，且不能用数字开头

在Python中，等号=是赋值语句，可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，例如：

```py
a = 123 # a是整数
print(a)
a = 'ABC' # a变为字符串
print(a)
```

这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如Java是静态语言，赋值语句如下（// 表示注释）：

```
int a = 123; // a是整数类型变量
a = "ABC"; // 错误：不能把字符串赋给整型变量
```

理解变量在计算机内存中的表示也非常重要
```
a = 'ABC'
```
Python解释器干了两件事情：

在内存中创建了一个'ABC'的字符串；

在内存中创建了一个名为a的变量，并把它指向'ABC'。

也可以把一个变量a赋值给另一个变量b，这个操作实际上是把变量b指向变量a所指向的数据，例如下面的代码：

```
a = 'ABC'
b = a
a = 'XYZ'
print(b)
```

b的值是'ABC'

#### 常量
所谓常量就是不能变的变量，比如常用的数学常数π就是一个常量。在Python中，通常用全部大写的变量名表示常量：
```
PI = 3.14159265359

```
但事实上PI仍然是一个变量，Python根本没有任何机制保证PI不会被改变，所以，用全部大写的变量名表示常量只是一个习惯上的用法，如果你一定要改变变量PI的值，也没人能拦住你。

最后解释一下整数的除法为什么也是精确的。在Python中，有两种除法，一种除法是/：

```
>>> 10 / 3
3.3333333333333335
```

**/除法计算结果是浮点数，即使是两个整数恰好整除，结果也是浮点数：**

```
>>> 9 / 3
3.0
```

**还有一种除法是//，称为地板除，两个整数的除法仍然是整数：**
```
>>> 10 // 3
3
```
你没有看错，整数的地板除//永远是整数，即使除不尽。要做精确的除法，使用/就可以。

因为//除法只取结果的整数部分，所以Python还提供一个余数运算，可以得到两个整数相除的余数：

```
>>> 10 % 3
1
```

无论整数做//除法还是取余数，结果永远是整数，所以，整数运算结果永远是精确的。



### 字符串和编码


#### Python的字符串
在最新的Python 3版本中，字符串是以Unicode编码的，也就是说，Python的字符串支持多语言，例如：

```
>>> print('包含中文的str')
包含中文的str
```

对于单个字符的编码，Python提供了ord()函数获取字符的整数表示，chr()函数把编码转换为对应的字符：

```
>>> ord('A')
65
>>> ord('中')
20013
>>> chr(66)
'B'
>>> chr(25991)
'文'
```

#### 循环
Python的循环有两种，一种是for...in循环，依次把list或tuple中的每个元素迭代出来，看例子：

4.2.py
```py
names = ['Michael', 'Bob', 'Tracy']
for name in names:
    print(name)
```

4.3.py
```py
sum=0
for x in [1,2,3,4,5,6,7,8,9,10]:
    sum=sum + x
print(sum)
```

如果要计算1-100的整数之和，从1写到100有点困难，幸好Python提供一个range()函数，可以生成一个整数序列，再通过list()函数可以转换为list。比如range(5)生成的序列是从0开始小于5的整数：

4.4.py
```py
sum=0
for x in list(range(101)):
    sum=sum+x
print(sum)
```


第二种循环是while循环，只要条件满足，就不断循环，条件不满足时退出循环。比如我们要计算100以内所有奇数之和，可以用while循环实现：

```py
sum = 0
n = 99
while n > 0:
    sum = sum + n
    n = n - 2
print(sum)
```


break
```py
n = 1
while n <= 100:
    print(n)
    n = n + 1
print('END')
```
上面的代码可以打印出1~100。

如果要提前结束循环，可以用break语句：

```py
n = 1
while n <= 100:
    if n > 10: # 当n = 11时，条件满足，执行break语句
        break # break语句会结束当前循环
    print(n)
    n = n + 1
print('END')
```
continue

在循环过程中，也可以通过continue语句，跳过当前的这次循环，直接开始下一次循环。
```py
n = 0
while n < 10:
    n = n + 1
    if n % 2 == 0: # 如果n是偶数，执行continue语句
        continue # continue语句会直接继续下一轮循环，后续的print()语句不会执行
    print(n)
```

break语句可以在循环过程中直接退出循环，而continue语句可以提前结束本轮循环，并直接开始下一轮循环。这两个语句通常都必须配合if语句使用。

要特别注意，不要滥用break和continue语句。break和continue会造成代码执行逻辑分叉过多，容易出错。大多数循环并不需要用到break和continue语句，上面的两个例子，都可以通过改写循环条件或者修改循环逻辑，去掉break和continue语句。

#### 使用dict和set


## 5.函数

### 定义函数
在Python中，定义一个函数要使用def语句，依次写出函数名、括号、括号中的参数和冒号:，然后，在缩进块中编写函数体，函数的返回值用return语句返回。

我们以自定义一个求绝对值的my_abs函数为例：

```
def my_abs(x):
    if x >= 0:
        return x
    else:
        return -x
```

请注意，函数体内部的语句在执行时，一旦执行到return时，函数就执行完毕，并将结果返回。因此，函数内部通过条件判断和循环可以实现非常复杂的逻辑。

如果没有return语句，函数执行完毕后也会返回结果，只是结果为None。

return None可以简写为return。

在Python交互环境中定义函数时，注意Python会出现...的提示。函数定义结束后需要按两次回车重新回到>>>提示符下：

### 函数的参数(有点复杂)
位置参数
5.1.py
```py
def power(x):
    return x * x
```

5.2.py
```py
def power(x, n):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s
```

默认参数

5.3.py
```py
def power(x, n=2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s
```

从上面的例子可以看出，默认参数可以简化函数的调用。设置默认参数时，有几点要注意：

一是必选参数在前，默认参数在后，否则Python的解释器会报错（思考一下为什么默认参数不能放在必选参数前面）；

二是如何设置默认参数。

当函数有多个参数时，把变化大的参数放前面，变化小的参数放后面。变化小的参数就可以作为默认参数。

使用默认参数有什么好处？最大的好处是能降低调用函数的难度。

5.4.py
```py
def enroll(name, gender):
    print('name:', name)
    print('gender:', gender)
```

5.5.py
```py
def enroll(name,gender,age=6,city="beijing"):
    print("name:",name)
    print("gender:",gender)
    print("age:",age)
    print("city:",city)
enroll("李明","F")
enroll("小红","A",city="石家庄")
enroll("王伟","b",7,"张家口")
enroll("姚明","c",9)
```

默认参数很有用，但使用不当，也会掉坑里。默认参数有个最大的坑

5.6.py
```py
def add_end(L=[]):
    L.append('END')
    print(L)

add_end([1,2,3])
add_end(["x","y","z"])
```

5.7.py
```py
def add_end(L=[]):
    L.append("END")
    print(L)
#多次调用的时候，结果就不对了
add_end()
add_end()
add_end()

```

```py
>>> add_end()
['END', 'END']
>>> add_end()
['END', 'END', 'END']
```
原因解释如下：

Python函数在定义的时候，默认参数L的值就被计算出来了，即[]，因为默认参数L也是一个变量，它指向对象[]，每次调用该函数，如果改变了L的内容，则下次调用时，默认参数的内容就变了，不再是函数定义时的[]了。

所以，**定义默认参数要牢记一点：默认参数必须指向不变对象！**

要修改上面的例子，我们可以用None这个不变对象来实现：

```py
def add_end(L=None):
    if L is None:
        L = []
    L.append('END')
    return L
```

#### 可变参数
在Python函数中，还可以定义可变参数。顾名思义，可变参数就是传入的参数个数是可变的，可以是1个、2个到任意个，还可以是0个。

我们以数学题为例子，给定一组数字a，b，c……，请计算a2 + b2 + c2 + ……。

要定义出这个函数，我们必须确定输入的参数。由于参数个数不确定，我们首先想到可以把a，b，c……作为一个list或tuple传进来，这样，函数可以定义如下：

5.9.py
```py
def calc(numbers):
    sum=0
    for n in numbers:
        sum=sum+n*n
    print(sum)
    return
# calc(1,2,3)会报错
calc([1,2,3])
calc((2,3))
```

如果利用可变参数，调用函数的方式可以简化成这样：
5.10.py
```py
def calc(*numbers):
    sum=0
    for i in numbers:
        sum=sum+i*i
    print(sum)
    return

calc(4,5)

#calc([1,2])报错
```

如果已经有一个list或者tuple，要调用一个可变参数怎么办？可以这样做：
```py
>>> nums = [1, 2, 3]
>>> calc(nums[0], nums[1], nums[2])
14
```

这种写法当然是可行的，问题是太繁琐，所以Python允许你在list或tuple前面加一个*号，把list或tuple的元素变成可变参数传进去：

5.11.py
```py
def calc(*numbers):
    sum=0
    for x in numbers:
        sum=sum+x*x
    print(sum)
    return sum

nums=[1,2,3]
calc(*nums)
```

#### 关键字参数
可变参数允许你传入0个或任意个参数，这些可变参数在函数调用时自动组装为一个tuple。而关键字参数允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个dict。请看示例：

5.12.py
```py
def person(name,age,**kw):
    print("name：",name,"age：",age,"others：",kw)

person("jerry",12)

person("李明",33,sex="男",city="北京")

```

关键字参数有什么用？它可以扩展函数的功能。比如，在person函数里，我们保证能接收到name和age这两个参数，但是，如果调用者愿意提供更多的参数，我们也能收到。试想你正在做一个用户注册的功能，除了用户名和年龄是必填项外，其他都是可选项，利用关键字参数来定义这个函数就能满足注册的需求。

和可变参数类似，也可以先组装出一个dict，然后，把该dict转换为关键字参数传进去：

5.13.py
```py
def person(name,age,**kw):
    print("name：",name,"age：",age,"others：",kw)

extra = {"sex":"男","city":"北京"}
person("李白",90,sex=extra['sex'],city=extra['city'])
person("王磊",34,**extra)

```

\**extra表示把extra这个dict的所有key-value用关键字参数传入到函数的\**kw参数，kw将获得一个dict，注意kw获得的dict是extra的一份拷贝，对kw的改动不会影响到函数外的extra。


#### 命名关键字参数
对于关键字参数，函数的调用者可以传入任意不受限制的关键字参数。至于到底传入了哪些，就需要在函数内部通过kw检查。

仍以person()函数为例，我们希望检查是否有city和job参数：
```py
def person(name, age, **kw):
    if 'city' in kw:
        # 有city参数
        pass
    if 'job' in kw:
        # 有job参数
        pass
    print('name:', name, 'age:', age, 'other:', kw)
```

但是调用者仍可以传入不受限制的关键字参数：
```py
>>> person('Jack', 24, city='Beijing', addr='Chaoyang', zipcode=123456)
```
如果要限制关键字参数的名字，就可以用命名关键字参数，例如，只接收city和job作为关键字参数。这种方式定义的函数如下：

```py
def person(name, age, *, city, job):
    print(name, age, city, job)
```
和关键字参数**kw不同，命名关键字参数需要一个特殊分隔符*，*后面的参数被视为命名关键字参数。

调用方式如下：
```py
>>> person('Jack', 24, city='Beijing', job='Engineer')
Jack 24 Beijing Engineer
```

如果函数定义中已经有了一个可变参数，后面跟着的命名关键字参数就不再需要一个特殊分隔符*了：

```py
def person(name, age, *args, city, job):
    print(name, age, args, city, job)
```
命名关键字参数必须传入参数名，这和位置参数不同。如果没有传入参数名，调用将报错：
```py
>>> person('Jack', 24, 'Beijing', 'Engineer')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: person() takes 2 positional arguments but 4 were given
```

5.15.py
```py
def person(name,age,*,city,job):
    print(name,age,city,job)

# person("李明",32,city="北京",sex="男")因为不需要sex,所以会报错，不需要的sex参数

person("李明",32,city="北京",job="hr")

# person("李明",32,"北京","hr")这个也报错，person()需要两个参数，但是给了四个
```

由于调用时缺少参数名city和job，Python解释器把这4个参数均视为位置参数，但person()函数仅接受2个位置参数。

命名关键字参数可以有缺省值，从而简化调用：
```py
def person(name, age, *, city='Beijing', job):
    print(name, age, city, job)
```

由于命名关键字参数city具有默认值，调用时，可不传入city参数：

```py
>>> person('Jack', 24, job='Engineer')
Jack 24 Beijing Engineer
```
使用命名关键字参数时，要特别注意，如果没有可变参数，就必须加一个\*作为特殊分隔符。如果缺少*，Python解释器将无法识别位置参数和命名关键字参数：



```py
def person(name, age, city, job):
    # 缺少 *，city和job被视为位置参数
    pass
```

#### 参数组合

在Python中定义函数，可以用必选参数、默认参数、可变参数、关键字参数和命名关键字参数，这5种参数都可以组合使用。但是请注意，参数定义的顺序必须是：必选参数、默认参数、可变参数、命名关键字参数和关键字参数。

比如定义一个函数，包含上述若干种参数：

```py
def f1(a, b, c=0, *args, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw)

def f2(a, b, c=0, *, d, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'd =', d, 'kw =', kw)
```

在函数调用的时候，Python解释器自动按照参数位置和参数名把对应的参数传进去。

```py
>>> f1(1, 2)
a = 1 b = 2 c = 0 args = () kw = {}
>>> f1(1, 2, c=3)
a = 1 b = 2 c = 3 args = () kw = {}
>>> f1(1, 2, 3, 'a', 'b')
a = 1 b = 2 c = 3 args = ('a', 'b') kw = {}
>>> f1(1, 2, 3, 'a', 'b', x=99)
a = 1 b = 2 c = 3 args = ('a', 'b') kw = {'x': 99}
>>> f2(1, 2, d=99, ext=None)
a = 1 b = 2 c = 0 d = 99 kw = {'ext': None}

```
最神奇的是通过一个tuple和dict，你也可以调用上述函数：

```py
>>> args = (1, 2, 3, 4)
>>> kw = {'d': 99, 'x': '#'}
>>> f1(*args, **kw)
a = 1 b = 2 c = 3 args = (4,) kw = {'d': 99, 'x': '#'}
>>> args = (1, 2, 3)
>>> kw = {'d': 88, 'x': '#'}
>>> f2(*args, **kw)
a = 1 b = 2 c = 3 d = 88 kw = {'x': '#'}
```

所以，对于任意函数，都可以通过类似func(*args, **kw)的形式调用它，无论它的参数是如何定义的。

#### 小结

Python的函数具有非常灵活的参数形态，既可以实现简单的调用，又可以传入非常复杂的参数。

默认参数一定要用不可变对象，如果是可变对象，程序运行时会有逻辑错误！

要注意定义可变参数和关键字参数的语法：

*args是可变参数，args接收的是一个tuple；

**kw是关键字参数，kw接收的是一个dict。

以及调用函数时如何传入可变参数和关键字参数的语法：

可变参数既可以直接传入：func(1, 2, 3)，又可以先组装list或tuple，再通过\*args传入：func(*(1, 2, 3))；

关键字参数既可以直接传入：func(a=1, b=2)，又可以先组装dict，再通过**kw传入：func(**{'a': 1, 'b': 2})。

使用*args和**kw是Python的习惯写法，当然也可以用其他参数名，但最好使用习惯用法。

命名的关键字参数是为了限制调用者可以传入的参数名，同时可以提供默认值。

定义命名的关键字参数在没有可变参数的情况下不要忘了写分隔符*，否则定义的将是位置参数。


### 递归函数

在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。

5.16.py
```py
def fact(n):
    if n==1:
        return 1
    return n*fact(n-1)

print(fact(5))
```

使用递归函数需要注意防止栈溢出。在计算机中，函数调用是通过栈（stack）这种数据结构实现的，每当进入一个函数调用，栈就会加一层栈帧，每当函数返回，栈就会减一层栈帧。由于栈的大小不是无限的，所以，递归调用的次数过多，会导致栈溢出。可以试试fact(1000)：



解决递归调用栈溢出的方法是通过尾递归优化，事实上尾递归和循环的效果是一样的，所以，把循环看成是一种特殊的尾递归函数也是可以的。

尾递归是指，在函数返回的时候，调用自身本身，并且，return语句不能包含表达式。这样，编译器或者解释器就可以把尾递归做优化，使递归本身无论调用多少次，都只占用一个栈帧，不会出现栈溢出的情况。

上面的fact(n)函数由于return n * fact(n - 1)引入了乘法表达式，所以就不是尾递归了。要改成尾递归方式，需要多一点代码，主要是要把每一步的乘积传入到递归函数中：

```py
def fact(n):
    return fact_iter(n, 1)

def fact_iter(num, product):
    if num == 1:
        return product
    return fact_iter(num - 1, num * product)
```

可以看到，return fact_iter(num - 1, num * product)仅返回递归函数本身，num - 1和num * product在函数调用前就会被计算，不影响函数调用。

fact(5)对应的fact_iter(5, 1)的调用如下：

```py
===> fact_iter(5, 1)
===> fact_iter(4, 5)
===> fact_iter(3, 20)
===> fact_iter(2, 60)
===> fact_iter(1, 120)
===> 120
```

尾递归调用时，如果做了优化，栈不会增长，因此，无论多少次调用也不会导致栈溢出。

遗憾的是，大多数编程语言没有针对尾递归做优化，Python解释器也没有做优化，所以，即使把上面的fact(n)函数改成尾递归方式，也会导致栈溢出。


## 6.高级特性
6.1.py
```py
L=[]
n=1
while n<=99:
    L.append(n)
    n=n+2
print(L)
```

### 切片
取一个list或tuple的部分元素是非常常见的操作
6.2
```py
L=[1,2,22,12,3,445,334,23,342,40]
#取前五个
r=[]
n=5
for i in range(5):
        r.append(L[i])
print(r)
```

对这种经常取指定索引范围的操作，用循环十分繁琐，因此，Python提供了切片（Slice）操作符，能大大简化这种操作。
```py
L=[1,2,3,4,5,6,7,8,9,10]
print("全部:",L)
print('前三个：',L[0:3])

# L[0:3]表示，从索引0开始取，直到索引3为止，但不包括索引3。即索引0，1，2，正好是3个元素。
# 如果第一个索引是0，还可以省略：

print("前五个：",L[:5])

#取出索引2的元素
print("索引为2的元素是：",L[2:3])

#倒数第一个
print("我是倒数第一个：",L[-1:])

#倒数俩
print("最后面两个:",L[-2:])

#倒数三
print("倒数第三和倒数第二：",L[-3:-1])
#每隔一个取一个
print("每隔2个取一个：",L[::2])
#复制一个完全一样的
print("复制一个完全一致的：",L[:])

#tuple同样适用slice，只是切完以后还是tuple
M=(1,2,3,4,5,6,7,8)
print("M是个tuple也可以切片:",M[:3])

#字符串也可以切片
V="ABCDEFGHIJKLMN"
print("V是字符串,切他的最后两个：",V[-2:])
```

### 迭代
在Python中，迭代是通过for ... in来完成的

```py
#迭代dict
d={"a":1,"b":2,"c":3}
for key in d:
    print(key)


#因为dict的存储不是按照list的方式顺序排列，所以，迭代出的结果顺序很可能不一样。

#默认情况下，dict迭代的是key。如果要迭代value，可以用for value in d.values()，如果要同时迭代key和value，可以用for k, v in d.items()。
for value in d.values():
    print(value)

for k,v in d.items():
    print(k,v)

#由于字符串也是可迭代对象，因此，也可以作用于for循环：
for ch in "ABC":
    print(ch)


#如何判断一个对象是可迭代对象呢？方法是通过collections模块的Iterable类型判断：
from collections import Iterable
isinstance ("abc",Iterable)
isinstance ([1,2,3,4],Iterable)
isinstance (123,Iterable)   

#如果要对list实现类似Java那样的下标循环怎么办？Python内置的enumerate函数可以把一个list变成索引-元素对，这样就可以在for循环中同时迭代索引和元素本身：
for i,value in enumerate(["A","B","C"]):
    print(i,value)


for i,value in enumerate("ABCDEFGHIJ"):
    print(i,value)

#上面的for循环里，同时引用了两个变量，在Python里是很常见的，比如下面的代码：
for x,y in[(1,1),(2,2),(3,3),(4,4)]:
    print(x,y)

```

### 列表生成

```py
#要生成list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]可以用list(range(1, 11))
print(list(range(1,11)))


#但如果要生成[1x1, 2x2, 3x3, ..., 10x10]怎么做？方法一是循环：
L=[]
for x in range(1,11):
    L.append(x*x)
print(L)


#但是循环太繁琐，而列表生成式则可以用一行语句代替循环生成上面的list：
print([x*x for x in range(1,11)])

#写列表生成式时，把要生成的元素x * x放到前面，后面跟for循环，就可以把list创建出来，十分有用，多写几次，很快就可以熟悉这种语法。

#for循环后面还可以加上if判断，这样我们就可以筛选出仅偶数的平方：
print([x*x for x in range(1,11) if x % 2==0])

#还可以使用两层循环，可以生成全排列：
print([m+n for m in "ABC" for n in "DEF"])

#三层和三层以上的循环就很少用到了。

#运用列表生成式，可以写出非常简洁的代码。例如，列出当前目录下的所有文件和目录名，可以通过一行代码实现：

import os # 导入os模块，模块的概念后面讲到
print([d for d in os.listdir(".")])  # os.listdir可以列出文件和目录

#for循环其实可以同时使用两个甚至多个变量，比如dict的items()可以同时迭代key和value：
d = {'x': 'A', 'y': 'B', 'z': 'C' }

for x,y in d.items():
    print(x,"=",y)

# 列表生成式也可以使用两个变量来生成list：
print([k+"="+v for k,v in d.items()])

# 最后把一个list中所有的字符串变成小写：
L1 = ['Hello', 'World', 'IBM', 'Apple']
print([s.lower() for s in L1])

# 如果list中既包含字符串，又包含整数，由于非字符串类型没有lower()方法，所以列表生成式会报错：
x= 123
print(isinstance (x,str)) #false

L2=['Hello', 'World', 'IBM', 'Apple',123,456]
print([s.lower() for s in L2 if isinstance(s,str)])
```

### 生成器
通过列表生成式，我们可以直接创建一个列表。但是，受到内存限制，列表容量肯定是有限的。而且，创建一个包含100万个元素的列表，不仅占用很大的存储空间，如果我们仅仅需要访问前面几个元素，那后面绝大多数元素占用的空间都白白浪费了。

所以，如果列表元素可以按照某种算法推算出来，那我们是否可以在循环的过程中不断推算出后续的元素呢？这样就不必创建完整的list，从而节省大量的空间。在Python中，这种一边循环一边计算的机制，称为生成器：generator。

要创建一个generator，有很多种方法。第一种方法很简单，只要把一个列表生成式的[]改成()，就创建了一个generator：


```py
# 要创建一个generator，有很多种方法。第一种方法很简单，只要把一个列表生成式的[]改成()，就创建了一个generator：
L=[x*x for x in range(10)]
print(L)
G=(x*x for x in range(10))
print(G)
# 创建L和g的区别仅在于最外层的[]和()，L是一个list，而g是一个generator。

# 我们可以直接打印出list的每一个元素，但我们怎么打印出generator的每一个元素呢？

# 如果要一个一个打印出来，可以通过next()函数获得generator的下一个返回值：

#print(next(G))
#print(next(G))

# 我们讲过，generator保存的是算法，每次调用next(g)，就计算出g的下一个元素的值，直到计算到最后一个元素，没有更多的元素时，抛出StopIteration的错误。

# 当然，上面这种不断调用next(g)实在是太变态了，正确的方法是使用for循环，因为generator也是可迭代对象：
for x in G:
    print("循环遍历：",x)

# 所以，我们创建了一个generator后，基本上永远不会调用next()，而是通过for循环来迭代它，并且不需要关心StopIteration的错误。

# generator非常强大。如果推算的算法比较复杂，用类似列表生成式的for循环无法实现的时候，还可以用函数来实现。

# 比如，著名的斐波拉契数列（Fibonacci），除第一个和第二个数外，任意一个数都可由前两个数相加得到：

# 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

# 斐波拉契数列用列表生成式写不出来，但是，用函数把它打印出来却很容易：
def fib(max):
    n,a,b = 0,0,1
    while n < max :
        print(b)
        a,b = b,a+b
        n=n+1
    return "done"

fib(5)

#注意 a,b=b,a+b

# 等价于
def fib1(max):
    n, a,b = 0,0,1
    while n < max:
        print(b)
        t=(b,a+b)
        a=t[0]
        b=t[1]
        n=n+1
    return "done"

fib1(5)

#仔细观察，可以看出，fib函数实际上是定义了斐波拉契数列的推算规则，可以从第一个元素开始，推算出后续任意的元素，这种逻辑其实非常类似generator。

#也就是说，上面的函数和generator仅一步之遥。要把fib函数变成generator，只需要把print(b)改为yield b就可以了：

def fib2(max):
    n,a,b=0,0,1
    while n < max:
        yield b
        a,b=b,a+b
        n=n+1
    return "done"

# 这就是定义generator的另一种方法。如果一个函数定义中包含yield关键字，那么这个函数就不再是一个普通函数，而是一个generator：
f = fib2(5)
print(f)

# 这里，最难理解的就是generator和函数的执行流程不一样。函数是顺序执行，遇到return语句或者最后一行函数语句就返回。而变成generator的函数，在每次调用next()的时候执行，遇到yield语句返回，再次执行时从上次返回的yield语句处继续执行。

# 举个简单的例子，定义一个generator，依次返回数字1，3，5：

def odd():
    print("step1")
    yield 1
    print("step2")
    yield 2
    print("step3")
    yield 3
o = odd()
next (o)
next(o)
next(o)
# next(o)

# 可以看到，odd不是普通函数，而是generator，在执行过程中，遇到yield就中断，下次又继续执行。执行3次yield后，已经没有yield可以执行了，所以，第4次调用next(o)就报错。

# 回到fib2的例子，我们在循环过程中不断调用yield，就会不断中断。当然要给循环设置一个条件来退出循环，不然就会产生一个无限数列出来。

# 同样的，把函数改成generator后，我们基本上从来不会用next()来获取下一个返回值，而是直接使用for循环来迭代：
for n in fib2(5):
    print("函数generator:",n)


# 但是用for循环调用generator时，发现拿不到generator的return语句的返回值。如果想要拿到返回值，必须捕获StopIteration错误，返回值包含在StopIteration的value中：
aaa=fib2(6)
while (True):
    try:
        x=next(aaa)
        print('g:',x)
    except StopIteration as e:
        print("Generator return value:",e.value)
        break

# print(b)




#练习杨辉三角

```
小结

generator是非常强大的工具，在Python中，可以简单地把列表生成式改成generator，也可以通过函数实现复杂逻辑的generator。

要理解generator的工作原理，它是在for循环的过程中不断计算出下一个元素，并在适当的条件结束for循环。对于函数改成的generator来说，遇到return语句或者执行到函数体最后一行语句，就是结束generator的指令，for循环随之结束。

请注意区分普通函数和generator函数，普通函数调用直接返回结果：

```py
>>> r = abs(6)
>>> r
6
```

generator函数的“调用”实际返回一个generator对象：

```py
>>> g = fib(6)
>>> g
<generator object fib at 0x1022ef948>
```

### 迭代器
我们已经知道，可以直接作用于for循环的数据类型有以下几种：

一类是集合数据类型，如list、tuple、dict、set、str等；

一类是generator，包括生成器和带yield的generator function。

这些可以直接作用于for循环的对象统称为可迭代对象：Iterable。

```py
# 可以使用isinstance()判断一个对象是否是Iterable对象：
from collections import Iterable
print(isinstance ([],Iterable))
print(isinstance({},Iterable))
print(isinstance("abc",Iterable))
print(isinstance((x for x in range(10)),Iterable))
print(isinstance(323,Iterable))

# 而生成器不但可以作用于for循环，还可以被next()函数不断调用并返回下一个值，直到最后抛出StopIteration错误表示无法继续返回下一个值了。

# 可以被next()函数调用并不断返回下一个值的对象称为迭代器：Iterator。

# 可以使用isinstance()判断一个对象是否是Iterator对象：

print("Iterator")
from collections import Iterator
print(isinstance((x for x in range(10)),Iterator))
print(isinstance([],Iterator))
print(isinstance({},Iterator))
print(isinstance("abc",Iterator))
print(isinstance(2323,Iterator))

# 生成器都是Iterator对象，但list、dict、str虽然是Iterable，却不是Iterator。

# 把list、dict、str等Iterable变成Iterator可以使用iter()函数：
print("非Iterator转化为Iterator")
print(isinstance(iter([]),Iterator))
print(isinstance(iter({}),Iterator))
print(isinstance(iter('adfasd'),Iterator))


```

你可能会问，为什么list、dict、str等数据类型不是Iterator？

这是因为Python的Iterator对象表示的是一个数据流，Iterator对象可以被next()函数调用并不断返回下一个数据，直到没有数据时抛出StopIteration错误。可以把这个数据流看做是一个有序序列，但我们却不能提前知道序列的长度，只能不断通过next()函数实现按需计算下一个数据，所以Iterator的计算是惰性的，只有在需要返回下一个数据时它才会计算。

Iterator甚至可以表示一个无限大的数据流，例如全体自然数。而使用list是永远不可能存储全体自然数的。

小结

凡是可作用于for循环的对象都是Iterable类型；

凡是可作用于next()函数的对象都是Iterator类型，它们表示一个惰性计算的序列；

集合数据类型如list、dict、str等是Iterable但不是Iterator，不过可以通过iter()函数获得一个Iterator对象。

Python的for循环本质上就是通过不断调用next()函数实现的，例如：

```py
for x in [1, 2, 3, 4, 5]:
    pass
```

```py
# 首先获得Iterator对象:
it = iter([1, 2, 3, 4, 5])
# 循环:
while True:
    try:
        # 获得下一个值:
        x = next(it)
    except StopIteration:
        # 遇到StopIteration就退出循环
        break
```