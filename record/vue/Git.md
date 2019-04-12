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