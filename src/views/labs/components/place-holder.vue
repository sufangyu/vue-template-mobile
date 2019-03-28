<template>
  <div class="placeholder-empty">{{ content }}</div>
</template>

<script>
export default {
  name: 'PlaceHolder',
  props: {
    content: {
      type: String,
      default: 'Block',
    },
  },
};
</script>

<style lang="scss" scoped>
.placeholder-empty {
  background-color: #ebebef;
  color: #bbb;
  text-align: center;
  height: 30px;
  line-height: 30px;
  width: 100%;
}
</style>
