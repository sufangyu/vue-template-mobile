<template>
  <div class="page-labs">
    <demo-name name="WhiteSpace 上下留白"></demo-name>
    
    <place-holder></place-holder>
    <white-space size="xs"></white-space>

    <place-holder></place-holder>
    <white-space size="sm"></white-space>

    <place-holder></place-holder>
    <white-space size="md"></white-space>

    <place-holder></place-holder>
    <white-space size="lg"></white-space>

    <place-holder></place-holder>
    <white-space size="xl"></white-space>
    <place-holder></place-holder>
  </div>
</template>

<script>
import WhiteSpace from '@/components/white-space';
import DemoName from './components/demo-name.vue';
import PlaceHolder from './components/place-holder.vue';

export default {
  components: {
    WhiteSpace,
    DemoName,
    PlaceHolder,
  },
};
</script>

<style lang="scss" scoped>
.page-labs {
  min-height: 100vh;
  background-color: #f5f5f9;
}
</style>
