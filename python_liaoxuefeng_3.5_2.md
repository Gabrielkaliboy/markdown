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
