# 使用vscode自带的调试系统给调试vue

[说明](https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html)

## 实操

- 安装chrome/vscode
- vscode中按装 Debugger for Chrome 扩展的最新版本插件
- 打开 config/index.js 并找到 devtool 属性。将其更新为

```javascript
module.exports = {
  productionSourceMap: true,//这个如果有的话
  configureWebpack: {
    devtool: 'source-map'
  }
}
```

### 点击调试按钮-小齿轮，配置json

注意这里的端口号要和vue.config.js中的的一样

```json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

``` json
    devServer: {
      port: 8089,
      proxy: {
        '/api': {
          target: 'http://192.168.10.243:20001',  // target host
          ws: true,  // proxy websockets 
          changeOrigin: true,  // needed for virtual hosted sites
          pathRewrite: {
              '^/api': ''  // rewrite path
          }
        },
      }
    }
```