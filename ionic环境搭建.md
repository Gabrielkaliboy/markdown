---
title: ionic 环境搭建
date: 2017-08-25 16:17:40
categories: 前端
tags: [前端,hybird,App]
---
<Excerpt in index | 首页摘要> 
ionic 环境搭建
<!-- more -->
<The rest of contents | 余下全文>

-----
## 环境搭建

### 1.安装node
前往[Node.js 官网](https://nodejs.org/en/)下载 Node.js 安装包直接安装.建议下载LTS稳定版。安装一路回车就行

安装完成后打开cmd或者git bash，输入“node -v”命令，能正常现实版本号说明安装成功

### 2.安装 cnpm (可选)
npm 是 Node.js 的包管理器，由于我大天朝网络环境的原因，在使用 npm 的时候经常无法安装包或者下载很慢
于是我们需要一个 npm 的中国镜像，cnpm 是淘宝的 npm 镜像，10分钟同步一次
以管理员身份打开终端，输入`npm install -g cnpm --registry=https://registry.npm.taobao.org`命令，等待安装完成

安装完成后，输入“cnpm -v”命令，能正常显示版本号说明安装成功


### 3.安装 Cordova & Ionic CLI
以管理员身份打开终端，输入`npm i cordova ionic -g`命令，等待安装完成

```
如果安装了 cnpm，可以使用“cnpm i cordova ionic -g”命令
```

安装完成后，输入`cordova -v`命令和`ionic -v`命令，能正常现实版本号说明安装成功


### 4.安装 Java SDK (jdk)并配置环境变量
#### 4.1 下载地址： 

http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html （请注意选择您电脑的对应版本） 

Java环境变量的配置：参看：http://zhidao.baidu.com/question/1366931535221381339.html 

#### 4.2 配置：高级->环境变量（不会就百度Windows配置java环境）
JAVAHOME: C:\Program Files\Java\jdk1.7.0_25
Path: C:\Program Files\Java\jdk1.7.0_25\bin

#### 4.3 运行：cmd->javac or java –version正常显示内容说明安装成功

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionicEnvironment/4.png?raw=true)


### 5.安装 Android SDK

#### 5.1下载
前往 [Android 官网](https://developer.android.com/studio/index.html)(需要梯子) 下载最新的 Android SDK 安装
下载完后解压到某个目录，比如`C:\Program Files(x86)\Android\`目录下

#### 5.2为 Android SDK 设置系统环境变量
1)  ANDROID_HOME: D:\Android SDK\android\sdk


2)  分别将 Android SDK中tools目录的路径和platform-tools的路径添加到Path中；如我安装的目录：D:\Android SDK\android\sdk\platform-tools;  D:\Android SDK\android\sdk\tools

设置完成后打开终端，输入“android”命令，能打开 Android SDK Manager 窗口说明安装成功

或者，运行：adb, 正常显示内容说明安装成功

如果上述两个都没有运行成功，试试用管理员形式运行cmd

3、打打开 Android SDK Manager 后，选择要安装的组件
由于我一般是用真实 Android 设备来开发，所以我只选择了 Android SDK Tools、Android SDK Platform-tools、Android SDK Build-tools、Android Support Repository、Google USB Driver，以及Android API 19-24 的 SDK Platform

点击 Install 按钮，等待安装完成


### 6.cordova5.0以上需要安装gradle

#### 6.1下载
直接网上搜索gradle，[官网](https://gradle.org/releases/),选择合适的版本下载就行，然后解压到某个文件夹，

#### 6.2配置环境变量

打开我的电脑-右键属性-高级设置-环境变量-增加变量GRADLE_HOME-路径是gradle的安装目录-

修改path后面添加；%GRADLE_HOME%\bin

然后重新打开cmd控制台输入gradle -version-出现提示信息安装成功，如果不成功，可以尝试修改path的路径不使用；%GRADLE_HOME%\bin直接改成bin的路径；然后重新打开cmd，输入命令测试是否安装成功。

（如果不安装这个，可能会在后面的生成APP命令中出错）

## 可能会出现的错误

### 1.使用gradle生成APP的时候，生成速度很慢，或者直接报错

问题说明：

当我们使用`ionic cordova platform add android`这个命令来生成APP的时候，会出现下图这样的错误，或者下载速度非常慢。这是由于下载`gradle-3.3-all.zip`的时候(可能你的版本号不是这个)，由于gfw等原因，造成网络连接超时。翻墙以后由于下载速度慢，造成很长时间的等待

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionicEnvironment/1.png?raw=true)

解决方法：

提前将对应的文件下载到本地。

具体措施：

- 先打着这个路径下的GradleBuilder.js

`你的项目名称/platforms/android/cordova/lib/builders/GradleBuilder.js`

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionicEnvironment/2.png?raw=true)

在上面的文件里面搜索`CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL`,可以看到这么一句话,我们主要就是对这句话进行修改
```javascript
var distributionUrl = process.env['CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL'] || 'https\\://services.gradle.org/distributions/gradle-3.3-all.zip';
```

所以`gradle-3.3-all.zip`的下载地址就是`https://services.gradle.org/distributions/gradle-3.3-all.zip`

其他的版本可以在[这里找](http://services.gradle.org/distributions/)

[国内](http://download.csdn.net/album/detail/2265)

- 将对象版本的gradle下载到本地，是一个压缩包，不用解压，放到下面的路径中

```
你的项目名称/platforms/android/gradle
```
![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionicEnvironment/3.png?raw=true)

- 然后把上面我们找到的代码修改成：

```
var distributionUrl = process.env['CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL'] || '../gradle-3.3-all.zip';
```

搞定。

当然存在其他路径也是没问题的，不过要想到跨域问题，所以我们需要在响应路径开启本地服务。

此时地址就改成本地并加上对应开启服务的端口号。

```
var distributionUrl = process.env['CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL'] || 'http://127.0.0.1:8081/gradle-3.3-all.zip';
```

### 2.ionic2打包android的app打开时很长时间白屏的简单解决方法：
在用`ionic cordova build android`命令时，在后面加上`--prod`参数，即使用`ionic cordova build android --prod`命令。

测试无效