<template>
  <div class="about">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/labs">Labs</router-link>
    </div>
    
    <h1>This is an about page</h1>
    <p>{{time | formatTime}}</p>
    <p>
      <span v-has="{action: 'create', actions: ['create', 'edit']}">新建 - 显示</span>
      <span v-has="{action: 'remove', actions: ['create', 'edit']}">删除 - 不显示</span>
    </p>
    <div>
      <van-button type="primary" @click="handleShowToast">显示 toast</van-button>
    </div>
    <div class="multi">文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出文本溢出</div>
  </div>
</template>

<script>
import testMixins from '@/mixins/test';

export default {
  mixins: [testMixins],
  data() {
    return {      
      time: +new Date(),
    };
  },
  created() {
    console.log('about created');
  },
  methods: {
    customFn() {
      console.log('page customFn');
    },
    handleShowToast() {
      this.$notify('提示文案');
    },
  },
};
</script>

<style lang="scss">
p {
  font-size: $font-size-heading;
  padding: 10px 0;

}
.multi {
  @include ellipsisMulti(2);
}
</style>
