<template>
  <div
    class="grid"
    :class="classNameColumn"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    column: {
      type: Number,
      default: 3,
      validator: value => [3, 4].indexOf(value) !== -1,
    },
  },
  computed: {
    classNameColumn() {
      return `grid-column--${this.column}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.grid {
  font-size: 0;
  margin: 0 auto;

  &-column--3 {
    .grid-item {
      width: calc((100% - 20px) / 3);
      
      &:nth-of-type(3n+3) {
        margin-right: 0;
      }
    }
  }
  &-column--4 {
    .grid-item {
      width: calc((100% - 30px) / 4);
      
      &:nth-of-type(4n+4) {
        margin-right: 0;
      }
    }
  }
}
</style>
