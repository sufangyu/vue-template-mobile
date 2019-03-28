import Has from './has';

const install = (Vue) => {
  Vue.directive('Has', Has);
};

/* eslint-disable no-undef */
if (window.Vue) {
  window.has = Has;
  Vue.use(install);
}

Has.install = install;
export default Has;
