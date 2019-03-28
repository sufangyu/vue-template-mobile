import Vue from 'vue';
import Skeleton from './template/skeleton.vue';

export default new Vue({
  components: {
    Skeleton,
  },
  render: h => h(Skeleton),
});
