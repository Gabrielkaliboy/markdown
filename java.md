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
- 