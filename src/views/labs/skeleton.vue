<template>
  <div class="page-labs">
    <demo-name name="Skeleton 骨架"></demo-name>
    <skeleton></skeleton>
  </div>
</template>

<script>
import Skeleton from '@/skeleton/template/skeleton.vue';
import DemoName from './components/demo-name.vue';

export default {
  components: {
    DemoName,
    Skeleton,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
