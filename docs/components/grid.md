# Grid 宫格布局

在水平和垂直方向，将布局切分成若干等大的区块.


## 使用
```js
<template>
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
</template>

<script>
import Grid, { GridItem } from '@/components/grid';
...
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
```

## API
| 参数 | 说明 | 类型 | 必须 | 默认值|
| ------ | ------ | ------ | ------ | ------ |
| column | 列数. 值可为 3, 4 | Number | 否 | 3 |


## TODO

现每个宫格之间都又间隔, 后续可以通过配置设置无间距.