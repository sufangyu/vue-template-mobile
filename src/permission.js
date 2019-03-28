import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from '@/router';
// import store from '@/store';
import { getToken } from '@/utils/auth';

// NProgress Configuration
NProgress.configure({ showSpinner: true });

/* eslint-disable no-lonely-if */
router.beforeEach(async (to, from, next) => {
  NProgress.start();

  if (getToken()) {
    if (to.path === '/login') {
      next('/');
      NProgress.done();
    } else {
      if (to.matched.length === 0) {
        // 没有匹配到路由
        next({ path: '/404' });
      } else {
        next();
      }
    }
  } else {
    if (to.matched.length === 0) {
      console.warn('no match router');
      next({ path: '/login', replace: true });
      NProgress.done();
    } else {
      // match router
      if (to.meta.auth) {
        const redirectUrl = encodeURIComponent(to.path);
        next({ path: `/login?redirect=${redirectUrl}`, replace: true });
        NProgress.done();
      } else {
        next();
      }
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
