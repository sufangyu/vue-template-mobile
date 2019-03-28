# 推荐规范

## 命名

**目录、文件命名**
全部采用小写方式， 以中划线分隔。
例: `scripts`, `retina-sprites.scss`, `data.js`, `actionsheet.vue`


**css 变量命名规范**
统一使用`kebab-case`(小写短横线)命名规范。

```html
<template>
  <div class="app-home-vue">
  </div>
</template>

<style lang='scss'>
.app-home-vue {}
</style>
```

**js 变量命名规范**
统一使用`camelCase`（小写驼峰式）命名规范。

```js
let myName = 'zhangsanfeng';
```

**路由命名规范**
参考以下示例：
```js
{
  path: '/form-detail',
  name: 'FormDetail',
  component: () => import('@views/demo-components/form-detail'),
  meta: { title: '表单详情' }
}
```

路由的两个命名：
- path: 路径使用 `kebab-case`(小写短横线)
- name: 路由命名使用 `PascalCase`(大写驼峰式)

path命名主要遵循以下原则：
- url 中字母全部小写
- 如果有单词拼接，使用中划线 '-'


## 组件组织

- 基础 UI 组件统一放在 `src/components`
- 页面业务组件放在对应页面下的`components`文件.


## 网络请求组织

请求函数统一按模块划分放在 `src/api` 目录下, 只暴露请求方法到给页面调用, 不推荐把请求方法直接写在页面内. 

例如:
```js
// src/api/user.js
import http from '@/utils/request';

export function getUser(username = '') {
  const url = `https://api.github.com/users/${username}`;
  return http.get({ url });
}
```
```js
// views/account/profile.js
import { getUser } from '@/api/users';

...
methods: {
  async handleGetUser() {
    const res = await getUser('username');
  },
},
...
```

## 拓展阅读
- [前端代码规范](https://www.yuque.com/gagwkz/rr9b4y)
- [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/)