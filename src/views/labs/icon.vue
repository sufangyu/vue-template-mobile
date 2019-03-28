<template>
  <div class="page-labs">
    <demo-name name="Icon 图标"></demo-name>
    <grid column="3">
      <grid-item>
        <div class="icon-item">
          <icon-svg name="404" />
          <p class="icon-code">404</p>
        </div>
      </grid-item>
      <grid-item>
        <div class="icon-item">
          <icon-svg name="document" />
          <p class="icon-code">document</p>
        </div>
      </grid-item>
      <grid-item>
        <div class="icon-item">
          <icon-svg name="qq" />
          <p class="icon-code">qq</p>
        </div>
      </grid-item>
      <grid-item>
        <div class="icon-item">
          <icon-svg name="wechat" />
          <p class="icon-code">wechat</p>
        </div>
      </grid-item>
      <grid-item>
        <div class="icon-item">
          <icon-svg name="home" />
          <p class="icon-code">home</p>
        </div>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import Grid, { GridItem } from '@/components/grid';
import DemoName from './components/demo-name.vue';

export default {
  components: {
    DemoName,
    Grid,
    GridItem,
  },
};
</script>

<style lang="scss" scoped>
.icon-item {
  font-size: 32px;
  color: #808080;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .icon-code {
    font-size: 14px;
    margin-top: 15px;
  }
}

</style>
