---
title: 廖雪峰 Python 3读书笔记(2)
date: 2017-09-19 19:17:40
categories: 后端
tags: [Python]
---
<Excerpt in index | 首页摘要> 
廖雪峰 Python 3读书笔记
<!-- more -->
<The rest of contents | 余下全文>

----
## 7.函数式编程
### 高阶函数
```py
print(abs(-10))

print(abs)

x=abs(-14)
print(x)

#结论：函数本身也可以赋值给变量，即：变量可以指向函数。
f=abs
print(f)
print(f(-8))


# 把abs指向10后，就无法通过abs(-10)调用该函数了！因为abs这个变量已经不指向求绝对值函数而是指向一个整数10！
# 当然实际代码绝对不能这么写，这里是为了说明函数名也是变量。要恢复abs函数，请重启Python交互环境。
# abs=10
abs(-14)

# 传入函数
def add(x,y,f):
    return f(x)+f(y)

print("传入函数",add(-10,-10,abs))
```

#### map/reduce
```py
# map()函数接收两个参数，一个是函数，一个是Iterable，map将传入的函数依次作用到序列的每个元素，并把结果作为新的Iterator返回

def f(x):
    return x*x

r=map(f,[1,2,3,4,5,6,7,8,9])

# map()传入的第一个参数是f，即函数对象本身。由于结果r是一个Iterator，Iterator是惰性序列，因此通过list()函数让它把整个序列都计算出来并返回一个list。
print(list(r))
# 直接这么写出不来
print(r)

# 你可能会想，不需要map()函数，写一个循环，也可以计算出结果：
L=[]
for x in [1,2,3,4,5,6,7,8,9]:
    L.append(f(x))
print(L)

#的确可以，但是，从上面的循环代码，能一眼看明白“把f(x)作用在list的每一个元素并把结果生成一个新的list”吗？

#所以，map()作为高阶函数，事实上它把运算规则抽象了，因此，我们不但可以计算简单的f(x)=x2，还可以计算任意复杂的函数，比如，把这个list所有数字转为字符串：

print(list(map(str,[1,2,3,4,5,6,7,8,9])))

# reduce把一个函数作用在一个序列[x1, x2, x3, ...]上，这个函数必须接收两个参数，reduce把结果继续和序列的下一个元素做累积计算，其效果就是：
# reduce(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)
from functools import reduce
def add(x,y):
    return x+y
print(reduce(add,[1,2,3,4,5]))

# 当然求和运算可以直接用Python内建函数sum()，没必要动用reduce。

# 但是如果要把序列[1, 3, 5, 7, 9]变换成整数13579，reduce就可以派上用场：
def fn(x,y):
    return x*10+y

print(reduce(fn,[1,2,3,4,5,6]))

# 这个例子本身没多大用处，但是，如果考虑到字符串str也是一个序列，对上面的例子稍加改动，配合map()，我们就可以写出把str转换为int的函数：
def strToNumber(s):
    return {"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9}[s]

print(reduce(fn,map(strToNumber,"123465")))

# 整理成一个str2int的函数就是：
def str2int(s):
    def fn(x,y):
        return x*10+y
    def strToNumber(s):
        return {"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9}[s]
    return reduce(fn,map(strToNumber,s))

print(str2int("8542695"))

# 还可以用lambda函数进一步简化成：
def char3num(s):
    return {"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9}[s]

def str3int(s):
    return reduce (lambda x,y:x*10+y,map(char3num,s))

#利用map()函数，把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']：


# Python提供的sum()函数可以接受一个list并求和，请编写一个prod()函数，可以接受一个list并利用reduce()求积：

# 利用map和reduce编写一个str2float函数，把字符串'123.456'转换成浮点数123.456：
```

#### filter
```py
#Python内建的filter()函数用于过滤序列。

#和map()类似，filter()也接收一个函数和一个序列。和map()不同的是，filter()把传入的函数依次作用于每个元素，然后根据返回值是True还是False决定保留还是丢弃该元素。

#例如，在一个list中，删掉偶数，只保留奇数，可以这么写：

def is_odd(n):
    return n % 2==1

print("过滤奇数",list(filter(is_odd,[1,2,3,4,5,6])))    

def not_empty(s):
    return s and s.strip()
print(list(filter(not_empty,["A","B","",None])))

# 注意到filter()函数返回的是一个Iterator，也就是一个惰性序列，所以要强迫filter()完成计算结果，需要用list()函数获得所有结果并返回list。


# 用filter求素数
# 计算素数的一个方法是埃氏筛法，它的算法理解起来非常简单：

# 首先，列出从2开始的所有自然数，构造一个序列：

# 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...

# 取序列的第一个数2，它一定是素数，然后用2把序列的2的倍数筛掉：

# 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...

# 取新序列的第一个数3，它一定是素数，然后用3把序列的3的倍数筛掉：

# 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...

# 取新序列的第一个数5，然后用5把序列的5的倍数筛掉：

# 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...

# 不断筛下去，就可以得到所有的素数。

# 用Python来实现这个算法，可以先构造一个从3开始的奇数序列：
def _odd_iter():
    n=1
    while True:
        n=n+2
        yield n

#注意这是一个生成器，并且是一个无限序列。然后定义一个筛选函数：
def _not_divisible(n):
    return lambda x:x % n > 0
# 最后，定义一个生成器，不断返回下一个素数：

def primes():
    yield 2
    it =_odd_iter() #初始序列
    while True:
        n=next(it) # 返回序列的第一个数
        yield n
        it = filter(_not_divisible(n), it) # 构造新序列

#这个生成器先返回第一个素数2，然后，利用filter()不断产生筛选后的新的序列。由于primes()也是一个无限序列，所以调用时需要设置一个退出循环的条件：
# 打印1000以内的素数:
for n in primes():
    if n < 1000:
        print(n)
    else:
        break

```
#### sorted 排序算法    

```py
# Python内置的sorted()函数就可以对list进行排序：
print(sorted([-9,4,45,-8,5,2,-7,2]))

# sorted()函数也是一个高阶函数，它还可以接收一个key函数来实现自定义的排序，例如按绝对值大小排序：
print(sorted([-9,4,45,-8,5,2,-7,2],key=abs))

# 默认情况下，对字符串排序，是按照ASCII的大小比较的，由于'Z' < 'a'，结果，大写字母Z会排在小写字母a的前面
print(sorted(['bob', 'about', 'Zoo', 'Credit']))

# 现在，我们提出排序应该忽略大小写，按照字母序排序。要实现这个算法，不必对现有代码大加改动，只要我们能用一个key函数把字符串映射为忽略大小写排序即可。忽略大小写来比较两个字符串，实际上就是先把字符串都变成大写（或者都变成小写），再比较。

print(sorted(['bob', 'about', 'Zoo', 'Credit'],key=str.lower))

# 要进行反向排序，不必改动key函数，可以传入第三个参数reverse=True：

print(sorted(['bob', 'about', 'Zoo', 'Credit'],key=str.lower,reverse=True))

# 练习
#假设我们用一组tuple表示学生名字和成绩：L = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]请用sorted()对上述列表分别按名字排序：
```

### 返回函数
```py
def calc_sum(*args):
    ax=0
    for n in args:
        ax=ax+n
    return ax
calc_sum(1,2,3,4,5)
# 但是，如果不需要立刻求和，而是在后面的代码中，根据需要再计算怎么办？可以不返回求和的结果，而是返回求和的函数：
def lazy_sum(*args):
    def sum():
        ax=0
        for n in args:
            ax=ax+n
        return ax
    return sum

f=lazy_sum(1,2,3,4)
# 知识调用f得到的是sum方法，而不是计算结果
print(f)

# 返回sum函数的调用结果
print(f())


# 在这个例子中，我们在函数lazy_sum中又定义了函数sum，并且，内部函数sum可以引用外部函数lazy_sum的参数和局部变量，当lazy_sum返回函数sum时，相关参数和变量都保存在返回的函数中，这种称为“闭包（Closure）”的程序结构拥有极大的威力。

# 请再注意一点，当我们调用lazy_sum()时，每次调用都会返回一个新的函数，即使传入相同的参数：
f1=lazy_sum(1,2,3)
f2=lazy_sum(1,2,3)
# 两个函数的内存地址是不一样的，所以是false
print(f1==f2)

# 闭包

# 注意到返回的函数在其定义内部引用了局部变量args，所以，当一个函数返回了一个函数后，其内部的局部变量还被新函数引用，所以，闭包用起来简单，实现起来可不容易。

# 另一个需要注意的问题是，返回的函数并没有立刻执行，而是直到调用了f()才执行。我们来看一个例子：
def count():
    fs=[]
    for i in range(1,4):
        def f():
            return i*i
        fs.append(f)
    return fs
#fs这个list里面存的是三个函数，循环完毕以后的i就是3，所以f(3),f(3),f(3)

f1,f2,f3=count()
print(f1())
print(f2())
print(f3())

# 全部都是9！原因就在于返回的函数引用了变量i，但它并非立刻执行。等到3个函数都返回时，它们所引用的变量i已经变成了3，因此最终结果为9。

# 返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。

# 如果一定要引用循环变量怎么办？方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变：

def count1():
    def f(j):
        def g():
            return j*j
        return g
    fs=[]
    for i in range(1,4):
        fs.append(f(i)) # f(i)立刻被执行，因此i的当前值被传入f()
    return fs

f3,f4,f5=count1()
print(f3())
print(f4())
print(f5())

# 缺点是代码较长，可利用lambda函数缩短代码。
```


### 匿名函数
```py
# 当我们在传入函数时，有些时候，不需要显式地定义函数，直接传入匿名函数更方便。

# 在Python中，对匿名函数提供了有限支持。还是以map()函数为例，计算f(x)=x2时，除了定义一个f(x)的函数外，还可以直接传入匿名函数：

# lambda 表达式，通常是在需要一个函数，但是又不想费神去命名一个函数的场合下使用，也就是指匿名函数。
print(list(map(lambda x:x*x,[1,2,3,4,5,6])))

# 通过对比可以看出，匿名函数lambda x: x * x实际上就是：
def fn(x):
    return x*x
# 关键字lambda表示匿名函数，冒号前面的x表示函数参数。

# 匿名函数有个限制，就是只能有一个表达式，不用写return，返回值就是该表达式的结果。

# 用匿名函数有个好处，因为函数没有名字，不必担心函数名冲突。此外，匿名函数也是一个函数对象，也可以把匿名函数赋值给一个变量，再利用变量来调用该函数：

f=lambda x :x*x
print(f(5))

# 同样，也可以把匿名函数作为返回值返回，比如：
def build(x,y):
    return lambda x,y :x*x+y*y
#返回的是匿名函数的地址
print(build(1,2))


def build1(x):
    return lambda x:x*x
# 返回的是匿名函数的地址
print(build1(1))

# Python对匿名函数的支持有限，只有一些简单的情况下可以使用匿名函数。
```

### 装饰器
7.8
```py
# 由于函数也是一个对象，而且函数对象可以被赋值给变量，所以，通过变量也能调用该函数。
def now1():
    print("2017.9.18")

f=now1
f()
# 函数对象有一个__name__属性，可以拿到函数的名字：

print(f.__name__)
print(now1.__name__)

# 现在，假设我们要增强now()函数的功能，比如，在函数调用前后自动打印日志，但又不希望修改now()函数的定义，这种在代码运行期间动态增加功能的方式，称之为“装饰器”（Decorator）。

# 本质上，decorator就是一个返回函数的高阶函数。所以，我们要定义一个能打印日志的decorator，可以定义如下：

def log(func):
    def wrapper(*args,**kw):
        print("call %s():" %func.__name__)
        return func(*args,**kw)
    return wrapper

# 观察上面的log，因为它是一个decorator，所以接受一个函数作为参数，并返回一个函数。我们要借助Python的@语法，把decorator置于函数的定义处：
@log
def now():
    print("121212")

# 调用now()函数，不仅会运行now()函数本身，还会在运行now()函数前打印一行日志：

now()

# 把@log放到now1()函数的定义处，相当于执行了语句：
# now1 = log(now1)

# 由于log()是一个decorator，返回一个函数，所以，原来的now()函数仍然存在，只是现在同名的now变量指向了新的函数，于是调用now()将执行新函数，即在log()函数中返回的wrapper()函数。

# wrapper()函数的参数定义是(*args, **kw)，因此，wrapper()函数可以接受任意参数的调用。在wrapper()函数内，首先打印日志，再紧接着调用原始函数。

# 如果decorator本身需要传入参数，那就需要编写一个返回decorator的高阶函数，写出来会更复杂。比如，要自定义log的文本：

def log1(text):
    def decorator(func):
        def wrapper(*args,**kw):
            print('%s %s():'%(text,func.__name__))
            return func(*args,**kw)
        return wrapper
    return decorator

# 使用log1
@log1("运行")
def now2():
    print("你好")

# 调用now2
now2()

# 和两层嵌套的decorator相比，3层嵌套的效果是这样的：
# now = log('execute')(now)

# 我们来剖析上面的语句，首先执行log('execute')，返回的是decorator函数，再调用返回的函数，参数是now函数，返回值最终是wrapper函数。

# 以上两种decorator的定义都没有问题，但还差最后一步。因为我们讲了函数也是对象，它有__name__等属性，但你去看经过decorator装饰之后的函数，它们的__name__已经从原来的'now'变成了'wrapper'：

print(now2.__name__)

# 因为返回的那个wrapper()函数名字就是'wrapper'，所以，需要把原始函数的__name__等属性复制到wrapper()函数中，否则，有些依赖函数签名的代码执行就会出错。

# 不需要编写wrapper.__name__ = func.__name__这样的代码，Python内置的functools.wraps就是干这个事的，所以，一个完整的decorator的写法如下：

import functools
def log2(func):
    @functools.wraps(func)
    def wrapper(*args,**kw):
        print('call %s():'%func.__name__)
        return func(*args,**kw)
    return wrapper

# 或者针对带参数的decorator：
import functools

def log3(text):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kw):
            print('%s %s():' % (text, func.__name__))
            return func(*args, **kw)
        return wrapper
    return decorator



# 小结

```

小结

在面向对象（OOP）的设计模式中，decorator被称为装饰模式。OOP的装饰模式需要通过继承和组合来实现，而Python除了能支持OOP的decorator外，直接从语法层次支持decorator。Python的decorator可以用函数实现，也可以用类实现。

decorator可以增强函数的功能，定义起来虽然有点复杂，但使用起来非常灵活和方便。


### 偏函数
7.9
```py
# 偏函数
# Python的functools模块提供了很多有用的功能，其中一个就是偏函数（Partial function）。要注意，这里的偏函数和数学意义上的偏函数不一样。

# 在介绍函数参数的时候，我们讲到，通过设定参数的默认值，可以降低函数调用的难度。而偏函数也可以做到这一点。举例如下：

# int()函数可以把字符串转换为整数，当仅传入字符串时，int()函数默认按十进制转换：
aa=int("123")
print(aa)

# 但int()函数还提供额外的base参数，默认值为10。如果传入base参数，就可以做N进制的转换：

# 5
print(int("101",base=2))

# 假设要转换大量的二进制字符串，每次都传入int(x, base=2)非常麻烦，于是，我们想到，可以定义一个int2()的函数，默认把base=2传进去：
def int2(x,base=2):
    return int(x,base)
#11
print(int2("1011"))


# functools.partial就是帮助我们创建一个偏函数的，不需要我们自己定义int2()，可以直接使用下面的代码创建一个新的函数int2：
import functools
int2=functools.partial(int,base=2)
print(int2("101"))

# 所以，简单总结functools.partial的作用就是，把一个函数的某些参数给固定住（也就是设置默认值），返回一个新的函数，调用这个新函数会更简单。

# 注意到上面的新的int2函数，仅仅是把base参数重新设定默认值为2，但也可以在函数调用时传入其他值：

print(int2("101",base=10))

# 最后，创建偏函数时，实际上可以接收函数对象、*args和**kw这3个参数，当传入：
# int2 = functools.partial(int, base=2)实际上固定了int()函数的关键字参数base，也就是：int2('10010')
# 相当于：
# kw = { 'base': 2 }
# int('10010', **kw)
# 当传入：

max2=functools.partial(max,10)
# 实际上会把10作为*args的一部分自动加到左边，也就是：
print(max2(5, 6, 7))
#相当于：
args = (10, 5, 6, 7)
print(max(*args))
```