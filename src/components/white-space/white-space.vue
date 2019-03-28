<template>
  <div
    class="whitespace"
    :class="sizeClass"
  ></div>
</template>

<script>
// 上下留白的间距，可选xs, sm, md, lg, xl
export default {
  name: 'WhiteSpace',
  props: {
    size: {
      type: String,
      default: 'md',
      validator: value => ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1,
    },
  },
  computed: {
    sizeClass() {
      return `whitespace-${this.size}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.whitespace {
  &.whitespace-xs {
    height: 3px;
  }

  &.whitespace-sm {
    height: 6px;
  }

  &.whitespace-md {
    height: 9px;
  }

  &.whitespace-lg {
    height: 15px;
  }

  &.whitespace-xl {
    height: 21px;
  }
}

</style>
