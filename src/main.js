import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import VeeValidate from 'vee-validate';
// eslint-disable-next-line
import zh_CN from 'vee-validate/dist/locale/zh_CN';

import './icons';
import App from './App.vue';
import router from './router';
import store from './store';
import './permission';
import * as filters from './filters';
import * as directives from './directives';
import localizeValidator from './langs/validator';
import rulesValidator from './utils/validator';

// register global filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// register global directives.
Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key]);
});

// use components
Vue.use(Vant);
VeeValidate.Validator.localize('zh_CN', zh_CN);
VeeValidate.Validator.localize(localizeValidator);
Object.entries(rulesValidator).forEach((item) => {
  const [key, value] = item;
  VeeValidate.Validator.extend(key, value);
});
Vue.use(VeeValidate, { locale: zh_CN });


Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

window.mountApp = () => {
  app.$mount('#app');
};

if (process.env.NODE_ENV === 'production') {
  if (window.STYLE_READY) {
    window.mountApp();
  }
} else {
  window.mountApp();
}
