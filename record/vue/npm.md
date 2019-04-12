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

### 依赖管理

#### dependencies

应用依赖，或者叫做业务依赖，这是我们最常用的依赖包管理对象！它用于指定应用依赖的外部包，这些依赖是应用发布后正常执行时所需要的，但不包含测试时或者本地打包时所使用的包。可使用下面的命令来安装：

```shell
npm install packageName --save
```

简写

```shell
npm insatll -s 就是npm install --save
```

#### devDependencies

开发环境依赖，仅次于dependencies的使用频率！它的对象定义和dependencies一样，只不过它里面的包只用于开发环境，不用于生产环境，这些包通常是单元测试或者打包工具等，例如gulp, grunt, webpack, moca, coffee等，可使用以下命令来安装：

```shell
npm install packageName --save-dev
```

简写

```shell
npm install -d 就是npm install --save-dev
```


举例：我们在前端可能用到假数据进行模拟，但是线上是不用这个文件的，所以我们放在devDependencies中

```shell
npm install mockjs -D
```

这个命令会被写入devDependencies里面

### 安装全局包

```shell
npm install -g <package>
```

### 安装本地包

就是只在本项目中使用

```shell
npm install <package_name>
```

### 查看是否安装了某个包

#### 查看当前项目是否安装了某个包

```shell
npm ls vue-router

//返回
vue-test@0.1.0 G:\demo\vue-test
`-- vue-router@3.0.3
```

#### 查看全局是否安装某个包

```shell
npm ls vue-router -g
//返回
C:\Users\Gabriel\AppData\Roaming\npm
`-- (empty)
```