### java虚拟机
---
1. 全称：java virtual machine，简称JVM
2. java之所以跨平台，就是因为虚拟机的存在，不同的平台对应不同的虚拟机。我们编写的Java源码，编译后会生成一种 .class 文件，称为字节码文件。Java虚拟机就是负责将字节码文件翻译成特定平台下的机器码然后运行。

### java开发环境搭建
---
1. JDK:Java Development Kit，Java开发工具箱。我们所得Java版本，实际上是指JDK的版本。
2. JDK所提供的部分工具：
- java编译器：javac.exe
- java解释器：java.exe
- java文档生成器：javadoc.exe
- java调试器：jdb.exe

配置环境变量的时候，如果一直没有效果，开机重启！！！

### 第一个java程序
---
### java程序
1. 新建java程序
2. 在新建的java程序src目录下面，新建一个java类，注意这个java类的名字，比如我们命名：helloWorld,这时候里面的内容是这样的

```java
public class helloWorld{
...
}
```
class后面的名字和我们命名的文件名称一致。
我们让他输出hello world
```java
public class helloWorld{
	public static void main(String[] args){
		System.out.println("helloWorld");
	}
}
```
注意这里的println,是小写l不是i
- 运行1，在helloWorld的内容编辑区域，右击--运行方式---java应用程序
- 运行2，用命令行，在当前的项目文件夹上，右击--显示位置---System Explorer，进入文件夹，按着shift键右击，选择在此处运行命令窗口
	- javac HelloWorld.java命令用于将Java源文件HelloWorld编译为class字节码文件。运行javac命令后，如果成功编译没有错误的话，你发现当前目录下多了一个HelloWorld.class的文件。
	- java HelloWorld命令则是装载和运行class字节码文件，最终在控制台输出“helloWorld”。
```
javac HelloWorld.java
java HelloWorld
```
- 这是一个方法，是所有java程序的入口，任何的java程序的代码都是从这个方法开始执行的
```java
public static void main(String[] args){
		
}
```
- 将希望输出信息放到System.out.println(...)的括号内就能在控制台中显示出来
- 注意System.out.print()和System.out.println()区别，后者会在最后增加一个换行符号
3. java中的一些注意事项

- 对于大小写敏感
- 像2中所说的那样，程序的文件名称和class后面类的名称应该一致。

4. 关于java的标识符（命名规则）
-  所有的标识符都应该以字母（A-Z，a-z），美元符$,或者下划线_开始
-  首字母以后，除了1中，还可以有数字
-  java语言自带的关键字不能是标识符
-  java标识符对于大小写敏感

5. java中的注释
- 单行//
- 多行/**/
- 可以生成自动文档/** */

二.数据类型，变量和运算符
---
### 标识符、保留字、和数制
1. java标识符
程序员对程序中的各个元素加以命名时使用的命名记号称为标识符（identifier）。Java语言中，标识符是以字母，下划线（_）,美元符($)开始的一个字符序列，后面可以跟字母，下划线，美元符，数字。例如，identifier，userName，User_Name，_sys_val， $change为合法的标识符，而2mail room#，class 为非法的标识符。

2. java保留字
具有专门的意义和用途，不能当作一般的标识符使用，这些标识符称为保留字(reserved word),也称为关键字，下面列出了java语言中的所有保留字：
bstract，break，byte，boolean，catch，case，class，char，continue，default，double，do，else，extends，false，final，float，for，finally，if，import，implements，int，interface，instanceof，long，length，native，new，null，package，private，protected，public，return，switch，synchronized，short，static，super，try，true，this，throw，throws，threadsafe，transient，void，while 。

3. 数制可以说是纯粹数学上的内容，只不过在计算机语言开发中，使用的比较频繁。在编程语言中，数制一般包括二进制、八进制、十进制和十六进制。
3.1二进制
二进制的特征：有两个数字组成：“0”和“1”；运算时逢二进一。
例如：1100110011、10000001。

3.2八进制
八进制的特征：有 8 个数字：“0”、“1”、“2”、“3”、“4”、“5”、“6”、“7”；运算时逢八进一。
例如：014
注意：八进制的数据有一个 0的前缀。它经常会与二进制产生混淆，所以建议在 Java程序设计中，最好不要使用八进制

3.3十六进制
十六进制的特征：有 16 个数字：“0”、“1”、“2”、“3”、“4”、“5”、“6”、“7”、“8”、“9”、“A”、“B”、“C”、“D”、“E”、“F”；运算时逢十六进一。
例如：0XB。
注意：十六进制用 A、B、C、D、E、F这五个字母分别表示 10-15。字母不区分大小写。十六进制的数据有一个 0X的前缀。

3.4十进制
十进制的特征：有 10 个数字：“0”、“1”、“2”、“3”、“4” 、“5”、“6”、“7”、“8”、“9”；运算时逢 10 进一。
例如：89、92。

### 数据类型以及变量的定义
1. java是一种强类型的语言，声明变量时必须指出数据类型。变量的值占据一定的内存空间，不同类型的变量占据不同的大小。
2. java中共有巴中数据类型，4种整型，2种浮点型，1种字符串，1种布尔型

| 数据类型  | 说明  | 所占内存  |  举例  |	备注	|
| ------------- |:-------------:| -----:| -----:| -----:|
| byte     | 字节型 | 1byte |  3,127  |    |  |s
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |