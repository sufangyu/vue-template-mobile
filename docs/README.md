---
title: 项目文档
lang: zh-CN
home: true
description: 移动端项目通用模板
actionText: 起步 →
actionLink: ./guide/
features:
- title: 简单
  details: 安装即可使用, 无需再配置router、store, 无需封装 http 请求库. 构建设置 CDN、Gzip 压缩.
- title: 灵活
  details: 已集成常用的 flex 弹性布局、宫格布局、svg 图标、上下留白、两翼留白等组件.
- title: 强大
  details: 内置 Vant UI 框架、vee-validate 表单验证组件, 解决小数精准度问题, 更有常用的指令、过滤器等
---
# 快速设置

## 安装

```bash
# install with npm
npm install

# install with yarn
yarn install
```

## 启动
```bash
# 本地开发
npm run serve

# 启动本地开发 - 设置指定的代理环境. 配置文件 ./config/proxy.js
npm run serve -- --env=local
npm run serve -- --env=dev

# 项目说明文档
npm run docs:dev
```

## 构建
```bash
npm run build
```