import Vue from 'vue';
import Router from 'vue-router';
import routerConstantMap from './router-constant';
import routerAsyncMap from './router-async';
import routerLabsMap from './router-labs';

// 开发环境的 labs 路由
if (process.env.NODE_ENV === 'development') {
  routerConstantMap.push(...routerLabsMap);
}

Vue.use(Router);

const routerMap = [...routerConstantMap, ...routerAsyncMap];

// 静态路由. 不需要权限检测
export { routerConstantMap };

// 异步动态路由
export { routerAsyncMap };

export default new Router({
  // mode: 'history', // require service support
  routes: routerMap || [],
});
