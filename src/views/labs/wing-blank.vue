<template>
  <div class="page-labs">
    <demo-name name="WingBlank 两翼留白"></demo-name>
    
    <wing-blank>
      <place-holder></place-holder>
    </wing-blank>
    <white-space></white-space>

    <wing-blank size="md">
      <place-holder></place-holder>
    </wing-blank>
    <white-space></white-space>

    <wing-blank size="sm">
      <place-holder></place-holder>
    </wing-blank>
  </div>
</template>

<script>
import WhiteSpace from '@/components/white-space';
import WingBlank from '@/components/wing-blank';
import DemoName from './components/demo-name.vue';
import PlaceHolder from './components/place-holder.vue';

export default {
  components: {
    WhiteSpace,
    WingBlank,
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
