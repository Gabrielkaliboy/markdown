---
title: 文件上传总结
date: 2017-09-21 08:50:40
categories: 前端
tags: [前端,插件]
---
<Excerpt in index | 首页摘要> 
title: 文件上传总结

<!-- more -->
<The rest of contents | 余下全文>

-----
### 1.stream
官网：http://www.twinkling.cn/

码云地址：https://gitee.com/jiangdx/stream

bootstrap:http://p.twinkling.cn/bootstrap.html

特性：

1. 源码完全开放，目前有Java、PHP、Perl三种后台语言实现

2. 支持HTML5、Flash两种方式（跨域）上传

3. 多文件一起上传

4. HTML5支持断点续传，拖拽等新特性

5. 兼容性好IE7+, FF3.6+, Chrome*，Safari4+，遨游等主流浏览器

6. 进度条、速度、剩余时间等附属信息

7. `选择文件的按钮`可以自定义

8. 简单的参数配置实现 灵活多变的功能

9. 支持文件夹上传（Chrome21+, Opera15+）

10. 支持自定义UI（V1.4+）


### 2.Plupload（推荐，上个项目就是用的这个，大文件上传）
官网：http://www.plupload.com/

GitHub：https://github.com/moxiecode/plupload

特性：是一个Web浏览器上的界面友好的文件上传模块，可显示上传进度、图像自动缩略和上传分块。可同时上传多个文件。


### 3.SWFUpload (不推荐使用)
官网都没找到。

文档：http://leeon.me/upload/other/swfupload.html

主要特点：

* 可以同时上传多个文件；
* 类似AJAX的无刷新上传；
* 可以显示上传进度；
* 良好的浏览器兼容性；
* 兼容其他JavaScript库 (例如：jQuery, Prototype等)；
* 支持Flash 8和Flash 9；


### 4.Dropzone.js
官网：http://www.dropzonejs.com
GitHub：https://github.com/enyo/dropzone/

用于bootstrap：http://www.dropzonejs.com/bootstrap.html

特性：
Dropzone 是一个易用的文件拖放上传库，支持图像预览和显示上传进度。


### 5.Jquery文件上传插件Uploadify
官网：http://www.uploadify.com/

特性：
支持单文件或多文件上传，可控制并发上传的文件数

在服务器端支持各种语言与之配合使用，诸如PHP,.NET,Java……

通过参数可配置上传文件类型及大小限制

通过参数可配置是否选择文件后自动上传

易于扩展，可控制每一步骤的回调函数（onSelect, onCancel……）

通过接口参数和CSS控制外观

### 6.jQuery File Upload（推荐）
GitHub：https://github.com/blueimp/jQuery-File-Upload/
官网：https://blueimp.github.io/jQuery-File-Upload/

特性：
允许选择多个文件一次，并将其上传同时进行。

拖放支持：

可以从您的桌面或文件管理器中拖放他们在您的浏览器窗口中上传文件。

上传进度条：

显示一个进度条显示为单独的文件和所有上传组合上传进度。

可取消上传：

单个文件上传可以取消来停止上传进度。

可恢复上传：

中止的上传可以与浏览器支持的Blob API进行恢复。

分块上传：

大文件可以上传较小的块与浏览器支持的Blob的API 。

客户端图像大小调整：

图像可以自动调整大小的客户端与浏览器支持所需的JS API的。

预览图像，音频和视频：

图像，音频和视频文件的预览可以与浏览器支持所需的API上传前显示。

没有浏览器插件（例如使用Adobe的Flash ）要求：

该实现是基于开放的标准，如HTML5和JavaScript的，不需要额外的浏览器插件。

优美的后备旧版的浏览器：

如果支持的话，使用内置页框作为后备旧版浏览器通过的XMLHttpRequest上传文件。

HTML文件上传表单回退：

通过使用标准的HTML文件上传表单的控件元素允许渐进增强。

跨站点的文件上传：

支持上传文件到不同的域与跨站点的XMLHttpRequest或iframe重定向。

多个插件实例：

允许使用在同一个网页上的多个插件实例。

可定制和可扩展的：

提供了一个API来设置各个选项，并定义回调方法的各种载事件。

多重和文件内容流上传：

文件可以被上传为标准的“多部分/窗体的数据”或文件内容流（ HTTP PUT文件上传） 。

兼容任何服务器端应用平台：

适用于任何服务器端平台（PHP, Python, Ruby on Rails, Java, Node.js, Go etc.） ，支持标准的HTML表单文件上传。


### 7.FineUploader（推荐）
官网：https://fineuploader.com/
GitHub：https://github.com/FineUploader/fine-uploader

特性：
A：支持文件上传进度显示.

B：文件拖拽浏览器上传方式

C：Ajax页面无刷新.

D：多文件上传.

F：跨浏览器.

E：跨后台服务器端语言.


### 8.FileAPI
FileAPI是一套与文件的JavaScript工具。
官网：https://mailru.github.io/FileAPI/
GitHub：https://github.com/mailru/FileAPI

### 9.Resumable.js
这是一个JavaScript库提供多个同时进行的，稳定的和可恢复的上传文件通过HTML5的API。
官网：http://www.resumablejs.com/
GitHub：https://github.com/23/resumable.js


### 10.Picture Cut（推荐）
图片切割是一个jQuery插件，用来处理图像在一个非常友好的和简单的方法，一种基于Bootstrap或jQuery UI界面美观，有如ajax上传大的特点，从资源管理器拖动图像，图像和其他的作物。

GitHub：https://github.com/TuyoshiVinicius/jQuery-Picture-Cut
官网：http://picturecut.tuyoshi.com.br/

### 11.FileDrop.js
ileDrop是自包含的跨浏览器的HTML5，legacy，Ajax，JavaScript文件的拖放上传。依赖自由。jQuery插件。

官网：http://filedropjs.org/
GitHub：https://github.com/ProgerXP/FileDrop