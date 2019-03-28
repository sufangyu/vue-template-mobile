# 路由

本项目侧边栏和路由是绑定在一起的，所以你只有在 `@/router/router-constant/index.js` 下面配置对应的路由。当然这样就需要在配置路由的时候遵循一些约定的规则。

## 配置项

```js
{
  path: '/url',
  name: 'Url',
  component: () => import('@/views/*.vue'),
  meta: {
    auth: true,
    title: 'title',
    noCache: true,
  }
}
```
**配置说明**
- path: 路径
- name: 路由名称, 
- component: 页面组件路径
- meta: 路由元信息
  - auth: 是否需要验证登录. 默认 false
  - title: 页面标题(推荐设置)
  - noCache: 是否缓存页面. 默认是 false

## 路由命名规范
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
- path: 路径使用 kebab-case(小写短横线)
- name: 路由命名使用 PascalCase(大写驼峰式)

path命名主要遵循以下原则：
- url 中字母全部小写
- 如果有单词拼接，使用中划线 '-'
