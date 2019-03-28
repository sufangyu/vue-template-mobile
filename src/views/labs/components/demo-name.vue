<template>
  <div class="demo-name">
    <router-link :to="{ path: '/labs'}">
      <icon-svg name="home" />
    </router-link>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'DemoName',
  props: {
    name: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-name {
  font-size: 20px;
  color: #404040;
  padding: 21px 0 21px 15px;
  text-align: left;
  overflow: hidden;
  
  span {
    font-size: 18px;
    position: relative;
    padding-left: 10px;
    margin-left: 10px;

    &::before {
      content: "";
      position: absolute;
      top: 2.5px;
      left: 0;
      width: 1px;
      height: 15px;
      background-color: #ceced1;
    }
  }
}
</style>
