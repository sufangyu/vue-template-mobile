# 网络请求


项目里所有的请求都会走 `@/utils/request.js` 里面创建的的 `axios` 实例，它统一做了错误处理，封装了 `get` `post` `put` `delete` `patch`等请求函数.

## 使用
```js
import http from '@/utils/request';

export function getUser(username = '') {
  const url = `https://api.github.com/users/${username}`;
  return http.get({ url });
}
```

因为所有请求返回的是 `promise`，所以你也可以对每一个请求通过 `catch` 错误，从而进行单独的处理。
```js
try {
  const res = await getUser();
} catch (error) {
```



## 请求方法

### GET 请求
```js
/**
 * GET 请求
 *
 * @param {string} [url=''] 地址
 * @param {*} [params={}] 查询参数
 * @param {*} [config={}] axios 配置
 * @param {boolean} [loading=true] 是否显示 loading
 * @param {string} [loadingMessage='加载中...'] loading 信息提示
 * @returns
 */
get({ url = '', params = {}, config = {}, loading = true, loadingMessage = '加载中...' }) {
  const mergeConfig = Object.assign({}, {
    method: 'GET',
    url,
    params,
    loading,
    loadingMessage,
    cancelToken: new CancelToken((c) => {
      cancel = c;
    }),
  }, config);
  return request(mergeConfig);
}
```

### POST 请求
```js
/**
 * POST 请求
 *
 * @param {string} [url=''] 地址
 * @param {*} [params={}] 查询参数
 * @param {*} [data={}] 提交内容
 * @param {*} [config={}] axios 配置
 * @param {boolean} [loading=true] 是否显示 loading
 * @param {string} [loadingMessage='加载中...'] loading 信息提示
 * @return {*}
 */
post({ url = '', params = {}, data = {}, config = {}, loading = true, loadingMessage = '正在提交...' }) {
  const mergeConfig = Object.assign({}, {
    method: 'POST',
    url,
    params,
    data,
    loading,
    loadingMessage,
    cancelToken: new CancelToken((c) => {
      cancel = c;
    }),
  }, config);
  return request(mergeConfig);
}
```

### PUT 请求
```js
/**
 * PUT 请求
 *
 * @param {string} [url=''] 地址
 * @param {*} [params={}] 查询参数
 * @param {*} [data={}] 提交内容
 * @param {*} [config={}] axios 配置
 * @param {boolean} [loading=true] 是否显示 loading
 * @param {string} [loadingMessage='加载中...'] loading 信息提示
 * @return {*}
 */
put({ url = '', params = {}, data = {}, config = {}, loading = true, loadingMessage = '正在提交...' }) {
  const mergeConfig = Object.assign({}, {
    method: 'PUT',
    url,
    params,
    data,
    loading,
    loadingMessage,
    cancelToken: new CancelToken((c) => {
      cancel = c;
    }),
  }, config);
  return request(mergeConfig);
}
```

### DELETE 请求
```js
/**
 * DELETE 请求
 *
 * @param {string} [url=''] 地址
 * @param {*} [params={}] 查询参数
 * @param {*} [data={}] 提交内容
 * @param {*} [config={}] axios 配置
 * @param {boolean} [loading=true] 是否显示 loading
 * @param {string} [loadingMessage='加载中...'] loading 信息提示
 * @return {*}
 */
delete({ url = '', params = {}, data = {}, config = {}, loading = true, loadingMessage = '正在删除...' }) {
  const mergeConfig = Object.assign({}, {
    method: 'DELETE',
    url,
    params,
    data,
    loading,
    loadingMessage,
    cancelToken: new CancelToken((c) => {
      cancel = c;
    }),
  }, config);
  return request(mergeConfig);
}
```

### PATCH 请求
```js
/**
  * PATCH 请求
  *
  * @param {string} [url=''] 地址
  * @param {*} [params={}] 查询参数
  * @param {*} [data={}] 提交内容
  * @param {*} [config={}] axios 配置
  * @param {boolean} [loading=true] 是否显示 loading
  * @param {string} [loadingMessage='加载中...'] loading 信息提示
  * @return {*}
  */
patch({ url = '', params = {}, data = {}, config = {}, loading = true, loadingMessage = '正在提交...' }) {
  const mergeConfig = Object.assign({}, {
    method: 'PATCH',
    url,
    params,
    data,
    loading,
    loadingMessage,
    cancelToken: new CancelToken((c) => {
      cancel = c;
    }),
  }, config);
  return request(mergeConfig);
}
```

### 并发请求
```js
/**
 * 并发请求
 *
 * @param {*} [args=[]] 请求数组
 * @returns
 */
all: (args = []) => axios.all(args),
```

## 拓展阅读
- [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)