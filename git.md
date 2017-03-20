设置你自己电脑的用户名和邮箱
----
1. 用户名和邮箱地址的作用
  用户名和邮箱地址是本地git客户端的一个变量，不随git库而改变，每次commit都会用用户名和邮箱记录。
github的contributions统计就是按邮箱来的

2. 查看用户名和邮箱地址
```git
$ git config user.name
$ git config user.email
```
3. 修改用户名和邮箱地址
```git
$ git config --global user.name "username"
$ git config --global user.email "email"
```

git常用操作命令
----
```
//清除命令区域
$ clear
//直接进入电脑的根目录
$ cd
//返回上级目录
$ cd ..
//显示当前文件夹的路径
$ pwd
//进入某个文件夹
$ cd gitStudy
//查看当前目录下都有什么文件
$ ls
//新建一个文件夹
$ mkdir learnGit
//将某个文件夹变成git可以管理的仓库
$ git init
//瞬间Git就把仓库建好了，而且告诉你是一个空的仓库（empty Git repository），细心的读者可以发现当前目录下多了一个.git的目录，这个目录是Git来跟踪管理版本库的，没事千万不要手动修改这个目录里面的文件，不然改乱了，就把Git仓库给破坏了。

//如果你没有看到.git目录，那是因为这个目录默认是隐藏的，用ls -ah命令就可以看见。
Initialized empty Git repository in /Users/michael/learngit/.git/

//并且当前的文件夹会显示（master）
Gabri@DESKTOP-6RMRO2P MINGW64 /e/markdown (master)
```



设置SSH将git本地仓库同步到github远程仓库
---
这部分详细图文内容请到这里：http://www.cnblogs.com/Gabriel-Wei/p/6564060.html
1. 新建一个文件夹，打开git bash 切入这个文件夹（可以命令行操作，也可以直接进入这个文件夹然后git bash）,以命令行操作为例
```
$ cd e
$ cd markdown
//将markdown文件夹变成git仓库
$ git init
```
2. SSH key提供了一种与GitHub通信的方式，通过这种方式，能够在不输入密码的情况下，将GitHub作为自己的remote端服务器，进行版本控制。Windows下打开Git Bash，创建SSH Key，按提示输入密码，可以不填密码一路回车
```
$ ssh-keygen -t rsa -C "注册邮箱"
$ ssh-keygen -t rsa -C "123@123.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/Gabri/.ssh/id_rsa):
Created directory '/c/Users/Gabri/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Passphrases do not match.  Try again.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/Gabri/.ssh/id_rsa.
Your public key has been saved in /c/Users/Gabri/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:lSh5qKHaR3adLb/6VzloAhvvVx2YXbjXNRm88bVWlDd 123@123.com
The key's randomart image is:
+---[RSA 2048]----+
|              .+B|
|       o . .  .C=|
|    . + o o  + o&|
|   . o + +  o +o+|
|  . + . S .  . o |
| o o .o  o  . .  |
|. . .  =  .o .   |
|   .  . o =.=    |
|       ..=...+   |
+----[SHA256]-----+
```
然后用户主目录/.ssh/下有两个文件，id_rsa是私钥，id_rsa.pub是公钥

3. 如何查看当前电脑是否已经生成了ssh?输入下面的命令，如果有文件id_rsa.pub 或 id_dsa.pub，则直接进入步骤5将SSH key添加到GitHub中，否则进入第2步生成SSH key
```
Gabri@DESKTOP-6RMRO2P MINGW64 /e/markdown (master)
$ cd ~/.ssh
如果有的话会直接切入这个文件夹
```
或者
```
$ ls -al ~/.ssh
查看这个是否还有这个文件夹并且有什么文件
total 17
drwxr-xr-x 1 Gabri 197609    0 3月  16 19:42 ./
drwxr-xr-x 1 Gabri 197609    0 3月  16 19:42 ../
-rw-r--r-- 1 Gabri 197609 1679 3月  16 19:42 id_rsa
-rw-r--r-- 1 Gabri 197609  401 3月  16 19:42 id_rsa.pub
```
或者：查看当前电脑是否含有公钥，以及公钥内容，ssh key 是以ssh- 开头 ，以你的用户名和邮箱结尾。
```
$ cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC+wuIWRaZH8COmGIYgZMLadsIq7dHQbKpYoXkTVSq40827mo/haWqn3NkpW3nYBB+ABHfg9lomiOh94DkRuWv0gFqGOKhCbZvRdGianuZ//N+rRWLtE9vq6+/G/d5/aLKgGeATGR4yt/blZa+GYYeknpDb5PLUuT7O1AomqhpMkUUhR1BBYSV9o5gNkIdK5at+xIbbaK+GgwioKOzlDrYXN0mzbTz/BhSirogI9eLnlgr7yGN0yN+B/mOJwZ7H518X5wnWML/IlVl9wdAHGcZffDDOZzkZjEASEty。。。。。等等
```
4. 如果电脑原来按过ssh,你想重新安装，我们选择yes:
```
$ ssh-keygen -t rsa -C "123@123.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/Gabri/.ssh/id_rsa):
/c/Users/Gabri/.ssh/id_rsa already exists.
Overwrite (y/n)? y
```
5. 登录GitHub，将我们生成的秘钥链接到GitHub
找到秘钥存放的地址
```
我得路径是这个
C:\Users\Administrator\.ssh
```
里面有两个文件，一个id_rsa,一个id_rsa.pub,后面这个就是我们连接GitHub的ssh,用记事本打开复制粘贴就行。

6. 测试一下是否可以链接到GitHub

```
输入
$ ssh git@github.com

正常情况下面会这么回复
The authenticity of host 'github.com (192.30.253.113)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGdafdpRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'github.com,192.30.253.113' (RSA) to the list of known hosts.
PTY allocation request failed on channel 0
Hi Gabrielkaliboy! You've successfully authenticated, but GitHub does not provide shell access.
Connection to github.com closed.
```
自此，我们成功新建了一个SSH，并且链接到了GitHub。

在本地新建一个文件，并将其提交到远程
---

更新远程代码到本地
---
1.查看远程仓库
```
$ git remote -v
origin  git@github.com:Gabrielkaliboy/markdown.git (fetch)
origin  git@github.com:Gabrielkaliboy/markdown.git (push)
从上面可以看出，我的远程仓库只有一个 origin
```
2.从远程获取最新版本到本地
```
$ git fetch origin master
remote: Counting objects: 13, done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 13 (delta 4), reused 13 (delta 4), pack-reused 0
Unpacking objects: 100% (13/13), done.
From github.com:Gabrielkaliboy/markdown
 * branch            master     -> FETCH_HEAD
   b6f84da..e20ca49  master     -> origin/master
```
$ git fetch origin master 这句的意思是：从远程的origin仓库的master分支下载代码到本地的origin master

3.比较本地的仓库和远程参考的区别
```
$ git log -p master.. origin/master
```
如果没有图像操作工具，只用git，会返回一大摞修改过的东西

4.把远程下载下来的代码合并到本地仓库，远程的和本地的合并
```
$ git merge origin/master
Updating b6f84da..e20ca49
Fast-forward
 images/webDaily/hr1.png                            | Bin 0 -> 467 bytes
 images/webDaily/hr2.png                            | Bin 0 -> 893 bytes
 images/webDaily/hr3.png                            | Bin 0 -> 260 bytes
 jquery.md                                          |   2 ++
 ...227\245\345\270\270\350\256\260\345\275\225.md" |  37 ++++++++++++++++++++-
 ...275\221\345\235\200\345\257\274\350\210\252.md" |   3 ++
 6 files changed, 41 insertions(+), 1 deletion(-)
 create mode 100644 images/webDaily/hr1.png
 create mode 100644 images/webDaily/hr2.png
 create mode 100644 images/webDaily/hr3.png
 create mode 100644 jquery.md
 create mode 100644 "\347\275\221\345\235\200\345\257\274\350\210\252.md"
```

5.再次查看一下状态
```
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean
```