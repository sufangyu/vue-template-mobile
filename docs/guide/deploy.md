# 构建与发布

## CDN 配置

在根目录下 `config/cdn.js` 配置需要的 `css` 与 `js`.

```js
module.exports = {
  css: [
    '//cdn.jsdelivr.net/npm/vant@1.6/lib/index.css',
    '//cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css',
  ],
  js: [
    '//cdn.bootcss.com/vue/2.5.21/vue.min.js',
    '//cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
    '//cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
    '//cdn.jsdelivr.net/npm/vant@1.6/lib/vant.min.js',
    '//cdn.bootcss.com/axios/0.18.0/axios.min.js',
    '//cdn.bootcss.com/js-cookie/2.2.0/js.cookie.min.js',
    '//cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js',
  ]
}
```

## 排除第三方组件、库

在根目录下 `config/externals.js` 配置需要排除的第三方组件、库.

```js
module.exports = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'vant': 'vant',
  'axios': 'axios',
  'js-cookie': 'Cookies',
  'nprogress': 'NProgress',
};
```
> key 是引入的库名, value 是对外暴露的全局名称.

## 构建

当项目开发完毕，只需要运行一行命令就可以打包应用：

```bash
# 打包正式环境
npm run build
```

构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是 `***.js` 、`***.css`、`index.html` 等静态文件。

## 分析构建文件体积

如果构建文件很大，可以通过 `webpack-bundle-analyzer` 命令构建并分析依赖模块的体积分布，从而优化的代码。

```bash
npm run analyz
```

运行之后就可以打开 `dist/report.html` 页面看到具体的体积分布.

## 发布

对于发布来讲，只需要将最终生成的静态文件，也就是通常情况下 `dist` 文件夹的静态文件发布到的 `cdn` 或者静态服务器即可，需要注意的是其中的 `index.html` 通常会是后台服务的入口页面，在确定了 `js` 和 `css` 的静态之后可能需要改变页面的引入路径。


## 拓展阅读

- [Webpack 打包优化之体积篇](https://www.jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/)
- [Webpack 打包优化之速度篇](https://www.jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed/)

> 注: 以上2篇拓展阅读文章只介绍优化的方式, 具体配置不可直接照搬.

