/**
 * 配置 请求代理
 * 
 * npm run serve -- --env=local
 */ 


module.exports = {
  // 本地环境
  local: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
      },
    },
  },

  // 开发环境
  dev: {
    '/api': {
      target: 'http://dev.api.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
      },
    },
  },

  // 测试环境
  test: {
    '/api': {
      target: 'http://test.api.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
      },
    },
  },

  // 灰度环境
  gray: {
    '/api': {
      target: 'http://gray.api.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
      },
    },
  },

  // 生产环境
  prod: {
    '/api': {
      target: 'http://prod.api.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
      },
    },
  },
};
