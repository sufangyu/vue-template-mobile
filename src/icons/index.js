import Vue from 'vue';
import IconSvg from '@/components/icon';

// register global components
Vue.component('icon-svg', IconSvg);

// import all svg
const requireAll = (requireContext) => {
  requireContext.keys().map(requireContext);
};
const req = require.context('./svg', true, /\.svg$/);
requireAll(req);
