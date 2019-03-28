<template>
  <div
    class="wingblank"
    :class="sizeClass"
  >
    <slot></slot>
  </div>
</template>

<script>
// 两翼留白的间距，可选sm, md, lg
export default {
  name: 'WingBlank',
  props: {
    size: {
      type: String,
      default: 'lg',
      validator: value => ['sm', 'md', 'lg'].indexOf(value) !== -1,
    },
  },
  computed: {
    sizeClass() {
      return `wingblank-${this.size}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.wingblank {
  &.wingblank-sm {
    margin-left: 5px;
    margin-right: 5px;
  }

  &.wingblank-md {
    margin-left: 8px;
    margin-right: 8px;
  }

  &.wingblank-lg {
    margin-left: 15px;
    margin-right: 15px;
  }
}

</style>
