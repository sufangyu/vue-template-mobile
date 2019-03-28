<template>
  <div class="page-labs">
    <demo-name name="Grid 宫格"></demo-name>
    <wing-blank>
      <grid>
        <grid-item>
          <div class="nav-item">1</div>
        </grid-item>
        <grid-item>
          <div class="nav-item">2</div>
        </grid-item>
        <grid-item>
          <div class="nav-item">3</div>
        </grid-item>
        <grid-item>
          <div class="nav-item">
            <div class="nav-item-icon"><icon-svg name="qq"></icon-svg></div>
            <div class="nav-item-text">QQ</div>
          </div>
        </grid-item>
        <grid-item>
          <div
            class="file-item"
            style="background-image: url(https://avatars3.githubusercontent.com/u/1852629);"
          ></div>
        </grid-item>
        <grid-item>
          <div class="nav-item">6</div>
        </grid-item>
      </grid>
    </wing-blank>
  </div>
</template>

<script>
import Grid, { GridItem } from '@/components/grid';
import WingBlank from '@/components/wing-blank';
import DemoName from './components/demo-name.vue';

export default {
  components: {
    DemoName,
    WingBlank,
    Grid,
    GridItem,
  },
};
</script>

<style lang="scss" scoped>
.nav-item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .1);
  font-size: 16px;

  &-icon {
    color: #808080;
    font-size: 36px;
    display: block;
  }

  &-text {
    font-size: 16px;
  }
}
.file-item {
  display: block;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, .1);
}
</style>
