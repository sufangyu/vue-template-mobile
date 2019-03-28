# 请求代理

在 `./config/proxy.js` 增加、修改代理配置项目

## 配置项

```js
...
test: {
  '/api': {
    target: 'http://test.api.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
    }
  }
}
...
```

**配置说明**
- test: 当前配置项的环境


## 执行

以上配置可通过下面命令执行代理
```base
npm run serve -- --env=test
```