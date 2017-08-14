使用GitHub和hexo搭建网站
---
参考链接：https://linghucong.js.org/2016/04/15/2016-04-15-hexo-github-pages-blog/
hexo中文文档：https://hexo.io/zh-cn/docs/tag-plugins.html
yelee主题说明:http://moxfive.coding.me/yelee/2.Basic-Usage/tag-cloud-page.html
yelee主题地址:https://github.com/MOxFIVE/hexo-theme-yelee
# 安装hexo
---
### 1. 官网 https://hexo.io/zh-cn/
### 2. 跳过git和node安装，我们说一下步骤
- 任意磁盘新建一个文件夹，比如我们叫hexo
- 进入blog文件夹，右击 Git Bash Here
- 安装Hexo
```
npm install hexo-cli -g
```
查看一下是否安装成功
```
hexo -v
```
- 初始化博客文件
```
hexo init
```
这一步会将我们所需要的东西（依赖），全部下载下来。
```
$ hexo init
INFO  Cloning hexo-starter to E:\hexo
Cloning into 'E:\hexo'...
remote: Counting objects: 53, done.
remote: Total 53 (delta 0), reused 0 (delta 0), pack-reused 53
Unpacking objects: 100% (53/53), done.
Submodule 'themes/landscape' (https://github.com/hexojs/hexo-theme-landscape.git                                                                                                                ) registered for path 'themes/landscape'
Cloning into 'E:/hexo/themes/landscape'...
Submodule path 'themes/landscape': checked out 'decdc2d9956776cbe95420ae94bac87e                                                                                                                22468d38'

```
这里有坑，中途会报错
```
npm WARN deprecated swig@1.4.2: This package is no longer maintained
```
因为报错以后，会有短暂的停顿，我以为他安装不下去了呢，所以给强制关闭了几次，后来发现怎么都弄不出来，再次安装的时候，我等了一会，发现他继续安装了很多东西

- 启用本地服务器
```
$ hexo s
INFO  Start processing
INFO  Hexo is running at http://localhost:4000/. Press Ctrl+C to stop.
```
这时候我们将http://localhost:4000/复制到我们的浏览器里面，就可以看到我们新建的博客了

- 再次查看一下我们的版本
```
$ hexo -v
hexo: 3.3.6
hexo-cli: 1.0.2
os: Windows_NT 10.0.14393 win32 x64
http_parser: 2.7.0
node: 7.6.0
v8: 5.5.372.40
uv: 1.11.0
zlib: 1.2.11
ares: 1.10.1-DEV
modules: 51
openssl: 1.0.2k
icu: 58.2
unicode: 9.0
cldr: 30.0.3
tz: 2016j
```

# 更换主题
---
### 1.接着上面继续，清除缓存文件 (db.json) 和已生成的静态文件 (public)。输入hexo clean
```
$ hexo clean
INFO  Deleted database.
``` 
### 2. 以yilia主题为例，注意后面的themes/yilla路径
```
$ git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia
Cloning into 'themes/yilia'...
remote: Counting objects: 1891, done.
remote: Total 1891 (delta 0), reused 0 (delta 0), pack-reused 1890
Receiving objects: 100% (1891/1891), 10.14 MiB | 56.00 KiB/s, done.
Resolving deltas: 100% (1009/1009), done.
```
### 3. 启用主题
- 修改Hexo目录下的_config.yml配置文件中的theme属性，将其设置为yilia。
-启动服务器
```
hexo s
```

# 将hexo生成的页面部署到GitHub
---
让我们把在本地web环境下预览到的博客部署到github上，然后就可以直接通过http://GabrielKaliboy.github.io/访问了。

### 1. 部署到github的原理
- Github上创建的那个特别的仓库（GabrielKaliboy.github.io）一个最大的特点就是其master中的html静态文件，可以通过链接http://GabrielKaliboy.github.io来直接访问。

- Hexo generate 会生成一个静态网站（第一次会生成一个public目录），这个静态文件可以直接访问。

- 需要将hexo生成的静态网站，提交(git commit)到github上

### 2. 部署的具体过程
- 首先需要安装一个插件:npm install hexo-deployer-git --save
```
$ npm install hexo-deployer-git --save
hexo-site@0.0.0 E:\hexo
`-- hexo-deployer-git@0.3.0
  `-- moment@2.18.1

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.1: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
```

- 部署到GitHub，需要修改_config.xml配置文件，注意这里的_config.xml是hexo的。配置文件如下：
```xml
deploy:
  type: git
  repo: git@github.com:GabrielKaliboy/GabrielKaliboy.github.io.git
  branch: master
```
- 修改完了以后，在git bash里面执行
```
hexo d
```
即可以完成部署

### 3. 到步骤为止，还没有完成，我们需要将hexo生成的静态文件上传到GitHub。

- 将我们之前创建的GabrielKaliboy.github.io仓库克隆到本地(还是在hexo安装目录下)，新建一个目录叫做.deploy用于存放克隆的代码，这个命令可以分步骤完成，也可以一次性完成
```
$ git clone https://github.com/GabrielKaliboy/GabrielKaliboy.github.io.git .deploy/GabrielKaliboy.github.io
```

- 创建一个deploy脚本文件名字为updata.sh，sh是他的扩展名
```
hexo generate
cp -R public/* .deploy/GabrielKaliboy.github.io
cd .deploy/GabrielKaliboy.github.io
git add .
git commit -m “update”
git push origin master
```
解释一下这段脚本：
hexo generate生成public文件夹下的新内容，然后将其拷贝至GabrielKaliboy.github.io的git目录下，然后使用git commit命令提交代码到GabrielKaliboy.github.io这个仓库的master branch上。
需要部署的时候，执行这段脚本就可以了（比如可以将其保存为deploy.sh）。执行过程中可能需要让你输入Github账户的用户名及密码，按照提示操作即可。

# hexo主题目录文件介绍-以yilia为例
---
### 1. 文档的目录结构
```
|-- _config.yml
|-- languages/
|-- layout/
|-- LICENSE
|-- README.md
|-- source/
```
### 2. _config.yml
主题配置文件

### 3. languages
语言目录，用于保存语言文件

### 4. layout
布局目录，目录结构
```
|-- _partial/
|-- _widget/
|-- archive.ejs *
|-- category.ejs *
|-- index.ejs *
|-- layout.ejs *
|-- page.ejs *
|-- post.ejs *
|-- tag.ejs *
```
以上打`*`的文件表示，每个主题至少需要这些文件。所有的主题都是用layout.ejs作为默认的布局文件，你也可以自定义布局文件。
- _widget/： 小工具目录，在light主题中对右边栏的控制。
- _partial/： 组件目录，给博客添加统计、评论等功能
- hexo支持很多模板引擎，诸如[EJS](https://github.com/tj/ejs)，Swig，Haml，Jade等，文件以什么后缀，即表示用的是哪个模板引擎，light主题用的是EJS模板。每种模板引擎的语法与使用

### 5. source
主题资源目录，主题用到的CSS、Javascript等文件需要放在这个目录中，会被编译到hexo的public目录中。



# 优化主题
### 1. _config.yml 主题配置配置文件，介绍主要参数,这里的值不能随意改，看好了再改
```
# Header

menu:
  主页: /
  随笔: /tags/随笔/

# SubNav
subnav:
  github: "#"
  weibo: "#"
  rss: "#"
  zhihu: "#"
  #qq: "#"
  #weixin: "#"
  #jianshu: "#"
  #douban: "#"
  #mail: "mailto:litten225@qq.com"
  #facebook: "#"
  #google: "#"
  #twitter: "#"
  #linkedin: "#"

rss: /atom.xml

# 是否需要修改 root 路径
# 如果您的网站存放在子目录中，例如 http://yoursite.com/blog，
# 请将您的 url 设为 http://yoursite.com/blog 并把 root 设为 /blog/。
root: 

# Content

# 文章太长，截断按钮文字
excerpt_link: more
# 文章卡片右下角常驻链接，不需要请设置为false
show_all_link: '展开全文'
# 数学公式
mathjax: false
# 是否在新窗口打开链接
open_in_new: false

# 打赏
# 请在需要打赏的文章的md文件头部，设置属性reward: true

# 打赏基础设定：0-关闭打赏； 1-文章对应的md文件里有reward:true属性，才有打赏； 2-所有文章均有打赏
reward_type: 2
# 打赏wording
reward_wording: '谢谢你请我吃糖果'
# 支付宝二维码图片地址，跟你设置头像的方式一样。比如：/assets/img/alipay.jpg
alipay: 
# 微信二维码图片地址
weixin: 

# Miscellaneous
baidu_analytics: ''
google_analytics: ''
favicon: /favicon.png

#你的头像url
avatar:

#是否开启分享
share_jia: true

#是否开启多说评论，填写你在多说申请的项目名称 duoshuo: duoshuo-key
#若使用disqus，请在博客config文件中填写disqus_shortname，并关闭多说评论
duoshuo: false

# 样式定制 - 一般不需要修改，除非有很强的定制欲望…
style:
  # 头像上面的背景颜色
  header: '#4d4d4d'
  # 右滑板块背景
  slider: 'linear-gradient(200deg,#a0cfe4,#e8c37e)'

# slider的设置
slider:
  # 是否默认展开tags板块
  showTags: false

# 智能菜单
# 如不需要，将该对应项置为false
# 比如
#smart_menu:
#  friends: false
smart_menu:
  innerArchive: '所有文章'
  friends: '友链'
  aboutme: '关于我'

friends:
  友情链接1: http://localhost:4000/
  友情链接2: http://localhost:4000/
  友情链接3: http://localhost:4000/
  友情链接4: http://localhost:4000/
  友情链接5: http://localhost:4000/
  友情链接6: http://localhost:4000/

aboutme: 很惭愧<br><br>只做了一点微小的工作<br>谢谢大家
```




# hexo目录结构介绍
### 1. _config.yml
全局配置文件，网站的很多信息都在这里配置，诸如网站名称，副标题，描述，作者，语言，主题，部署等等参数。详细参数以及主要用到的介绍如下：
```
# Hexo Configuration
## Docs: http://zespia.tw/hexo/docs/configuration.html
## Source: https://github.com/tommy351/hexo/

# Site    #站点信息配置
title: 浪花一朵朵        #网站标题
subtitle: 技术是海，深不见底；生活是洋，广不着边；而我如浪花，清澈透明并且舞动双手，仰望天空。        #网站副标题
description: 浪花一朵朵        #网站描述，网站上不会显示出来，但搜索引擎会用到改字段
author: 员员        #作者
email: syxiaqj@gmail.com    #联系邮箱
language: zh-CN        #语言，简体中文当然用zh-CN

# URL    #部署到公网，信息配置，后面介绍如何将网站部署到git上时介绍此信息
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://syxiaqj.github.io    
root: /
permalink: :year/:month/:day/:title/
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code

# Directory
source_dir: source
public_dir: public

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
auto_spacing: false # Add spaces between asian characters and western characters
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
max_open_file: 100
multi_thread: true
filename_case: 0
render_drafts: false
post_asset_folder: false
highlight:
  enable: true
  line_number: true
  tab_replace:

# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Archives
## 2: Enable pagination        #启用分页
## 1: Disable pagination    #不启用分页
## 0: Fully Disable            #完全不可见
archive: 1
category: 1
tag: 1

# Server
## Hexo uses Connect as a server
## You can customize the logger format as defined in
## http://www.senchalabs.org/connect/logger.html
port: 4000
logger: false
logger_format:

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: MMM D YYYY
time_format: H:mm:ss

# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page

# Disqus
disqus_shortname:
# Extensions
## Plugins: https://github.com/tommy351/hexo/wiki/Plugins
## Themes: https://github.com/tommy351/hexo/wiki/Themes
theme: light        #使用的主题名称
exclude_generator:
plugins:            #插件列表
- hexo-generator-feed
- hexo-generator-sitemap

# Markdown
## https://github.com/chjj/marked
markdown:
  gfm: true
  pedantic: false
  sanitize: false
  tables: true
  breaks: true
  smartLists: true
  smartypants: true

# Deployment        #部署到公网配置，上面文中有介绍
## Docs: http://zespia.tw/hexo/docs/deployment.html
deploy:
  type: git
  repo: git@github.com:GabrielKaliboy/GabrielKaliboy.github.io.git
  branch: master
```
我们文件中的第一部分 Site (站点信息)，很容易改，还有主题，在 Extensions 中的 theme: 参数，这个参数的值就是hexo主目录中 themes （主题目录）下子目录文件夹的名称（主题）。

### 2. package.json
hexo这个框架所有的依赖项目，在初始化一个文件夹的时候，输入命令hexo init，会将我们的依赖全部下载下来，和npm install的时候一样。依赖目录为，node_modules

### 3. scaffolds
scaffolds是“脚手架、骨架”的意思，当你新建一篇文章（hexo new 'title'）的时候，hexo是根据这个目录下的文件进行构建的。基本不用关心。

### 4. scripts
脚本目录，此目录下的JavaScript文件会被自动执行。

### 5. source
这个目录很重要，新建的文章都是在保存在这个目录下的，有两个子目录： _drafts ， _posts 。需要新建的博文都放在 _posts 目录下。

### - _posts:目录下是一个个 markdown 文件。你应该可以看到一个 hello-world.md 的文件，文章就在这个文件中编辑。

- _drafts:目录下的md文件，会被编译成html文件，放到 public （初始的时候应该没有，因为你还没有编译过）文件夹下。

### 6. themes
网站主题目录，hexo有非常好的主题拓展，支持的主题也很丰富。该目录下，每一个子目录就是一个主题。我的目录结构如下：
- landscape：这个是hexo的默认主题

- yilia:这个是我刚才新换的。

- 可以下载别的主题放在这个目录下。链接：https://github.com/hexojs/hexo/wiki/Themes

- 主题目录下我们可以进行很多自定义的操作，诸如，给网站添加微博秀、添加评论组件、添加分享组件、添加统计等等，让自己的博客网站更丰富、有趣、实用。


# hexo绑定别的域名
https://www.baidu.com/baidu?tn=64075107_1_dg&ie=utf-8&wd=hexo%20%E5%9F%9F%E5%90%8D%E7%BB%91%E5%AE%9A
### 1. 初衷
本来不想在绑定一个别的域名的，结果想给博客开启一个留言评论系统，看了一下yilia作者的介绍。附上链接：https://github.com/litten/hexo-theme-yilia/wiki
看了一下，网易云跟帖最符合我的要求。但是我在申请网易云跟帖的时候，他只认根域名。也就是我的GabrielKaliboy.github.io显示已被注册。所以我只好弄个别的域名

### 2.绑定别的域名，在阿里云申请了一个www.zhuhongwei.online
- 阿里云解析
点击添加解析，记录类型选A或CNAME，A记录的记录值就是ip地址，github(官方文档)提供了两个IP地址，192.30.252.153和192.30.252.154，这两个IP地址为github的服务器地址，两个都要填上，解析记录设置两个www和@，线路就默认就行了，CNAME记录值填你的github博客网址。如我的是也就是我的GabrielKaliboy.github.io。

- hexo新建一个CNAME
这些全部设置完成后，此时你并不能要申请的域名访问你的博客。接着你需要做的是在hexo根目录的source文件夹里创建CNAME文件，不带任何后缀，里面添加你的域名信息，如：zhuhongwei.com。实践证明如果此时你填写的是www.zhuhongwei.online那么以后你只能用www.zhuhongwei.online访问，而如果你填写的是zhuhongwei.online。那么用www.zhuhongwei.online和zhuhongwei.online访问都是可以的。重新清理hexo,并发布即可用新的域名访问。

- updata.sh重新生成一下，并上传到GitHub

# 一些常用的Hexo命令
- ### hexo
npm install hexo -g #安装  
npm update hexo -g #升级  
hexo init #初始化

- ### 简写
hexo n "我的博客" == hexo new "我的博客" #新建文章
hexo p == hexo publish
hexo g == hexo generate#生成
hexo s == hexo server #启动服务预览
hexo d == hexo deploy#部署

- ### 服务器

hexo server #Hexo 会监视文件变动并自动更新，您无须重启服务器。
hexo server -s #静态模式
hexo server -p 5000 #更改端口
hexo server -i 192.168.1.1 #自定义 IP

hexo clean #清除缓存 网页正常情况下可以忽略此条命令
hexo g #生成静态网页
hexo d #开始部署

- ### 监视文件变动

hexo generate 使用 Hexo 生成静态文件快速而且简单
hexo generate --watch 监视文件变动

- ### 完成后部署
两个命令的作用是相同的
hexo generate --deploy
hexo deploy --generate

hexo deploy -g
hexo server -g

- ### 草稿

hexo publish [layout] <title>

- ### 模版

hexo new "postName" #新建文章
hexo new page "pageName" #新建页面
hexo generate #生成静态页面至public目录
hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
hexo deploy #将.deploy目录部署到GitHub

hexo new [layout] <title>
hexo new photo "My Gallery"
hexo new "Hello World" --lang tw
```
title: 使用Hexo搭建个人博客
layout: post
date: 2014-03-03 19:07:43
comments: true
categories: Blog
tags: [Hexo]
keywords: Hexo, Blog
description: 生命在于折腾，又把博客折腾到Hexo了。给Hexo点赞。
```
# 在yilia基础上改进http://moxfive.coding.me/yelee/
1. 如何添加新的导航栏

打开主题的配置文件，_config.yml,如图所示,我现在想要新增一个页面，比如前端导航
```
menu:
## 如何添加新的导航栏
  主页: /
  所有文章: /archives/
  #随笔: /tags/随笔
  标签云: /tags/
  关于我: /about/
  前端导航:/webLinks/
```
然后在hexo里面执行
```
$ hexo new page "webLinks"
INFO  Created: E:\hexo\source\webLinks\index.md
```
这时候在hexo的source文件目录里面就会生成一个名字叫做webLinks的文件夹，里面对应的index.md 就是我们点击前端导航以后显示的页面。

# 写作
使用hexo n那个命令新建文章就好了，你也可以在博客目录D:\hexo\source\_posts中新建一个后缀为.md的文件，使用文本编辑器在里面采用Markdown来书写，效果一样。文本编辑器的话，可以选用Notepad++（推荐新手使用），对Vim熟悉的话也可以使用Vim。这些在这里简单带过，来说点别的东西。
### 1. 新建一篇文章
- 命令行
在hexo的文件目录直接输入下面这句话
```
$ hexo new "测试"
INFO  Created: E:\hexo\source\_posts\测试.md
```
他提示我们在E:\hexo\source\_posts\目录下面已经给我们新建了一个名字为测试的markdown文件，我们可以直接找到这个文件直接书写就行，如图

![目录详情](images/hexo-github/1.png)

- 直接在这个目录下面新建也可以
```
E:\hexo\source\_posts
```
### 2.为每篇文章添加分类和标签
使用标签云功能，首先我们应该把标签云页面新建出来，输入如下命令，新建标签云页面（每个主题可能一样，也可能不一样，自己查一下，这里以Yelee为例）。
```
hexo new page tags
```

使用命令`hexo new 文章的名字`以后，会自动为我们新建一个文章名字.md的markdown文档，这个文档里面会还有一些初始化的内容，我们可以自己手动添加一些再
```
---
title: 小程序
date: 2017-06-07 20:52:40
categories: 前端
tags: [小程序,javascript]
---
<Excerpt in index | 首页摘要> 
小程序
<!-- more -->
<The rest of contents | 余下全文>
```
解释说明一下上面的内容
- categories:文章的分类
- tags:标签
- <Exceprpt in index | 首页摘要>.......<!-- more -->:他们中间省略的是摘要内容，里面可以写md格式的文档。
- <The rest of contents | 余下全文>：是一个缩略标签

### 3.文章中插入图片(这是个坑！)
参考：http://www.tuicool.com/articles/umEBVfI
首先确认 hexo的_config.yml 中有 post_asset_folder:true 。
文章插入图片需要用到Hexo的一个插件，首先cd到hexo的根目录
```
npm install https://github.com/CodeFalling/hexo-asset-image --save
```
然后把图片放入对应文章的配套文件夹下，比如1.png。切记，文章的名字必须和保存图片的文件夹的名字一致，否则还是出不来。如图所示的目录结构：
![](images/hexo-github/hexoInsertImage.png)
此时我在xiaochengxu.md文件里面嵌入xiaochengxu文件夹里面的1.jpg,我需要这么写：
```
![](xiaochengxu/1.jpg)
```
这样他的路径才会自动转成正确的！！！！

### 4.yelee主题修改评论工具为网易云跟帖


yilia相关
---

### 1.说明
地址：https://github.com/litten/hexo-theme-yilia


### 2.添加头像
在主题yilia目录下找到yml配置文件
```
#你的头像url
#这里使用的是相对路径，是themes\yilia\source\img
avatar: "/img/avatar.png"
```

### 3.添加域名
除了将CNAME文件放在hexo下面，还需要在GabrielKaliboy.github.io的setting里面Custom domain（自定义域名）那里设置一下。