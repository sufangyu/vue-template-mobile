# 项目介绍

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
│  ├─styles             # 全局样式文件
│  │  ├─functions       # 函数
│  │  └─mixins          # 混合
│  │  └─theme           # 主题变量
│  │  └─animate.scss    # css 运动样式
│  │  └─color.scss      # 颜色变量
│  │  └─import.scss     # 对外导出入口
│  │  └─index.scss      # 样式入口文件
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
