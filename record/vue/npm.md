# npm

## 切换到淘宝NPM镜像

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 安装模块

所有命令由npm更改为cnpm

```shell
cnpm install [name]
```

### 查看cnpm版本

```shell
cnpm -v
```

## vue-cli

[vue@cli官网](https://cli.vuejs.org/zh/guide/)

## 全局安装vue-cli

```shell
cnpm install -g @vue/cli
```

### 检测是否安装成功

```shell
vue --vesion
```

## 创建要给项目

创建一个 名字为hello-world的项目

```shell
vue create hello-world
```

### 创建要给项目 如果不愿意用命令行，还可以用图形界面

```shell
vue ui
```

## npm其他命令

```shell
npm install mockjs -D
```

这个命令会被写入devDependencies里面

```shell
npm install -d 就是npm install --save-dev

npm insatll -s 就是npm install --save
```