---
title: Python 爬虫——爬取小说 | 花千骨
date: 2017-09-25 16:17:40
categories: 后端
tags: [后端,python]
---
<Excerpt in index | 首页摘要> 
Python 爬虫——爬取小说 | 花千骨
<!-- more -->
<The rest of contents | 余下全文>

-----

## 1.资料储备

### 1.1 [Beautiful Soup](https://beautifulsoup.readthedocs.io/zh_CN/v4.4.0/)

安装：`pip install beautifusoup4`
除了安装这个，还得安装 lxml``

### 1.2 带爬取页面
136书屋-花千骨章节页面：http://www.136book.com/huaqiangu/


简单的爬取：
```py
from urllib import request
from bs4 import BeautifulSoup

if __name__ == '__main__':
    # 第8章的网址
    url = 'http://www.136book.com/huaqiangu/ebxeew/'
    head = {}
    # 使用代理
    head['User-Agent'] = 'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19'
    req = request.Request(url, headers = head)
    response = request.urlopen(req)
    html = response.read()
    # 创建request对象
    soup = BeautifulSoup(html, 'lxml')
    # 找出div中的内容
    soup_text = soup.find('div', id = 'content')
    # 输出其中的文本
    print(soup_text.text)
```
## 2.爬取全集
