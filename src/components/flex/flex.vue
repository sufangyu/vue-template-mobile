<template>
  <div
    class="flexbox"
    :class="[classDirection, classWrap, classJustify, classAlign]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Flex',
  props: {
    // 定位方向
    direction: {
      type: String,
      default: 'row',
      validator: value => ['row', 'row-reverse', 'column', 'column-reverse'].indexOf(value) !== -1,
    },
    // 子元素换行
    wrap: {
      type: String,
      default: 'nowrap',
      validator: value => ['nowrap', 'wrap', 'wrap-reverse'].indexOf(value) !== -1,
    },
    // 主轴对齐方式
    justify: {
      type: String,
      default: 'start',
      validator: value => ['start', 'end', 'center', 'between', 'around'].indexOf(value) !== -1,
    },
    // 交叉轴对齐方式
    align: {
      type: String,
      default: 'center',
      validator: value => ['start', 'end', 'center', 'baseline', 'stretch'].indexOf(value) !== -1,
    },
  },
  computed: {
    classDirection() {
      return this.direction === 'row' ? '' : `flexbox-dir-${this.direction}`;
    },
    classWrap() {
      return this.wrap === 'nowrap' ? '' : `flexbox-${this.wrap}`;
    },
    classJustify() {
      return this.justify === 'start' ? '' : `flexbox-justify-${this.justify}`;
    },
    classAlign() {
      return this.align === 'center' ? '' : `flexbox-align-${this.align}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.flexbox {
  display: flex;
  align-items: center;

  // 方向
  &-dir {
    &-row {
      flex-direction: row;
    }
    &-row-reverse {
      flex-direction: row-reverse;
    }
    &-column {
      flex-direction: column;
    }
    &-column-reverse {
      flex-direction: column-reverse;
    }
  }

  // 子元素换行
  &-nowrap {
    flex-wrap: nowrap;
  }
  &-wrap {
    flex-wrap: wrap;
  }
  &-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  // 主轴对齐方式
  &-justify-start {
    justify-content: flex-start;
  }
  &-justify-end {
    justify-content: flex-end;
  }
  &-justify-center {
    justify-content: center;
  }
  &-justify-between {
    justify-content: space-between;
  }
  &-justify-around {
    justify-content: space-around;
  }

  // 交叉轴对齐方式
  &-align-start {
    align-items: flex-start;
  }
  &-align-end {
    align-items: flex-end;
  }
  &-align-center {
    align-items: center;
  }
  &-align-baseline {
    align-items: baseline;
  }
  &-align-stretch {
    align-items: stretch;
  }
}
</style>
