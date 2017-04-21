1.下载及注册
---
下载地址：
- 官方http://www.sublimetext.com/3
- 360软件下载，或者百度软件下载里面都有，但是注意二者里面经常绑定 下载别的文件

注册：直接百度注册码就行，下面这个当时可用
```
—– BEGIN LICENSE —–
Michael Barnes
Single User License
EA7E-821385
8A353C41 872A0D5C DF9B2950 AFF6F667
C458EA6D 8EA3C286 98D1D650 131A97AB
AA919AEC EF20E143 B361B1E7 4C8B7F04
B085E65E 2F5F5360 8489D422 FB8FC1AA
93F6323C FD7F7544 3F39C318 D95E6480
FCCC7561 8A4A1741 68FA4223 ADCEDE07
200C25BE DBBC4855 C4CFB774 C5EC138C
0FEC1CEF D9DCECEC D3A5DAD1 01316C36
—— END LICENS
```

在sublime里面找到help选项，输入license就行

2.插件篇
----
其他人的收录：https://github.com/jikeytang/sublime-text

常用
***
1. ChineseLocalization 
- 汉化用的

***
#### 2.1安装Package Control
- 按Ctrl+`调出console
- 粘贴以下代码到底部命令行并回车：

``
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
``

- 重启Sublime Text 3。
- 如果在Perferences->package settings中看到package control这一项，则安装成功。
- 顺便贴下Sublime Text2 的代码

```
import urllib2,os; pf='Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( ))); open( os.path.join( ipp, pf), 'wb' ).write( urllib2.urlopen( 'http://sublime.wbond.net/' +pf.replace( ' ','%20' )).read()); print( 'Please restart Sublime Text to finish installation')
```

- 用Package Control安装插件的方法：
	- 按下Ctrl+Shift+P调出命令面板
	- 输入install 调出 Install Package 选项并回车，然后在列表中选中要安装的插件。

#### 2.2  Emmet（原名 Zen Coding）
- 一种快速编写html/css的方法
- 注意：安装Emmet的同时，也会自动安装其依赖PyV8 binary库，安装PyV8库会用较长时间，可以在Sublime左下角看到安装进程状态

#### 2.3 HTML5
- 支持hmtl5规范的插件包
- 注意：与Emmet插件配合使用，效果更好
- 使用方法：新建html文档>输入html5>敲击Tab键>自动补全html5规范文档

#### 2.4 jQuery
- 支持JQuery规范的插件包
#### 2.5 SideBar Enhancements
- 这个插件改进了侧边栏，增加了许多功能

#### 2.6 AutoFileName
- 文件路径自动提示

#### 2.7 Alignment
- 这个插件让你能对齐你的代码，包括 PHP、CSS 和 Javascript。代码看起来更简洁和可读，便于编辑　
- 插件下载：https://github.com/wbond/sublime_alignment
#### 2.8 Can I Use
- 如果您想检查浏览器是否支持你包括在你的代码中的CSS和HTML元素，那么这是你需要的插件。所有您需要做的就是选择有疑问的元素，插件将为你做其余的事情。
- 选中元素以后右击就可以

####2.9 SublimeLinter
- SublimeLinter是少数几个能在sublime text 3工作的代码检查插件，SublimeLinter支持JavaScript、CSS、HTML、Java、PHP、Python、Ruby等十多种开发语言，但前提是需要配置相应语言的环境，要检查JavaScript代码需要安装node.js，检查PHP代码需要安装PHP并配置环境等。SublimeLinter可以及时提示编写代码中存在的不规范和错误的写法，并培养我们良好的编码习惯和风格。
- 下载地址：https://github.com/SublimeLinter/SublimeLinter/tree/sublime-text-3

####2.10 FileDiffs
- FileDiffs插件可以让开发者比较两个不同文件的差异，比较的对象包括当前文件、另一文件、剪切板中的代码甚至未保存文件等。
- 插件下载：https://github.com/colinta/SublimeFileDiffs

#### 2.11 SublimeCodeIntel
- SublimeCodeIntel 作为一个代码提示和补全插件，支持 JavaScript、Mason、XBL、XUL、RHTML、SCSS、Python、HTML、Ruby、Python3、XML、Sass、XSLT、Django、HTML5、Perl、CSS、Twig、Less、Smarty、Node.js、Tcl、TemplateToolkit 和 PHP 等所有语言，是 Sublime Text 自带代码提示功能基础上一个更好的扩展，自带代码提示功能只可提示系统代码，而SublimeCodeIntel则可以提示用户自定义代码。SublimeCodeIntel支持跳转到变量、函数定义的功能，另外还有自动补全的功能，十分方便。
- 插件下载：https://github.com/SublimeCodeIntel/SublimeCodeIntel

#### 2.12 ColorPicker
- 编辑CSS样式的时候， ColorPicker调色盘不仅可以查看颜色值，更可以轻松调好颜色。ColorPicker同时还是一个双向选择颜色的功能，既可以在调色板中选好颜色将其使用至文档中，也可以迅速定位文档中的某一种颜色值到调色板中。
- 插件下载：https://github.com/weslly/ColorPicker

#### 2.13 HTML-CSS-JS Prettify
- 使用说明：快速格式化html css js
- 快捷键：ctrl+shift+h

#### 2.14 BracketHighlighter
- 使用说明：BracketHighlighter插件是用来匹配相对的符号，然后高亮显示，比如{ }、[ ]、" "等符号的对应高亮显
- https://github.com/facelessuser/BracketHighlighter

#### 2.15 LESS
- 使用说明：支持less语法高亮

#### 2.16 Less2Css
- 使用说明：ctrl+s保存less文件时，会将目录下所有less文件自动编译为同名的css文件
- 详情：http://www.cnblogs.com/jesse131/p/5258178.html

#### 2.17 SublimeLinter
- 使用说明：它可以帮你找出错误或编写不规范的代码 需要安装nodejs,jshint

#### 2.18 Terminal
- 使用说明：调出终端直接进入项目所在根目录，这个插件与gulp配合很好用
- 快捷键：ctrl+shift+t

#### 2.19 SublimeLinter-jshint
- 使用说明：对错误的javascript代码在状态栏进行提示

#### 2.20 View In Browser
- 使用说明：sublime以本地服务器方式打开网页 为了使用插件，你需要建立一个sublime-project文件，点击Project->Edit Project 粘贴以下代码(这是我的相关配置),并保存到user目录下

{
    "folders":
    [
        {
            "path": "D:\\wamp\\www"    
        }
    ],
    "settings":
    {
        "sublime-view-in-browser":
        {
            "baseUrl": "http://localhost"  
            "basePath": "D:\\wamp\\www",   //本地虚拟主机根目录
        }
    }
}

#### 2.21 MarkdownEditing
- 使用说明：它支持Markdown语法高亮显示。

#### 2.22 OmniMarkupPreviewer
- 使用说明：用来在浏览器中预览markdown 编辑的效果 快捷键：ctrl+alt+o

#### 2.23 JsMinifier
- 该插件基于Google Closure compiler，自动压缩js文件。
- https://github.com/cgutierrez/JsMinifier

#### 2.24 JS Format
- 一个JS代码格式化插件。

#### 2.25 Sublime Prefixr
- Prefixr，CSS3 私有前缀自动补全插件
- https://github.com/wbond/sublime_prefixr


3.快捷键
---
##### 选择类

Ctrl+D 选中光标所占的文本，继续操作则会选中下一个相同的文本。

Alt+F3 选中文本按下快捷键，即可一次性选择全部的相同文本进行同时编辑。

Ctrl+L 选中整行，继续操作则继续选择下一行，效果和 Shift+↓ 效果一样。

Ctrl+Shift+L 先选中多行，再按下快捷键，会在每行行尾插入光标，即可同时编辑这些行。

Ctrl+Shift+M 选择括号内的内容（继续选择父括号）。

Ctrl+M 光标移动至括号内结束或开始的位置。

Ctrl+Enter 在下一行插入新行。举个栗子：即使光标不在行尾，也能快速向下插入一行。

Ctrl+Shift+Enter 在上一行插入新行。

Ctrl+Shift+[ 选中代码，按下快捷键，折叠代码。

Ctrl+Shift+] 选中代码，按下快捷键，展开代码。

Ctrl+K+0 展开所有折叠代码。

Ctrl+← 向左单位性地移动光标，快速移动光标。

Ctrl+→ 向右单位性地移动光标，快速移动光标。

shift+↑ 向上选中多行。

shift+↓ 向下选中多行。

Shift+← 向左选中文本。

Shift+→ 向右选中文本。

Ctrl+Shift+← 向左单位性地选中文本。

Ctrl+Shift+→ 向右单位性地选中文本。

Ctrl+Shift+↑ 将光标所在行和上一行代码互换（将光标所在行插入到上一行之前）。

Ctrl+Shift+↓ 将光标所在行和下一行代码互换（将光标所在行插入到下一行之后）。

Ctrl+Alt+↑ 向上添加多行光标，可同时编辑多行。

Ctrl+Alt+↓ 向下添加多行光标，可同时编辑多行。

##### 编辑类

Ctrl+J 合并选中的多行代码为一行。举个栗子：将多行格式的CSS属性合并为一行。

Ctrl+Shift+D 复制光标所在整行，插入到下一行。

Tab 向右缩进。

Shift+Tab 向左缩进。

Ctrl+K+K 从光标处开始删除代码至行尾。

Ctrl+Shift+K 删除整行。

Ctrl+/ 注释单行。

Ctrl+Shift+/ 注释多行。

Ctrl+K+U 转换大写。

Ctrl+K+L 转换小写。

Ctrl+Z 撤销。

Ctrl+Y 恢复撤销。

Ctrl+U 软撤销，感觉和 Gtrl+Z 一样。

Ctrl+F2 设置书签

Ctrl+T 左右字母互换。

F6 单词检测拼写

##### 搜索类

Ctrl+F 打开底部搜索框，查找关键字。

Ctrl+shift+F 在文件夹内查找

Ctrl+P 打开搜索框。举个栗子：1、输入当前项目中的文件名，快速搜索文件，2、输入@和关键字，查找文件中函数名，3、输入：和数字，跳转到文件中该行代码，4、输入#和关键字，查找变量名。

Ctrl+G 打开搜索框，自动带：，输入数字跳转到该行代码。

Ctrl+R 打开搜索框，自动带@，输入关键字，查找文件中的函数名。举个栗子：在函数较多的页面快速查找某个函数。

Ctrl+： 打开搜索框，自动带#，输入关键字，查找文件中的变量名、属性名等。

Ctrl+Shift+P 打开命令框。

Esc 退出光标多行选择，退出搜索框，命令框等。

##### 显示类

Ctrl+Tab 按文件浏览过的顺序，切换当前窗口的标签页。

Ctrl+PageDown 向左切换当前窗口的标签页。

Ctrl+PageUp 向右切换当前窗口的标签页。

Alt+Shift+1 窗口分屏，恢复默认1屏（非小键盘的数字）

Alt+Shift+2 左右分屏-2列

Alt+Shift+3 左右分屏-3列

Alt+Shift+4 左右分屏-4列

Alt+Shift+5 等分4屏

Alt+Shift+8 垂直分屏-2屏

Alt+Shift+9 垂直分屏-3屏

Ctrl+K+B 开启/关闭侧边栏。

F11：全屏模式

Shift+F11 免打扰模式