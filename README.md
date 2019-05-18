# vue-template-mobile

移动端项目通用模板

- 安装即可使用, 无需再配置router、store, 无需封装 http 请求库. 构建设置 CDN、Gzip 压缩.

- 已集成常用的 flex 弹性布局、宫格布局、svg 图标、上下留白、两翼留白等组件.

- 内置 Vant UI 框架、vee-validate 表单验证组件, 解决小数精准度问题, 更有常用的指令、过滤器等


## 安装与构建

``` bash
# install with npm
npm install

# install with yarn
yarn install

# 启动本地开发
npm run serve

# 启动本地开发 - 设置指定的代理环境. 配置文件 ./config/proxy.js
npm run serve -- --env=local
npm run serve -- --env=dev

# 项目说明文档
npm run docs:dev

# 构建
npm run build

# 分析构建文件体积
npm run analyz
```

## 目录结构

```bash
.
├─docs                  # 文档说明
|
├─config
│  ├─cdn.js             # 构建 CDN 优化
│  ├─externals.js       # 构建排除第三方组件, 库
│  └─proxy.js           # 请求代理配置
├─src
│  ├─api                # 项目的请求函数与 API
│  │  ├─***
│  │  └─proxy.tables.js # 本地开发的请求代理配置
│  ├─assets             # 项目静态资源
│  ├─components         # 公共组件
│  ├─config             # 项目配置
│  │  └─index.js        # API base url, 多语言
│  ├─directives         # 全局指令
│  ├─filters            # 全局过滤器
│  ├─icons              # icon 图标  
│  ├─langs              # 多语言配置
│  │  └─validator.js    # 校验的多语言配置
│  ├─mixins             # 全局混入  
│  ├─router             # 路由配置文件. 如果项目大, 可按模块配置路由
│  │  └─path.js         # 对外暴露路由路径配置
│  ├─styles             # 全局样式文件
│  │  ├─functions       # 函数
│  │  ├─mixins          # 混合
│  │  ├─theme           # 主题变量
│  │  ├─animate.scss    # css 运动样式
│  │  ├─color.scss      # 颜色变量
│  │  ├─import.scss     # 对外导出入口
│  │  ├─index.scss      # 样式入口文件
│  │  └─normalize.css   # 样式初始化
│  ├─utils              # 工具库. 建议按模块组织, 例如 array.js, validate.js 等
│  │  ├─auth.js         # 登录工具类
│  │  ├─validator.js    # 自定义校验规则
│  │  └─request.js      # 请求函数
│  ├─views              # 页面. 建议按模块组织
│  ├─App.vue            # 主页面
│  ├─main.js            # 入口页面
│  └─permission.js      # 登录, 权限控制
├─package.json
└─vue.config.js
```

## UI 框架

- [有赞 Vant](https://youzan.github.io/vant)

## 部署

- npm run build

## 推荐规范

### 命名

**目录、文件命名**
全部采用小写方式， 以中划线分隔。
例: scripts, retina-sprites.scss, data.js, actionsheet.vue


**css 变量命名规范**
统一使用kebab-case(小写短横线)命名规范。

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
统一使用camelCase（小写驼峰式）命名规范。

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
- path: 路径使用 kebab-case(小写短横线)
- name: 路由命名使用 PascalCase(大写驼峰式)

path命名主要遵循以下原则：
- url 中字母全部小写
- 如果有单词拼接，使用中划线 '-'


### 组件组织

- 基础 UI 组件统一放在 src/components
- 页面业务组件放在对于页面下的components文件.

### 拓展
- [前端代码规范](https://www.yuque.com/gagwkz/rr9b4y)
- [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/)


## 参考资料

- https://cn.vuejs.org/v2/guide/
- https://vuex.vuejs.org/zh/
- https://router.vuejs.org/zh/
- https://cli.vuejs.org/zh/guide/
- https://panjiachen.github.io/vue-element-admin-site/zh/

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/zh/config/).
