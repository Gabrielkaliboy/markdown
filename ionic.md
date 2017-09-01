---
title: 使用ionic快速入门
date: 2017-08-25 16:17:40
categories: 前端
tags: [前端,hybird,App]
---
<Excerpt in index | 首页摘要> 
使用ionic快速入门
<!-- more -->
<The rest of contents | 余下全文>

-----

### 1.资料库
[ionic中文社区](http://www.ionic-china.com/)

[Ionic_中国ionic与ionicframework中文视频教程分享网](http://www.ionic.wang/)

[Ionic3 教程](http://www.jianshu.com/p/1baf40713c1c)

[菜鸟教程](http://www.runoob.com/ionic/ionic-tutorial.html)

[ionic2 精典入门教程](http://www.360doc.com/content/17/0226/15/16002580_632156317.shtml)

### 2.知识储备
- 前端基本知识（HTML5、JavaScript、CSS）
- [TypeScript](https://www.tslang.cn/docs/handbook/generics.html)

- [Angular](https://angularjs.org/)
- TypeScript的话至少需要了解基本语法，可以看看[TS 中文官方文档](https://www.tslang.cn/docs/home.html)

对 Angular 不太熟悉的可以点这里：
- [Angular 4.0 架构详解 ](http://www.jianshu.com/p/3c06260e6015)

- [Angular 4.0 内置指令全攻略](http://www.jianshu.com/p/4cc3a04ca83a)


### 3.一些概念
#### 3.1 什么是 ionic？他和 Cordova、Angular2 有什么联系？
`ionic = Cordova + Angular + ionic CSS `

Cordova 提供了使用 JavaScript 调用 Native 功能，ionic CSS 是一套 UI 框架，ionic 对 Angular 进行了封装。

#### 3.2 ionic3

ionic 基于 AngularJS 开发。由于 AngularJS1.x 版本在性能上已经很难有较大提升，Google 推出了全新设计的 Angular 2，ionic 也对应着出了2。

ionic2 与一代相比有较大的变化，基于最新的 Angular 2 ，使用 TypeScript 进行开发，如果您没有接触过 AngularJS 或 Ionic1.x，完全不用担心，直接从 ionic2 开始学习即可。

ionic3 是 Angular4.0 推出之后的跟进版本，变化幅度不大。


### 4.快速开始

#### 4.1 安装node
如果没有安装过 Node.js，先去[官网](https://nodejs.org/en/)下载一下。

这部分内容查看[官网快速起步](http://ionicframework.com/docs/intro/installation/)

#### 4.2 全局安装ionic

我安装的时候是3.9.2

```
// 安装
$ npm install -g cordova ionic
// 安装后可以验证一下版本
$ ionic -version
3.9.2
```

#### 4.3新建一个目录
新建一个文件夹，命名为 test，在这文件夹执行下面的命令,下面的意思是新建一个名字为cutePuppyPics的文件夹，

```
ionic start cutePuppyPics
```

他会询问你要新建一个什么样的ionic模板，如图所示

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/1.png?raw=true)

我们输入 `tabs` 然后回车，如图所示

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/2.png?raw=true)

当然我们可以直接将上面两步写成一步

```
// ionic3Demo是项目名，tabs是模板（默认是tabs,其他还有tutorial等）
$ ionic start ionic3Demo tabs
```

#### 4.4 切换到cutePuppyPics目录（或者直接打开这个目录运行git）
```
// 在浏览器中运行项目

//切换到cutePuppyPics目录
$ cd cutePuppyPics/

//运行项目
$ ionic serve
```

如图所示

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/tabs.gif?raw=true)

#### 4.5 在web上运行 iOS、Android、WindowsPhone 项目

把浏览器中的地址改为：
http://localhost:8100/ionic-lab

效果如图

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/1.gif?raw=true)

#### 4.6 如果4.3中选择的不是tabs，而是其他的

- blank(一个空白启动项目):这个会报错，如下图所示，因为是空白模板,看提示应该是少不少东西

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/3.png?raw=true)

- sidemenu(一个带有导航菜单的启动项)

感觉和上面那个没什么区别

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/2.gif?raw=true)

- super:看着和上面这个也没啥区别

a starting project complete with pre-built pages,providers   and best practices for ionic development



### 4.7如果在手机上运行，需要执行以下命令
执行这个命令之前需要配置好jdk和Android SDK,详情请看[win系统搭建ionic环境]()

```
// 如果需要在手机运行，则执行以下命令
// 添加iOS项目
$ ionic cordova platform add ios
// 把src里的内容同步到ios项目中(src后面会讲到)
$ ionic cordova build ios
// 运行iOS项目,相当于在Xcode里面按Command+R
$ ionic cordova emulate ios

//安卓的话同理，把ios替换为android即可
$ ionic cordova platform add android
$ ionic cordova build android
$ ionic cordova emulate android

//如果移除某个ios或者Android
$ ionic cordova platform rm android 
```

### 4.8如果不出错的话，会生成APP
![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/4.png?raw=true)

生成的app会在这个路径下面
```
项目名称/platforms\android\build\outputs\apk
```
![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/5.png?raw=true)



### 5. 项目目录说明

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/6.png?raw=true)

- platform 里面是你添加的 iOS 和 Android 项目

- src 就是以后开发写代码主要的地方。每次写完要同步到手机项目中，需要使用

```
$ ionic cordova build ios
$ ionic platform add android
```
同步到 iOS 和 Android 平台里。

#### 5.1 Tabs 分析
打开 `app.component.ts` 可以看到这句代码

```typescript
rootPage:any = TabsPage;
```
这个相当于 iOS 的 `rootViewController` 和 Android 的 `MainActivity`。

回忆一下我们一开始选择的 Tabs 模板，所以这里生成的是 tabs。打开 `src/pages/tabs/tabs.ts`，可以看到这些代码：

```typescript
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
```
这个 TabsPage，就代表了应用最下面的三个 TabBar。上面分别指出了他们的路径。

Ionic 3 的导航和 iOS 一样是一个栈，push 到新界面，pop 回旧界面。我们在构造函数中设置了 this.navCtrl 属性，我们可以调用 this.navCtrl.push() 方法，来导航到一个新的页面。


### 6.登录页制作
[原文](http://www.jianshu.com/p/0f024a62ba14)

运行 platform 中 iOS 和 Android 项目，会发现一行警告，Not found www/index.html。

这是因为我们的上一次测试的页面是根目录中 src 的内容，需要把 src 路径下的内容同步过来。

```
// iOS
$ ionic cordova build ios
// Android
$ ionic cordova build android

// 执行完毕后可以去以下路径检查一下是否有html文件了

// iOS
platform/ios/www
// Android
platform/android/assets/www

```
有了内容之后，就可以在 Xcode 和 Android Studio 上运行项目了。

#### 6.1这里直我们做一个登录页面，了解一些基本知识。

打开 Tabs.html，源码如下：

```
<ion-tabs>
  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>
  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>
  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>
</ion-tabs>

```
修改为如下代码：

```
<ion-tabs>
    <ion-tab *ngFor="let tabRoot of tabRoots" [root]="tabRoot.root" tabTitle="{{tabRoot.tabTitle}}" tabIcon="{{tabRoot.tabIcon}}"></ion-tab>
</ion-tabs>

```

打开 Tabs.ts，源码如下：

```typescript
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}

```

修改为如下代码：
```typescript
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];

  constructor() {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: 'Home',
        tabIcon: 'home'
      },
      {
        root: ContactPage,
        tabTitle: 'Contact',
        tabIcon: 'notifications'
      },
      {
        root: AboutPage,
        tabTitle: 'About',
        tabIcon: 'document'
      }
    ];
  }
}
```
这样你的目录结构就更加清晰了，方便以后为 Tabs 增加新的模块

#### 6.2新建登录页
```
// cd到项目目录，然后执行下面的代码
$ ionic g page login
```
![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/7.png?raw=true)


#### 6.3 打开 app.module.ts
导入新生成的 Login
```
import { LoginPage } from '../pages/login/login';
```

并分别在加入 declarations 和 entryComponents 后面加入 LoginPage

我们所有新建的页面都需要在 module 进行声明才能使用

#### 6.4打开app.component.ts
```
import { LoginPage } from '../pages/login/login';
```
import 登录文件，并修改 rootPage 为 


#### 6.5打开login.html文件，写入以下代码
```
<ion-header>
  <ion-navbar>
    <ion-title>登录</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
    <ion-item>
      <ion-label fixed>账号</ion-label>
      <ion-input type="text" placeholder="请输入账号" #username></ion-input>
    </ion-item>
    <ion-item>
      <ion-label fixed>密码</ion-label>
      <ion-input type="password" placeholder="请输入密码" #password></ion-input>
    </ion-item>
  <ion-item no-lines>
    <label item-right>记住密码</label>
    <ion-toggle></ion-toggle>
  </ion-item>

  <div style="text-align: center; margin-left: 30px; margin-right: 30px;">
    <button ion-button block color="danger" (click)="logIn(username, password)">
      登录
    </button>
  </div>
</ion-content>
```
效果如图所示，其中给 ion-item 加上 no-lines 可以去除底部的线条。

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/3.gif?raw=true)

界面的样式会自动适配系统，这里安卓的标题会自动左对齐，解决的方法是在scss文件加入

```scss
.toolbar-title-md {
  text-align: center;
}
```
再举个例子，toggle 在安卓上会显示：

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/8.png?raw=true)

iOS会显示：

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/9.png?raw=true)

颜色什么的当然可以改，相关的可以查阅官方文档。

仔细体会每一行代码，可以试着删掉一些元素来看看会发生什么改变。有人私聊问过我按钮怎么居中啊，怎么改变按钮宽度，这里直接上代码。

#### 6.6 登录的实现
修改button的代码为：
```
<button ion-button block color="danger" (click)="logIn()">
```
并在login.ts中写下以下代码：

```
logIn() {
    alert('登录');
}
```
浏览器自动 build 之后，再次点击，就会弹出登录的提示框。这个logIn方法没有写权限修饰符，默认的话是 public 的。

这里有个问题，我们如何传值和验证。这里我给出一种简单的解决方案。这个 (click)="logIn()" 明显后面的括号里是可以传值的。我们修改代码如下

login.html
分别修改两个 input

```
<ion-input type="text" placeholder="请输入账号" #username></ion-input>
<ion-input type="password" placeholder="请输入密码" #password></ion-input>
```
将值传入 button 的点击事件

```
<button ion-button block color="danger" (click)="logIn(username, password)">
```

login.ts
修改logIn方法

```typescript
logIn(username: HTMLInputElement, password: HTMLInputElement) {
    let userinfo: string = '用户名：' + username.value  + '密码：' + password.value;
    alert(userinfo);
}
```

这回你点击时候就会输出用户名和密码了。
同理，我们可以加上验证

```typescript
logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
        alert("请输入账号");
    } else if (password.value.length == 0) {
        alert("请输入密码");
    } else {
        let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
        alert(userinfo);
    }
}
```
最后导入头文件，并实现跳转
```
import { TabsPage } from "../tabs/tabs";
```

在登录成功后面加入以下代码：

```
this.navCtrl.push(TabsPage);
```
测试一下，输出账号密码，点击登录即可跳转到 Tabs 页面。


### 7.设置页制作
[原文](http://www.jianshu.com/p/7ea502ef2e49)

#### 7.1.删除 ContactPage 和 AboutPage
首先删除文件，然后删除 app.module.ts 中的引用，最后删除 Tabs.ts 中的引用。如果删除后运行不了就再检查一下或者重新运行一下，你做项目的时候迟早会遇到需要删文件的情况。

所有引用到的地方都要删除！

#### 7.2添加设置页面
```
ionic g page Setting
```

在app.module.ts中import，并分别写到declarations和entryComponents中。

在 tabs.ts 中引入，并在 tabRoots 中插入这段代码
```
{
  root: SettingPage,
  tabTitle: '设置',
  tabIcon: 'person'
}
```

Title 是标题，这里的 tabIcon 用的是 ionic 提供的默认图标，图标大全请看[这里](http://ionicons.com/)，点击里面的图标，就会弹出对应的字符串。如图：

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/4.gif?raw=true)

这里我们必须去掉前面的 ion- 前缀才可以使用。


#### 7.3.制作设置页内容
打开 setting.html，输入以下代码

```
<ion-header>
        <ion-navbar>
            <ion-title>
                更多
            </ion-title>
        </ion-navbar>
    </ion-header>

    <ion-content class="bg-color">
        <ion-list class="top-list">
            <button ion-item [navPush]="userInfoPage">
                <ion-avatar item-left>
                    ![](./assets/icon/user.jpg)
                </ion-avatar>
                <h2>devilx</h2>
                <p>账号：18600001111</p>
            </button>
        </ion-list>

        <ion-list>
            <ion-item>
                控件1
            </ion-item>
            <button ion-item>
                控件2
            </button>
            <button ion-item>
                <ion-avatar item-left>
                    ![](./assets/icon/user.jpg)
                </ion-avatar>
                控件3
            </button>
        </ion-list>

        <ion-list>
            <button ion-item>
                版本号
                <span  item-end>V1.0</span>
            </button>
            <button ion-item>
                关于
            </button>
        </ion-list>

        <div style="text-align: center; margin-left: 30px; margin-right: 30px;margin-top: 30px;">
            <button ion-button block (click)="logOut()">
                退出登录
            </button>
        </div>
    </ion-content>
```

打开setting.scss，输入以下代码

```scss
page-setting {
  .toolbar-title-md{
    text-align: center;
  }

  .scroll-content{
    overflow: hidden;
  }

  .bg-color{
    background-color: #efeeee;
  }

  .top-list{
    margin-top: 15px;
  }
}

```

运行效果如图所示（我这里使用了 http://localhost:8100/ionic-lab，所以展示的是 iOS,android,window phone三种 的效果）：

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/5.gif?raw=true)

这一段我多展示了几种效果，代码自行理解加深以下印象。


#### 7.4制作退出登录功能
首先我们需要回到 login.ts，把跳转方式改一下，因为如果使用 push 的方法进行跳转，即使你隐藏了返回按钮，安卓手机也是可以使用返回键跳回上一个页面的。所以我们要使用另一种跳转方式

进入 login.ts，引入 ModalController，删除无用的引用，如下

```typescript
import { Component } from '@angular/core';
import { IonicPage, ModalController} from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      alert(userinfo);
      let modal = this.modalCtrl.create(TabsPage);
      modal.present();
    }
  }

}
```
然后到 Setting.ts 页面，改为以下代码
```
import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { LoginPage } from "../login/login";

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public modalCtrl: ModalController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  logOut() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

}
```

### 8.安卓硬件返回键处理
[原文](http://www.jianshu.com/p/02f190059aaa)

前几天测出了一个问题，就是在根目录点击安卓的硬件返回键，会直接导致程序退出。在网上找到了 小军617 写的这篇[ionic2实战-完美处理安卓硬件返回按钮。](http://www.jianshu.com/p/6aa5a8318092)


这篇文章解决了一部分问题，可以让我们在 Tabs 下点击返回按钮弹出一个 toast 提示“再按一次退出应用”，然后如果用户在2秒内再按一次就会真的退出。不过 **Demo 在登录页点击返回按钮没有任何反应，而且点击退出登录后，点击硬件返回按钮会回到主界面。**

所以我打算对这个方法进行一下优化，包括以下几点。

- 将方法从 app.component.ts 中抽出做成一个公共方法，便于其他页面使用
- 修复退出登录后，点击硬件返回按钮会回到主界面
- 在 tabs 页，如果不在首页标签，点击硬件返回按钮，先跳转到首页。之后再按两次退出

#### 8.1.在 src 目录下，新建文件夹 services,在services新建文件 backButton.service.ts

输入以下代码，我已经写了很全的注释，仔细看

```typescript
import { Injectable } from '@angular/core';
import { Platform, ToastController, App, NavController, Tabs } from 'ionic-angular';

@Injectable()
export class BackButtonService {

  //控制硬件返回按钮是否触发，默认false
  backButtonPressed: boolean = false;

  //构造函数 依赖注入
  constructor(public platform: Platform,
              public appCtrl: App,
              public toastCtrl: ToastController) { }

  //注册方法
  registerBackButtonAction(tabRef: Tabs): void {
    
    //registerBackButtonAction是系统自带的方法
    this.platform.registerBackButtonAction(() => {
      //获取NavController
      let activeNav: NavController = this.appCtrl.getActiveNav();
      //如果可以返回上一页，则执行pop
      if (activeNav.canGoBack()) {
        activeNav.pop();
      } else {
        if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
          //执行退出
          this.showExit();
        } else {
          //选择首页第一个的标签
          tabRef.select(0);
        }
      }
    });
  }

  //退出应用方法
  private showExit(): void {
    //如果为true，退出
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
        //第一次按，弹出Toast
        this.toastCtrl.create({
            message: '再按一次退出应用',
            duration: 2000,
            position: 'top'
        }).present();
      //标记为true
      this.backButtonPressed = true;
      //两秒后标记为false，如果退出的话，就不会执行了
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
  }
}
```

#### 8.2.修改 app.module.ts
导入 BackButtonService，并添加到 providers 里

```typescript
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { BackButtonService } from '../services/backButton.service';
import { SettingPage } from '../pages/setting/setting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackButtonService
  ]
})
export class AppModule {}

```

#### 8.3.修改 Tabs
Tabs.html

```
把<ion-tabs>修改为<ion-tabs #myTabs>
```
Tabs.ts

这是修改了的部分，可以看看都改动了哪些

```typescript
引入ViewChild、Platform、Tabs、BackButtonService 
@ViewChild('myTabs') tabRef: Tabs;

platform.ready().then(() => {
  this.backButtonService.registerBackButtonAction(this.tabRef);
});
```

完整版
```typescript
import { Component, ViewChild } from '@angular/core';
import { Platform, Tabs } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SettingPage } from "../setting/setting";
import { BackButtonService } from "../../services/backButton.service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];
  @ViewChild('myTabs') tabRef: Tabs;

  constructor(public backButtonService: BackButtonService,
              private platform: Platform) {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: 'Home',
        tabIcon: 'home'
      },
      {
        root: SettingPage,
        tabTitle: '设置',
        tabIcon: 'person'
      }
    ];

      platform.ready().then(() => {
          this.backButtonService.registerBackButtonAction(this.tabRef);
      });
  }
}
```

platform.ready().then 主要是为了保证能注册上，因为如果不是 ready 状态有可能会失败


#### 8.4.Login

Login.ts

这是修改了的部分，可以看看都改动了哪些
```
引入Platform、BackButtonService    

platform.ready().then(() => {
  this.backButtonService.registerBackButtonAction(null);
});
```
完整版

```typescript
import { Component } from '@angular/core';
import { IonicPage, ModalController} from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { Platform } from 'ionic-angular';
import { BackButtonService } from "../../services/backButton.service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public modalCtrl: ModalController,
              private backButtonService: BackButtonService,
              private platform: Platform) {
      platform.ready().then(() => {
          this.backButtonService.registerBackButtonAction(null);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      alert(userinfo);
      let modal = this.modalCtrl.create(TabsPage);
      modal.present();
    }
  }

}
```

这里的 registerBackButtonAction 传了一个 null 进去，回去看看 backButton.service.ts 的判断，我们就可以知道，这里是为了让他能执行双击退出操作


#### 8.5.使用安卓手机测试
```
//执行这两句
$ ionic cordova platform add android
$ ionic cordova build android
```

接下来就可以运行了，我这边是直接打开 Android Studio 装到手机运行的，亲测有效。试一试吧

[原作者写的源码](https://github.com/2015lym/ionic3Demo/tree/demo4)



### 9.基本的网络请求
[原文](http://www.jianshu.com/p/3ad54d7d1077)
这是最后一节，本节主要用最简单网络请求和基本的内置指令做一个演示。

- 对 Angular 的基本架构不熟悉的请点[Angular 4.0 架构详解](http://www.jianshu.com/p/3c06260e6015)
- 对 Angular 的内置指令不熟悉的请点[Angular 4.0 内置指令全攻略](http://www.jianshu.com/p/4cc3a04ca83a)


#### 9.1前言
通常我们希望在 HTTP 请求的时候，页面不会失去响应，所以我们的 HTTP 请求是异步的。
JavaScript 中，通常用 3 种方式处理异步代码。

1. 回调（callback）
2. 承诺（promise）
3. 可观察对象（observable）

promise 和 observable 主要三个主要不同：

- observable 可以中途取消，promise 发出就不行
- observable 可以持续发射很多值，而 promise 只能发射一个值就结束了
- observable 提供了更多的工具函数，最常用的是 filter 等

想更多了解 promise 的请看

[《JavaScript Promise迷你书》](http://liubin.org/promises-book/)

想更多了解 rxjs(observable) 的请看
[《rxjs中文教程》](https://www.gitbook.com/book/buctwbzs/rxjs/details)

`在 Angular 中，处理异步代码的最佳方式就是使用可观察对象，所以接下来会用到`


#### 9.2 app.module.ts
导入 Angular 的 HttpModule。

```
import { HttpModule } from '@angular/http';

//然后在 imports 中插入 HttpModule 即可
```


#### 9.3测试用接口
本来找了一些别的接口作为测试，发现不会显示数据，打开 Chrome 测试了一下发现有跨域问题。
```
XMLHttpRequest cannot load
```

所以这里给大家推荐个网站，我们就用他来进行测试。
http://jsonplaceholder.typicode.com/

拖到下面的 Resources 可以看到图片。从图中可以看出接口种类还是比较丰富的，我们选择带图片的 /photos 进行测试。

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/10.png?raw=true)

home.ts

```typescript
import { Http, Response } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // 接收数据用
  listData: Object;

  // 依赖注入
  constructor(public navCtrl: NavController, private http: Http) {

  }

  ionViewDidLoad() {
    // 网络请求
    this.http.request('http://jsonplaceholder.typicode.com/photos')
    .subscribe((res: Response) => {
      this.listData = res.json();
    });
  }
```

http.request 会返回一个 Observable 对象。我们可以使用 subscribe 订阅变化。

当 http.request 从服务器返回一个流时，它就会发出一个 Response 对象。我们用 json 方法提取出响应体解析成一个 Object，最后将它赋值给 this.listData。



home.html

```
<ion-header>
  <ion-navbar>
    <ion-title>首页</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <ion-list *ngFor="let item of listData">
    <ion-item>
      <ion-avatar item-left>
        <img [src]="item?.url">
      </ion-avatar>
      {{item?.title}}
    </ion-item>
  </ion-list>
</ion-content>
```

这里使用了一个 ngFor 遍历了 listData，生成了一个列表数据。还有一点要提一下，这个 item?.title 是 Angular 的一种语法，如果对象为空就不会取值，可以防止报错。

最后效果如图所示

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/ionic/11.png?raw=true)

再补上一个 Promise 的写法
```
import 'rxjs/add/operator/toPromise';

this.http.request('http://jsonplaceholder.typicode.com/photos')
  .toPromise()
  .then(res => { this.listData = res.json(); })
  .catch(err => { console.error(err) });

```


[防丢demo](https://github.com/Gabrielkaliboy/demo/tree/master/markdown/ionic)