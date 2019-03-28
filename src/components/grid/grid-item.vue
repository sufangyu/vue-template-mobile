<template>
  <div class="grid-item">
    <div class="grid-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridItem',
};
</script>

<style lang="scss" scoped>
$space : 10px;

.grid-item {
  position: relative;
  display: inline-block;
  margin-bottom: $space;
  margin-right: $space;
  width: calc((100% - 20px) / 3);
  font-size: 14px;

  &::after {
    content: "";
    display: block;
    padding-top: 100%;
    height: 0;
  }

  &-content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
