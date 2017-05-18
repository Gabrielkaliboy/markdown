使用GitHub和hexo搭建网站
---
1. 官网 https://hexo.io/zh-cn/
2. 跳过git和node安装，我们说一下步骤
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

### 更换主题
---
1.接着上面继续，清除缓存文件 (db.json) 和已生成的静态文件 (public)。输入hexo clean
```
$ hexo clean
INFO  Deleted database.
``` 
2. 以yilia主题为例
```
$ git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia
Cloning into 'themes/yilia'...
remote: Counting objects: 1891, done.
remote: Total 1891 (delta 0), reused 0 (delta 0), pack-reused 1890
Receiving objects: 100% (1891/1891), 10.14 MiB | 56.00 KiB/s, done.
Resolving deltas: 100% (1009/1009), done.
```
3. 启用主题
- 修改Hexo目录下的_config.yml配置文件中的theme属性，将其设置为yilia。
-启动服务器
```
hexo -s
```