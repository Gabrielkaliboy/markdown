---
title: mock.js的使用
date: 2017-09-11 19:17:40
categories: 前端
tags: [前端开发插件,mock.js]
---
<Excerpt in index | 首页摘要> 
mock.js的使用
<!-- more -->
<The rest of contents | 余下全文>

----
### 1.说明

官网：http://mockjs.com/
文档：http://mockjs.com/0.1/



### 2.使用<script>标签引入的一个实例
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.bootcss.com/jquery/1.8.0/jquery-1.8.0.min.js"></script>
    <script src="http://mockjs.com/dist/mock.js"></script>
    <script>
        Mock.mock('http://g.cn', {
            'name': '@name',
            'age|1-100': 100,
            'color': '@color'
        });

        $.ajax({
            url: 'http://g.cn',
            dataType: 'json'
        }).done(function (data, status, xhr) {
            console.log(
                JSON.stringify(data, null, 4)
            )
        }) 
    </script>
    <title>直接引用js文件</title>
</head>

<body>

</body>

</html>
```

### 3.数据格式的编写
已有实例：http://mockjs.com/examples.html
文档：http://mockjs.com/0.1/



