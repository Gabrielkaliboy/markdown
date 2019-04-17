# Git

## 将vue-cli3生成的项目提交到GitHub

### 初始化

由于我使用的是脚手架，项目应该是已经初始化了，使用下面这个命令他告诉我项目已经被初始化

Reinitialized existing Git repository in G:/demo/vue-test/.git/
已在g:/demo/vue test/.git中重新初始化现有Git存储库/

```shell
git init
Reinitialized existing Git repository in G:/demo/vue-test/.git/
```

### 暂存

```shell
git add -A
```

### 提交

```shell
git commit -m "测试"
```

### 打开你的GitHub新建一个仓库

### 关联github仓库

复制github sell仓库的仓库地址，这里选择的是http地址，这样比较简单，没有选择ssh，如有需要，可自行百度设置ssh

获取到github仓库地址后，将本地仓库与github仓库关联

```shell
git remote add origin https://github.com/WeAVictor/vue-test.git
```

接下来弹出对话框输入自己github帐号密码；

### 上传本地项目

```shell
git push -u origin master
```

稍等几分钟,
这样本地代码已经推送到github仓库了，去githubt仓库刷新即可。

### 如果想修改本地与远程仓库的连接(git remote相关)

#### 直接clone一个仓库

```shell
$: git clone git@search.ued.taobao.net:projects/search.git
```

#### 另外一种clone方式：

```shell
# 创建目录初始化本地仓库
$: mkdir search && cd search
$: git init
# 添加远程仓库路径
$: git remote add github git@github.com:yyfrankyy/search.git
# 实际上，pull 就是 fetch + merge
$: git pull github --all --tags
```

#### 把工作目录迁移到github上面：

```shell
$: git remote add github git@github.com:yyfrankyy/search.git
$: git push github --all --tags
```

#### 查看远程仓库的地址

```shell
$: git remote -v
origin    git@search.ued.taobao.net:projects/search.git (fetch)
origin	  git@search.ued.taobao.net:projects/search.git (push)
github	  git@github.com:yyfrankyy/search.git (fetch)
github	  git@github.com:yyfrankyy/search.git (push)
```

#### 查看远程仓库名字

```shell
git remote
origin
```

#### 重命名远程仓库

把github命名为gh

```shell
$: git remote rename github gh
$: git remote
origin
gh
```

#### 修改GitHub上面的仓库，改为别的

```shell
git remote origin set-url +URL
```

#### 先删后加

```shell
git remote rm origin

git remote add origin  +远程仓库地址
```

#### 从远程仓库抓取数据，更新本地仓库：

```shell
$: git fetch origin
remote: Counting objects: 58, done.
remote: Compressing objects: 100% (41/41), done.
remote: Total 44 (delta 24), reused 1 (delta 0)
Unpacking objects: 100% (44/44), done.
From git://search.ued.taobao.net:projects/search.git
 * [new branch]      product     -> origin/product
```

#### 查看远程仓库信息，可用于跟踪别人的push

```shell
$: git remote show origin
* remote origin
  Fetch URL: git@search.ued.taobao.net:projects/search.git
  Push  URL: git@search.ued.taobao.net:projects/search.git
  HEAD branch: master
  Remote branches:
    master  tracked
    p4popt  tracked
    prepub  tracked
    product tracked
  Local branches configured for 'git pull':
    master  merges with remote master
    p4popt  merges with remote p4popt
    prepub  merges with remote prepub
    product merges with remote product
  Local refs configured for 'git push':
    master  pushes to master  (up to date)
    p4popt  pushes to p4popt  (up to date)
    prepub  pushes to prepub  (up to date)
    product pushes to product (up to date)
```