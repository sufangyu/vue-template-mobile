<template>
  <div class="flexbox-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Flexbox',
};
</script>

<style lang="scss" scoped>
.flexbox-item {
  flex: 1;
  box-sizing: border-box;
  width: 100%;
}
</style>
