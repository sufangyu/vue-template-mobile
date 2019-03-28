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
### 配置说明
- path: 路径
- name: 路由名称, 
- component: 页面组件路径
- meta: 路由元信息
  - auth: 是否需要验证登录. 默认 false
  - title: 页面标题(推荐设置)
  - noCache: 是否缓存页面. 默认是 false