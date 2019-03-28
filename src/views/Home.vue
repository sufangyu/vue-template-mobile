<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/labs">Labs</router-link>
    </div>
    
    <img alt="Vue logo" src="../assets/logo.png">
    <p>process.env =>> {{env}}</p>
    <p>config =>> {{config}}</p>
  </div>
</template>

<script>
import config from '@/config';

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      env: process.env,
      config,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100px;
}
</style>
