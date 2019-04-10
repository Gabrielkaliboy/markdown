# vue.config.js文件说明

[vue.config.js说明](https://cli.vuejs.org/zh/config/#vue-config-js)

```javascript
module.exports = {
    // baseUrl从 Vue CLI 3.3 起已弃用，请使用publicPath。部署应用包时的基本 URL。
    baseUrl:"./",
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
    outputDir: 'dist',
    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    // 有效的值：`ture` | `false` | `"error"`
    // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
    lintOnSave: true,
    // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
    filenameHashing: false, // 是否 hash 值
    // 生产环境是否生成 sourceMap 文件
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false,
    // 配置 webpack-dev-server 行为。
    devServer: {
        // 配置本地生产的时候的端口号
      port: 8089,
    // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。
    // 看这里https://github.com/chimurai/http-proxy-middleware#proxycontext-config
      proxy: {
        '/api': {
          target: 'http://192.168.10.243:20001',  // target host 目标主机地址
          ws: true,  // proxy websockets 
          changeOrigin: true,  // needed for virtual hosted sites
          pathRewrite: {
              '^/api': ''  // rewrite path
          }
        },
      }
    }
  }
```