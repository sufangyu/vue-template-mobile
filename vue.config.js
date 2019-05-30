
const path = require('path');
const chalk = require('chalk');
const merge = require('webpack-merge');
const argv = require('minimist')(process.argv.slice(2));
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer');
// const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const proxy = require('./config/proxy');
const cdn = require('./config/cdn');
const externals = require('./config/externals');

// 是否是生产环境
const IS_PROD = process.env.NODE_ENV === 'production';
// gzip 后缀配置
const productionGzipExtensions = ['js', 'css'];
const resolve = dir => path.join(__dirname, './', dir);

// 获取代理配置
const defaultEnv = 'local';
let proxyConfig = null;
if (argv.env && proxy[argv.env]) {
  proxyConfig = { ...proxy[argv.env] };
} else {
  proxyConfig = { ...proxy[defaultEnv] };
}
if (proxyConfig['/api'] && !IS_PROD) {
  const proxyTarget = proxyConfig['/api'].target;
  console.log(chalk.cyan(`Request proxy to ${proxyTarget}\n`));
}


const addStyleResource = (rule) => {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve('src/styles/import.scss'),
      ],
    });
};

module.exports = {
  lintOnSave: 'error',
  publicPath: IS_PROD ? '/' : '/',
  css: {
    extract: !!IS_PROD,
  },
  configureWebpack: (config) => {
    if (IS_PROD) {
      config.externals = externals;

      config.plugins.push(
        // gzip
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
          threshold: 10240,
          minRatio: 0.8,
        }),
      );
    }

    // vue 骨架屏插件配置
    // config.plugins.push(new SkeletonWebpackPlugin({
    //   webpackConfig: {
    //     entry: {
    //       app: path.join(__dirname, './src/skeleton/index.js'),
    //     },
    //   },
    //   minimize: true,
    //   quiet: true,
    // }));
  },

  chainWebpack: (config) => {
    // 对运行环境(process.env)注入自定义配置
    config.plugin('define')
      .tap((args) => {
        Object.assign(args[0]['process.env'], {
          'x-custom': '"vue-template-mobile"',
        });
        return args;
      });

    // 全局注入 scss 变量
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });

    // 批量处理 svg
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });

    // 图片处理
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => merge(options, {
        limit: 10000,
      }));

    // 别名
    config.resolve.alias
      .set('@', resolve('src'));

    // build 打包使用 CDN
    if (IS_PROD) {
      config.plugin('html')
        .tap((args) => {
          args[0].cdn = cdn;
          return args;
        });

      // analyzer
      if (process.env.ANALYZ) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(BundleAnalyzer.BundleAnalyzerPlugin);
      }
    }
  },

  // 代理配置
  devServer: {
    open: true,
    proxy: proxyConfig,
  },
};
