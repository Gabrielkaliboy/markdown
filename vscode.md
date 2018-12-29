## 插件
官网：https://code.visualstudio.com/
插件：https://code.visualstudio.com/docs
     https://marketplace.visualstudio.com/vscode

#### 汉化
在插件里面搜索Chinese（Simplied） Lang，安装即可。

## 1.python篇

#### 1.1Python
![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/vscode/1.png?raw=true)
可以用于规范、调试代码。安装完了以后VScode就可以编辑python代码了，编辑完代码按F5即可运行。初次运行会让你选环境，选择python即可。

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/vscode/1.gif?raw=true)



## 2.前端开发篇

#### 2.1 Auto Close Tag
用于html标签自动闭合

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/vscode/2.gif?raw=true)


#### 2.2 Auto Rename Tag
修改标签的时候，结尾处也跟随一起修改了

![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/vscode/3.gif?raw=true)

#### 2.3 ESLint
用来规范javascript代码的

#### 2.4 Sublime Text Keymap
让vs code 具有和sublime一样的快捷键

#### 2.5 TSLint
用来规范typescript的代码风格的

#### 2.6 View In Browser
用来在浏览器里面打开html文件。
使用：F1或者 Ctrl + Shift + P

#### 2.7 Path Intellisense
html引入文件的时候，文件路径提示。


#### 同上 Path Autocomplete
体验不好，他会把文件扩展名漏掉
#### 2.8 vscode-icons
给不同的文件类型加上不同的图标


#### 2.9 IntelliSense for CSS class names
在HTML写class类名的时候，会自动提示已有的css样式类名称

#### 2.10 Color Info
css样式中，如果有颜色代码，他会显示他的颜色

#### 2.11 fileheader

顶部注释模板，可定义作者、时间等信息，并会自动更新最后修改时间

#### 2.12 live server
能够让vscode拥有自己的本地web服务器。

#### 2.13 debug for chrome
让 vscode 映射 chrome 的 debug功能，静态页面都可以用 vscode 来打断点调试,配置稍微复杂一些


####  2.14 Project Manager

在多个项目之前快速切换的工具

#### 2.15 beautify
格式化代码的工具

#### 2.16 filesize
在底部状态栏显示当前文件大小，点击后还可以看到详细创建、修改时间

#### 2.17 Bracket Pair Colorizer
让括号拥有独立的颜色，易于区分。可以配合任意主题使用。


#### 2.18 HTML CSS Support 
让HTML标签上写class智能提示当前项目所支持的样式

#### 2.19 HTML Snippets
超级实用且初级的H5代码片段以及提示

#### 2.20 JQuery Code Snippets
jquery提示工具

#### 2.21 VS Code JavaScript (ES6) snippets
ES6提示工具

JavaScript Snippet Pack : ES5及以下的代码片段，实用
#### 2.22 Document This
为JavaScript和TypeScript提供JSDoc comments


## 3.vue
#### 3.1 vetur
语法高亮、智能感知、Emmet等

### 3.2 VueHelper
snippet代码片段



## 4.php
#### 4.1 PHP Debug
用来调试PHP代码的。


配置：
参考：http://blog.csdn.net/x356982611/article/details/52664334

简介

php是动态语言没有调试器的话排错起来很是麻烦。vscode可以说是程序员的福音，启动速度快，插件越来越多，跨平台。现在说一下vscode上调试php文件

所需文件

xampp 集成服务器
vscode
Xdebug
php-debug 插件

配置过程

1: 在vscode中按 F1, 输入ext install php-debug 安装调试插件 
2：去 https://xdebug.org/download.php下载php对应版本的插件，php版本可以在xampp中的readme看到，下载这个PHP 5.6 VC11 TS (32 bit) 把dll文件拷贝到php目录
![](https://github.com/Gabrielkaliboy/images/blob/master/markdown/vscode/2.png?raw=true)


3：打开php目录下的php.ini ，添加几行配置，xdebug的路径按实际情况配置，配置完成后重启apache服务器
```
zend_extension=C:\xampp\php\ext\php_xdebug-2.4.1-5.6-vc11.dll
[XDebug]
xdebug.remote_enable = 1
xdebug.remote_autostart = 1
```
4：第一次安装vs会提示这个，需要配置下php.exe的路径(xampp下面的php.exe)，在用户设置里添加以下项(改成你自己的PHP.exe)
```
"php.validate.executablePath": "C:\\xampp\\php\\php.exe"
```
如果以后想改的话，可以在文件---》首选项里面进行更改，例如我的是
```
"php.validate.executablePath": "D:\\xampp\\php\\php.exe",
```
5：在vscode中的php文件打一断点，点Listen for XDebug 项目的运行，配置不用更改，默认就可以 (debug里面)
## 其他工具篇

#### Setting Sync
同步你得设置和插件

####  Auto-Open Markdown Preview
markdown文档预览

#### Markdown PDF
将markdown文档转换成pdf的利器

####  OneDark Pro
一个用来设置主题的插件，可以让代码具有和atom一样的显示风格。
使用的时候，先按Ctrl+k,再按Ctrl+t

####  vscode-icons
可以个不同后缀名称的文件加上不同图标

如果安装以后不生效，就在文件---首选项里面进行设置
#### Enki Theme (Material Design Inspired) 
当前用的代码高亮，个人感觉很赞  （用上面那个）
#### GitLens(推荐)
丰富的git日志插件

#### Git History
可以查看Git log, file, 和line 历史记录。

#### Output Colorizer 
可以终端日志输出着色，实用
